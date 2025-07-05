import fs from 'fs'
import path from 'path';
import Resume from '../models/resumeModel.js'
import upload from '../middleware/uploadMiddleware.js';

export const uploadResumeImage = async (req, res) => {
    try {
        //configure multer
        upload.fields([{name: "thumbnail"}, {name:"profileImage"}])(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message:"File upload failed" , error: err.message });
            }
            const resumeId = req.params.id;
            const resume = await Resume.findOne({_id: resumeId , userId: req.user._id})

            if(!resume){
                 return res.status(400).json({ message:"resume not found" });
            }

            //use process CWD to locate uploada folder

            const uploadsFolder = path.join(process.cwd(), "uploads")
            const baseUrl  = `${req.protocol}://${req.get("host")}` ;


           const newThumbnail = req.files.thumbnail?.[0];
           const newProfileImage = req.files.profileImage?.[0];

            if(newThumbnail){
                if(resume.thumbnailLink){
                    const oldThumbnail = path.join(uploadsFolder , path.basename(resume.thumbnailLink));
                    if(fs.existsSync(oldThumbnail))
                        fs.unlinkSync(oldThumbnail)
                }
                resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
            }

            //same for profile preview image

             if(newProfileImage){
                if(resume.profileInfo?.profilePrevieUrl){
                    const oldProfile = path.join(uploadsFolder , path.basename(resume.profileInfo.profilePrevieUrl));
                    if(fs.existsSync(oldProfile))
                        fs.unlinkSync(oldProfile)
                }
                resume.profileInfo.profilePrevieUrl= `${baseUrl}/uploads/${newProfileImage.filename}`;
            }

            await resume.save();
            res.status(200).json({message:"image uploaded succesfully" , thumbnail: resume.thumbnailLink , profilePrevieUrl : resume.profileInfo.profilePrevieUrl})
        });
        
    } catch (err) {
        console.error('Error uploading image' , err)
        res.status(500).json({message:"failed to upload images" , error : err.message})
        
    }
    
}