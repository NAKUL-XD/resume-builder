import React from "react";
import { LuMail, LuPhone, LuGithub, LuGlobe } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import {
  EducationInfo,
  WorkExperience,
  ProjectInfo,
  CertificationInfo,
} from "./ResumeSection";
import { formatYearMonth } from "../utils/helper";
import "./TemplateOne.css";

const DEFAULT_THEME = ["#ffffff", "#0d47a1", "#1e88e5", "#64b5f6", "#bbdefb"];

const Title = ({ text }) => (
  <div className="relative w-fit mb-2 resume-section-title">
    <h2 className="relative text-lg font-semibold uppercase tracking-wide pb-2 text-gray-900 border-b-2 border-blue-500">
      {text}
    </h2>
  </div>
);

const TemplateOne = ({
  resumeData = {},
  colorPalette = DEFAULT_THEME,
}) => {
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

  return (
    <div className="template-wrapper p-6 md:p-8 rounded-lg shadow-lg bg-white font-sans text-gray-800">
      {/* Header */}
      <div className="resume-section flex flex-col md:flex-row md:justify-between md:items-start mb-6 border-b pb-4">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            {profileInfo.fullName}
          </h1>
          <p className="text-lg md:text-xl font-medium text-blue-600">
            {profileInfo.designation}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-700 mt-2 break-all">
            {contactInfo.email && (
              <div className="flex items-center">
                <LuMail className="mr-1" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline break-all"
                >
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
        <div className="text-sm text-left md:text-right space-y-1">
          {contactInfo.linkedin && (
            <div className="flex items-center md:justify-end">
              <RiLinkedinLine className="mr-1" />
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          )}
          {contactInfo.github && (
            <div className="flex items-center md:justify-end">
              <LuGithub className="mr-1" />
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          )}
          {contactInfo.website && (
            <div className="flex items-center md:justify-end">
              <LuGlobe className="mr-1" />
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
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

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
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
        <div className="space-y-6">
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
                {interests.map(
                  (int, i) =>
                    int && (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-900 rounded"
                      >
                        {int}
                      </span>
                    )
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
