import React from 'react';
import { BookOpen, Star, Users, Calendar } from 'lucide-react';

export const Teaching = () => {
  const courses = [
    {
      id: 1,
      code: "FIN 401",
      title: "Corporate Finance",
      level: "Graduate",
      institution: "Stanford GSB",
      year: "2023-2024",
      description: "An advanced course covering capital structure, dividend policy, mergers and acquisitions, and corporate governance.",
      rating: 4.8,
      students: 42
    },
    {
      id: 2,
      code: "FIN 305",
      title: "Investment Analysis",
      level: "Undergraduate",
      institution: "Stanford University",
      year: "2022-2023",
      description: "Introduction to investment concepts, portfolio theory, asset pricing models, and security analysis.",
      rating: 4.7,
      students: 68
    },
    {
      id: 3,
      code: "FIN 510",
      title: "Financial Markets Seminar",
      level: "PhD",
      institution: "Stanford GSB",
      year: "2023",
      description: "A research-oriented seminar focusing on recent developments in financial market theory and empirical methods.",
      rating: 4.9,
      students: 15
    }
  ];

  return (
    <section id="teaching" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-3">Academic Instruction</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Teaching Experience</h3>
          <p className="text-gray-600">
            I am passionate about teaching finance concepts and mentoring the next generation of researchers and financial professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-blue-900 text-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium bg-blue-800 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400" />
                    <span className="ml-1 text-sm">{course.rating}/5.0</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1">{course.code}: {course.title}</h4>
                <div className="flex items-center text-blue-100">
                  <BookOpen size={14} className="mr-1.5" />
                  <span>{course.institution}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    <span>{course.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1.5" />
                    <span>{course.students} students</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-900 hover:text-blue-800 font-medium"
                >
                  View Syllabus →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              <h4 className="text-2xl font-bold text-blue-900 mb-4">
                Teaching Philosophy
              </h4>
              <p className="text-gray-700 mb-4">
                My teaching approach emphasizes active learning, critical thinking, and real-world applications of financial theory. 
                I believe in creating an inclusive classroom environment that encourages diverse perspectives and fosters intellectual curiosity.
              </p>
              <p className="text-gray-700">
                By combining rigorous theoretical foundations with practical case studies and empirical exercises, 
                I prepare students to understand complex financial concepts and apply them to real-world challenges.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h5 className="font-semibold text-blue-900 mb-4">Student Testimonials</h5>
                <div className="space-y-4">
                  <div className="relative">
                    <p className="text-gray-600 italic text-sm">
                      "Professor Chen's corporate finance course was the highlight of my MBA program. His ability to explain complex concepts with clarity is exceptional."
                    </p>
                    <div className="mt-2 flex items-center text-sm">
                      <div className="w-8 h-1 bg-yellow-500 mr-2"></div>
                      <span className="font-medium text-gray-900">MBA Student, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};