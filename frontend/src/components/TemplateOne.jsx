import React, { useEffect, useRef, useState } from "react";
import { LuMail, LuPhone, LuGithub, LuGlobe } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import {
  EducationInfo,
  WorkExperience,
  ProjectInfo,
  CertificationInfo,
} from "./ResumeSection";
import { formatYearMonth } from "../utils/helper";

const DEFAULT_THEME = ["#ffffff", "#0d47a1", "#1e88e5", "#64b5f6", "#bbdefb"];

const Title = ({ text, color }) => (
  <div className="relative w-fit mb-2 resume-section-title">
    <h2 className="relative text-lg font-semibold uppercase tracking-wide pb-2 text-gray-900 border-b-2 border-blue-500">
      {text}
    </h2>
  </div>
);

const TemplateOne = ({ resumeData = {}, colorPalette = DEFAULT_THEME, containerWidth }) => {
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
      className="p-8 rounded-lg shadow-lg bg-white font-sans text-gray-800 animate-fadeIn"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : undefined,
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : undefined,
      }}
    >
      {/* Header */}
      <div className="resume-section flex justify-between items-start mb-6 border-b pb-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-800">{profileInfo.fullName}</h1>
          <p className="text-xl font-medium text-blue-600">{profileInfo.designation}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-700 mt-2">
            {contactInfo.email && (
              <div className="flex items-center">
                <LuMail className="mr-1" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center">
                <LuPhone className="mr-1" />
                <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            )}
            {contactInfo.location && <span>{contactInfo.location}</span>}
          </div>
        </div>
        <div className="text-sm text-right space-y-1">
          {contactInfo.linkedin && (
            <div className="flex items-center justify-end">
              <RiLinkedinLine className="mr-1" />
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
          )}
          {contactInfo.github && (
            <div className="flex items-center justify-end">
              <LuGithub className="mr-1" />
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
          )}
          {contactInfo.website && (
            <div className="flex items-center justify-end">
              <LuGlobe className="mr-1" />
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Portfolio
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {profileInfo.summary && (
        <div className="resume-section mb-6">
          <Title text="Professional Summary" />
          <p className="text-sm leading-relaxed text-gray-700 italic bg-blue-50 p-3 rounded-lg">
            {profileInfo.summary}
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          {workExperience.length > 0 && (
            <div className="resume-section">
              <Title text="Work Experience" />
              <div className="space-y-4">
                {workExperience.map((exp, i) => (
                  <WorkExperience
                    key={i}
                    company={exp.company}
                    role={exp.role}
                    duration={`${formatYearMonth(exp.startDate)} - ${formatYearMonth(exp.endDate)}`}
                    description={exp.description}
                  />
                ))}
              </div>
            </div>
          )}

          {projects.length > 0 && (
            <div className="resume-section">
              <Title text="Projects" />
              <div className="space-y-4">
                {projects.map((proj, i) => (
                  <ProjectInfo
                    key={i}
                    title={proj.title}
                    description={proj.description}
                    githubLink={proj.github}
                    liveDemoUrl={proj.liveDemo}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-1 space-y-6">
          {skills.length > 0 && (
            <div className="resume-section">
              <Title text="Skills" />
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-900 rounded"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div className="resume-section">
              <Title text="Education" />
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <EducationInfo
                    key={i}
                    degree={edu.degree}
                    institution={edu.institution}
                    duration={`${formatYearMonth(edu.startDate)} - ${formatYearMonth(edu.endDate)}`}
                  />
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="resume-section">
              <Title text="Certifications" />
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <CertificationInfo
                    key={i}
                    title={cert.title}
                    issuer={cert.issuer}
                    year={cert.year}
                  />
                ))}
              </div>
            </div>
          )}

          {languages.length > 0 && (
            <div className="resume-section">
              <Title text="Languages" />
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 bg-green-100 text-green-900 rounded"
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {interests.length > 0 && interests.some((i) => i) && (
            <div className="resume-section">
              <Title text="Interests" />
              <div className="flex flex-wrap gap-2">
                {interests.map((int, i) =>
                  int ? (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-900 rounded"
                    >
                      {int}
                    </span>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
