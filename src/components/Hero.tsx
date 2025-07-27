import React from 'react';
import photo from './photo.jpeg';

import { ArrowRight, Award, BookOpen, FlaskRound as Flask } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500">
                <img
                  src="/photo.jpeg"
                  alt="Zhang Shimin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-full p-3">
                <Flask size={28} className="text-blue-900" />
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="mb-4 flex items-center">
              <span className="bg-yellow-500 text-blue-900 text-sm font-medium px-3 py-1 rounded-full">
                PhD Candidate
              </span>
              <span className="ml-3 text-gray-300">
                Digital Financial Technology
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Shimin Zhang
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Exploring the frontiers of Cryptocurrency, Blockchain, Machine
              Learning, Natural Language Process, and Policy Impact at National
              University in Singapore, Asian Institute of Digital Finance.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Award className="text-yellow-500 mr-2" size={20} />
                <span>NUS AIDF</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="text-yellow-500 mr-2" size={20} />
                <span>Top Publications</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-6 py-3 rounded-md transition-colors duration-200"
              >
                View Research
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#cv"
                className="inline-flex items-center bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
