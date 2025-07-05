import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nakul:nakul123@cluster0.sgolatu.mongodb.net/RESUME')
    .then(()=> console.log('DB CONNECTED'))
    
}