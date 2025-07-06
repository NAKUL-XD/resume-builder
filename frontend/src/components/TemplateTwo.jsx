"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { formatYearMonth } from "../utils/helper";

const sectionTitleClass =
  "text-sm font-semibold uppercase tracking-wide text-blue-800 border-b border-blue-300 mb-2 pb-1";

const TemplateTwo = ({ resumeData = {}, containerWidth }) => {
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
      className="resume-section p-6 bg-white font-sans text-gray-900 shadow-md rounded-lg transition-all duration-300 ease-in-out"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : undefined,
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : undefined,
        height: "1123px",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight text-blue-900 mb-1">
          {profileInfo.fullName}
        </h1>
        <p className="text-sm text-blue-700 font-medium mb-2">
          {profileInfo.designation}
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-700">
          {contactInfo.phone && <span>{contactInfo.phone}</span>}
          {contactInfo.email && (
            <a href={`mailto:${contactInfo.email}`} className="hover:underline text-blue-600">
              {contactInfo.email}
            </a>
          )}
          {contactInfo.linkedin && (
            <a href={contactInfo.linkedin} className="hover:underline text-blue-600">
              LinkedIn
            </a>
          )}
          {contactInfo.github && (
            <a href={contactInfo.github} className="hover:underline text-blue-600">
              GitHub
            </a>
          )}
          {contactInfo.website && (
            <a href={contactInfo.website} className="hover:underline text-blue-600">
              Portfolio
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {profileInfo.summary && (
        <section className="mb-4">
          <h2 className={sectionTitleClass}>Summary</h2>
          <p className="text-xs text-gray-800 leading-snug">
            {profileInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <section className="mb-4">
          <h2 className={sectionTitleClass}>Experience</h2>
          <div className="space-y-3">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="italic text-xs text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-xs text-right text-gray-600">
                    <p className="italic">
                      {formatYearMonth(exp.startDate)} - {formatYearMonth(exp.endDate)}
                    </p>
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>
                {exp.technologies && (
                  <p className="bg-blue-100 text-[10px] font-mono px-2 py-0.5 rounded inline-block">
                    {exp.technologies}
                  </p>
                )}
                <ul className="list-disc pl-4 text-xs text-gray-700">
                  {exp.description?.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-4">
          <h2 className={sectionTitleClass}>Projects</h2>
          <div className="space-y-3">
            {projects.map((proj, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-sm text-gray-800">{proj.title}</h3>
                  {proj.link && (
                    <a href={proj.link} className="text-blue-600 text-xs hover:underline">
                      {proj.linkType || "Link"}
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <p className="bg-blue-100 text-[10px] font-mono px-2 py-0.5 rounded inline-block">
                    {proj.technologies}
                  </p>
                )}
                <p className="text-xs text-gray-700">{proj.description}</p>
                <div className="flex gap-2 mt-1 text-xs">
                  {proj.github && (
                    <a href={proj.github} className="flex items-center gap-1 hover:underline text-blue-600">
                      <LuGithub size={12} /> GitHub
                    </a>
                  )}
                  {proj.liveDemo && (
                    <a href={proj.liveDemo} className="flex items-center gap-1 hover:underline text-blue-600">
                      <LuExternalLink size={12} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h2 className={sectionTitleClass}>Education</h2>
          <div className="space-y-2">
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm text-gray-800">{edu.degree}</h3>
                  <p className="italic text-xs text-gray-600">
                    {formatYearMonth(edu.startDate)} - {formatYearMonth(edu.endDate)}
                  </p>
                </div>
                <p className="italic text-xs text-gray-700">{edu.institution}</p>
                {edu.courses && (
                  <p className="text-xs">
                    <strong>Courses:</strong> {edu.courses}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className={sectionTitleClass}>Skills</h2>
          <ul className="flex flex-wrap gap-2 text-xs text-blue-900">
            {skills.map((skill, idx) => (
              <li key={idx} className="bg-blue-100 px-2 py-1 rounded-full">
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-4">
          <h2 className={sectionTitleClass}>Certifications</h2>
          <ul className="list-disc list-inside text-xs text-gray-700">
            {certifications.map((cert, idx) => (
              <li key={idx}>
                {cert.title} — {cert.issuer} ({cert.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages & Interests */}
      {(languages.length > 0 || interests.length > 0) && (
        <section className="mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {languages.length > 0 && (
              <div>
                <h2 className={sectionTitleClass}>Languages</h2>
                <ul className="flex flex-wrap gap-2 text-xs text-blue-900">
                  {languages.map((lang, idx) => (
                    <li key={idx} className="bg-blue-100 px-2 py-1 rounded-full">
                      {lang.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {interests.length > 0 && interests.some(Boolean) && (
              <div>
                <h2 className={sectionTitleClass}>Interests</h2>
                <ul className="flex flex-wrap gap-2 text-xs text-blue-900">
                  {interests.filter(Boolean).map((int, idx) => (
                    <li key={idx} className="bg-blue-100 px-2 py-1 rounded-full">
                      {int}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateTwo;
