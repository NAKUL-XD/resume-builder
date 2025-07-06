// components/TemplateThree.jsx

"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { formatYearMonth } from "../utils/helper";

const sectionTitleClass =
  "text-[14px] font-bold uppercase tracking-widest text-[#2C3E50] border-b border-[#BDC3C7] mb-3 pb-1";

const TemplateThree = ({ resumeData = {}, containerWidth }) => {
  const {
    profileInfo = {},
    contactInfo = {},
    education = [],
    languages = [],
    workExperience = [],
    projects = [],
    skills = [],
    certifications = [],
    interests = [],
  } = resumeData;

  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (resumeRef.current && containerWidth > 0) {
      const actualWidth = resumeRef.current.offsetWidth;
      setBaseWidth(actualWidth);
      setScale(containerWidth / actualWidth);
    }
  }, [containerWidth]);

  return (
    <div
      ref={resumeRef}
      className="bg-[#FAFAFA] p-10 font-sans text-[#2C3E50] max-w-4xl mx-auto shadow-2xl rounded-md"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : undefined,
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : undefined,
        height: "1123px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="bg-[#2C3E50] text-white p-6 rounded-md mb-6">
        <h1 className="text-3xl font-extrabold">{profileInfo.fullName}</h1>
        <p className="text-md tracking-wide italic">{profileInfo.designation}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          {contactInfo.email && <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>}
          {contactInfo.phone && <span>{contactInfo.phone}</span>}
          {contactInfo.linkedin && <a href={contactInfo.linkedin} className="hover:underline">LinkedIn</a>}
          {contactInfo.github && <a href={contactInfo.github} className="hover:underline">GitHub</a>}
          {contactInfo.website && <a href={contactInfo.website} className="hover:underline">Portfolio</a>}
        </div>
      </div>

      {/* Summary */}
      {profileInfo.summary && (
        <section className="mb-6">
          <h2 className={sectionTitleClass}>Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{profileInfo.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 space-y-6">
          {/* Experience */}
          {workExperience.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Work Experience</h2>
              {workExperience.map((exp, idx) => (
                <div key={idx}>
                  <h3 className="text-[15px] font-semibold">{exp.role} at {exp.company}</h3>
                  <p className="text-xs text-gray-500 italic">{formatYearMonth(exp.startDate)} - {formatYearMonth(exp.endDate)} | {exp.location}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                    {exp.description?.split("\n").map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Projects</h2>
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <h3 className="text-[14px] font-semibold">{proj.title}</h3>
                  <p className="text-xs text-gray-500">{proj.description}</p>
                  <div className="flex gap-3 text-xs mt-1">
                    {proj.github && <a href={proj.github} className="underline flex items-center gap-1"><LuGithub size={12}/> GitHub</a>}
                    {proj.liveDemo && <a href={proj.liveDemo} className="underline flex items-center gap-1"><LuExternalLink size={12}/> Demo</a>}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>

        <div className="col-span-2 space-y-6">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="bg-[#E0E0E0] px-3 py-1 text-xs rounded-full">{skill.name}</span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Education</h2>
              {education.map((edu, idx) => (
                <div key={idx}>
                  <h3 className="text-[14px] font-semibold">{edu.degree}</h3>
                  <p className="text-xs text-gray-600 italic">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{formatYearMonth(edu.startDate)} - {formatYearMonth(edu.endDate)}</p>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Certifications</h2>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert.title} — {cert.issuer} ({cert.year})</li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Languages</h2>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <span key={idx} className="bg-[#D1C4E9] px-3 py-1 text-xs rounded-full">{lang.name}</span>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <section>
              <h2 className={sectionTitleClass}>Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((int, idx) => (
                  int && <span key={idx} className="bg-[#B2EBF2] px-3 py-1 text-xs rounded-full">{int}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateThree;
