/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, MapPin, Github, Linkedin,
  Briefcase, GraduationCap, Code, Award, 
  User, FolderGit2, ChevronRight, ExternalLink
} from 'lucide-react';
import { resumeData } from './data';

const SectionHeading = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              {resumeData.profileImage && (
                <div className="shrink-0">
                  <img 
                    src={resumeData.profileImage} 
                    alt="Profile" 
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-sm border-4 border-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                  {resumeData.name}
                </h1>
                <p className="text-xl text-indigo-600 font-medium mb-6">
                  {resumeData.title}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {resumeData.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed max-w-3xl">
                  {resumeData.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-slate-600 bg-slate-50 p-6 rounded-2xl min-w-[280px] shrink-0">
              {resumeData.contact.contactNote && (
                <div className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg mb-2">
                  💡 {resumeData.contact.contactNote}
                </div>
              )}
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-3 hover:text-indigo-600 transition-colors font-medium text-slate-800">
                <Mail size={18} className="text-indigo-500" />
                <span>{resumeData.contact.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{resumeData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{resumeData.contact.location}</span>
              </div>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
              {resumeData.contact.linkedin && (
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
              )}
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Skills */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
            >
              <SectionHeading icon={Code} title="專長與技術" />
              <div className="space-y-8">
                {resumeData.skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">{skillGroup.category}</h3>
                    <div className="space-y-4">
                      {skillGroup.items.map((item, i) => (
                        <div key={i}>
                          <span className="font-medium text-slate-700">{item.name}：</span>
                          <span className="text-slate-600 text-sm leading-relaxed">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skillGroup.tags.map(tag => (
                        <span key={tag} className="text-xs text-indigo-500 font-medium bg-indigo-50 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
            >
              <SectionHeading icon={GraduationCap} title="學歷" />
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="absolute w-2 h-2 bg-indigo-400 rounded-full -left-[5px] top-2"></div>
                    <h3 className="font-semibold text-slate-800">{edu.school}</h3>
                    <p className="text-slate-600 text-sm mt-1">{edu.department}</p>
                    <p className="text-slate-400 text-xs mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
            >
              <SectionHeading icon={Award} title="證照與語言" />
              <ul className="space-y-3">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <ChevronRight size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
            >
              <SectionHeading icon={User} title="自傳" />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {resumeData.about.map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
            >
              <SectionHeading icon={Briefcase} title="工作經驗" />
              <div className="space-y-10">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-slate-700 mb-1">{exp.title}</p>
                    <p className="text-sm text-slate-500 mb-4">{exp.location}</p>
                    <p className="text-slate-600 mb-4">{exp.description}</p>
                    
                    {exp.details && (
                      <div className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <p key={i} className="text-sm text-slate-600 whitespace-pre-line pl-4 border-l-2 border-slate-100">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
            >
              <SectionHeading icon={FolderGit2} title="專案成就" />
              <div className="space-y-10">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-sm text-slate-400 mt-1 sm:mt-0 shrink-0">
                        {project.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-slate-700">技術堆疊：</span>
                      <span className="text-sm text-slate-600">{project.techStack}</span>
                    </div>

                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
        
        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
          <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
