import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
} from 'lucide-react';

export const CV = () => {
  const [openSection, setOpenSection] = useState('education');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const education = [
    {
      degree: 'Ph.D. in Digital Financial Technology',
      institution:
        'National University in Singapore, Asian Institute of Digital Finance',
      location: 'Singapore',
      years: '2022-Present',
      details: [
        'Dissertation: "PoW"',
        'Advisor: Prof. Daniel Rabetti',
        'Expected completion: Spring 2027',
      ],
    },
    {
      degree: 'M.S. in Financial Mathematics',
      institution: 'Johns Hopkins University',
      location: 'Baltimore, MD',
      years: '2019-2021',
      details: ['GPA: 3.70/4.0'],
    },
    {
      degree: 'B.S. in Mathematics',
      institution: 'University of Connecticut',
      location: 'Storrs, CT',
      years: '2015-2019',
      details: [
        'Dean’s List',
        'GPA: 3.68/4.0',
        'Major GPA:3.96/4.0',
        'Minor in Economics',
      ],
    },
  ];

  const experience = [
    {
      position: 'Research Assistant',
      organization: 'Federal Reserve Bank of New York',
      location: 'New York, NY',
      years: 'Summer 2022',
      details: [
        'Conducted research on the impact of monetary policy on corporate bond spreads',
        'Developed econometric models to analyze high-frequency financial data',
        'Presented findings to the Research Department and senior economists',
      ],
    },
    {
      position: 'Summer Associate',
      organization: 'Goldman Sachs, Quantitative Strategies',
      location: 'New York, NY',
      years: 'Summer 2021',
      details: [
        'Developed trading algorithms for fixed income securities',
        'Implemented machine learning models to predict bond price movements',
        'Collaborated with trading desk on strategy implementation',
      ],
    },
    {
      position: 'Research Analyst',
      organization: 'Capital Group',
      location: 'Los Angeles, CA',
      years: '2018-2020',
      details: [
        'Conducted fundamental and quantitative analysis of global equity securities',
        'Supported portfolio managers with investment recommendations',
        'Created financial models to estimate intrinsic value and identify mispricing',
      ],
    },
  ];

  const awards = [
    {
      title: 'AQR Top Finance Graduate Award',
      year: '2023',
      details:
        'Recognized as one of the most promising finance Ph.D. students worldwide',
    },
    {
      title: 'Jack Jensen Prize for Best Paper in Corporate Finance',
      year: '2022',
      details:
        'Awarded for the paper "Corporate Investment and Financing Constraints"',
    },
    {
      title: 'Stanford GSB Fellowship',
      year: '2020-2024',
      details:
        'Full doctoral fellowship awarded to outstanding Ph.D. candidates',
    },
    {
      title: 'Financial Management Association Best Paper Award',
      year: '2022',
      details:
        'For contribution to financial economics research at the annual FMA conference',
    },
  ];

  const skills = [
    {
      category: 'Technical',
      items: [
        'Econometrics',
        'Time Series Analysis',
        'Panel Data Methods',
        'Stochastic Calculus',
      ],
    },
    {
      category: 'Programming',
      items: ['Python', 'R', 'MATLAB', 'SQL', 'Stata'],
    },
    {
      category: 'Languages',
      items: [
        'English (Native)',
        'Mandarin Chinese (Native)',
        'French (Intermediate)',
      ],
    },
  ];

  return (
    <section id="cv" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-3">
              Academic Credentials
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Curriculum Vitae
            </h3>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
              >
                <FileText size={18} className="mr-2" />
                Download Full CV (PDF)
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection('education')}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center">
                  <GraduationCap size={24} className="text-blue-900 mr-3" />
                  <h4 className="text-xl font-semibold text-blue-900">
                    Education
                  </h4>
                </div>
                {openSection === 'education' ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {openSection === 'education' && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className={
                          index > 0 ? 'pt-6 border-t border-gray-100' : ''
                        }
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h5 className="text-lg font-semibold text-blue-900">
                            {edu.degree}
                          </h5>
                          <span className="text-sm font-medium text-gray-500">
                            {edu.years}
                          </span>
                        </div>
                        <div className="text-gray-700 mb-2">
                          {edu.institution}, {edu.location}
                        </div>
                        <ul className="space-y-1 text-gray-600">
                          {edu.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection('experience')}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center">
                  <Briefcase size={24} className="text-blue-900 mr-3" />
                  <h4 className="text-xl font-semibold text-blue-900">
                    Professional Experience
                  </h4>
                </div>
                {openSection === 'experience' ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {openSection === 'experience' && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className={
                          index > 0 ? 'pt-6 border-t border-gray-100' : ''
                        }
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h5 className="text-lg font-semibold text-blue-900">
                            {exp.position}
                          </h5>
                          <span className="text-sm font-medium text-gray-500">
                            {exp.years}
                          </span>
                        </div>
                        <div className="text-gray-700 mb-2">
                          {exp.organization}, {exp.location}
                        </div>
                        <ul className="space-y-1 text-gray-600">
                          {exp.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Awards */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection('awards')}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center">
                  <Award size={24} className="text-blue-900 mr-3" />
                  <h4 className="text-xl font-semibold text-blue-900">
                    Honors & Awards
                  </h4>
                </div>
                {openSection === 'awards' ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {openSection === 'awards' && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {awards.map((award, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-1">
                          {award.title}
                        </h5>
                        <div className="text-sm text-yellow-600 mb-2">
                          {award.year}
                        </div>
                        <p className="text-sm text-gray-600">{award.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection('skills')}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center">
                  <Globe size={24} className="text-blue-900 mr-3" />
                  <h4 className="text-xl font-semibold text-blue-900">
                    Skills & Competencies
                  </h4>
                </div>
                {openSection === 'skills' ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {openSection === 'skills' && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <div
                        key={index}
                        className={
                          index > 0 ? 'pt-4 border-t border-gray-100' : ''
                        }
                      >
                        <h5 className="font-semibold text-blue-900 mb-3">
                          {skillGroup.category}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
