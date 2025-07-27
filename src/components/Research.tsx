import React from 'react';
import { ArrowUpRight, Zap, BarChart3, TrendingUp } from 'lucide-react';

export const Research = () => {
  const researchAreas = [
    {
      icon: <BarChart3 size={24} className="text-yellow-500" />,
      title: "Asset Pricing Models",
      description: "Developing innovative asset pricing models that incorporate behavioral factors and market anomalies."
    },
    {
      icon: <TrendingUp size={24} className="text-yellow-500" />,
      title: "Market Microstructure",
      description: "Studying how trading mechanisms affect price formation, liquidity, and market efficiency."
    },
    {
      icon: <Zap size={24} className="text-yellow-500" />,
      title: "Financial Technology",
      description: "Exploring the impact of fintech innovations on traditional financial intermediation processes."
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-3">Areas of Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Research Interests</h3>
          <p className="text-gray-600">
            My research explores the intersection of financial economics, behavioral finance, and quantitative methods. 
            I apply rigorous empirical methods to understand financial markets and investor behavior.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                {area.icon}
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">{area.title}</h4>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <a href="#" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium">
                Learn more <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h4 className="text-yellow-500 font-semibold text-lg mb-3">Current Research Project</h4>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Behavioral Biases in Institutional Investor Decision-Making
                </h3>
                <p className="text-blue-100 mb-6">
                  This project investigates how cognitive biases affect the investment decisions of institutional investors,
                  with a focus on pension funds and mutual funds. Using proprietary data, we identify patterns of behavior
                  that deviate from rational expectations models.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Read Abstract
                  <ArrowUpRight size={16} className="ml-2" />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="h-full rounded-xl bg-blue-800 p-6">
                  <h4 className="text-white font-semibold mb-4">Key Findings</h4>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 rounded-full p-1 mt-1">
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="ml-3">Recency bias significantly affects fund manager allocation decisions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 rounded-full p-1 mt-1">
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="ml-3">Institutional herding behavior increases during market volatility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 rounded-full p-1 mt-1">
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="ml-3">Peer-relative performance incentives lead to risk-shifting behavior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};