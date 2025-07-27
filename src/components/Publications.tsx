import React, { useState } from 'react';
import { FileText, Users, Calendar, ExternalLink } from 'lucide-react';

export const Publications = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Publications' },
    { id: 'journal', name: 'Journal Articles' },
    { id: 'working', name: 'Working Papers' },
    { id: 'conference', name: 'Conference Papers' }
  ];
  
  const publications = [
    {
      id: 1,
      title: "Dynamic Asset Pricing in Segmented Markets",
      authors: "Chen, W., Johnson, S., & Smith, R.",
      journal: "Journal of Financial Economics",
      year: 2024,
      type: "journal",
      link: "#",
      abstract: "This paper develops a dynamic model of asset pricing in segmented markets, where investor participation constraints lead to systematic mispricing and return predictability."
    },
    {
      id: 2,
      title: "Institutional Investors and Information Diffusion in Financial Markets",
      authors: "Chen, W. & Williams, A.",
      journal: "Review of Financial Studies",
      year: 2023,
      type: "journal",
      link: "#",
      abstract: "We examine how institutional investors affect the speed of information diffusion across related securities and identify network effects in price discovery."
    },
    {
      id: 3,
      title: "Machine Learning Applications in Predicting Market Anomalies",
      authors: "Chen, W., Davis, M., & Anderson, J.",
      journal: "Working Paper",
      year: 2023,
      type: "working",
      link: "#",
      abstract: "This paper applies machine learning methods to predict and explain market anomalies, demonstrating superior forecasting power compared to traditional factor models."
    },
    {
      id: 4,
      title: "ESG Disclosure Quality and Firm Valuation: Evidence from Global Markets",
      authors: "Chen, W., Thompson, H., & Park, J.",
      journal: "American Finance Association Annual Meeting",
      year: 2023,
      type: "conference",
      link: "#",
      abstract: "We develop a novel measure of ESG disclosure quality and examine its relationship with firm valuation across 32 countries, finding significant valuation premiums for high-quality disclosures."
    },
    {
      id: 5,
      title: "Liquidity Provision and Market Stability: Evidence from High-Frequency Trading",
      authors: "Chen, W.",
      journal: "Working Paper",
      year: 2022,
      type: "working",
      link: "#",
      abstract: "This paper investigates the role of high-frequency traders as liquidity providers during periods of market stress, using a unique dataset from a major exchange."
    }
  ];
  
  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-3">Scholarly Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Publications & Research</h3>
          <p className="text-gray-600">
            My published research appears in leading finance and economics journals, exploring various 
            aspects of financial markets, asset pricing, and institutional investment behavior.
          </p>
        </div>

        <div className="flex overflow-x-auto lg:justify-center mb-10 pb-2">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  filter === category.id 
                    ? 'bg-blue-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPublications.map(pub => (
            <div 
              key={pub.id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pub.type === 'journal' ? 'bg-green-100 text-green-800' :
                    pub.type === 'working' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {pub.type === 'journal' ? 'Journal Article' : 
                     pub.type === 'working' ? 'Working Paper' : 
                     'Conference Paper'}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{pub.year}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700">
                  {pub.title}
                </h4>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Users size={16} className="mr-2" />
                  <span>{pub.authors}</span>
                </div>
                
                <div className="flex items-center text-gray-700 mb-4">
                  <FileText size={16} className="mr-2" />
                  <span>{pub.journal}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{pub.abstract}</p>
                
                <div className="flex items-center">
                  <a 
                    href={pub.link} 
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    Read Full Paper
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
};