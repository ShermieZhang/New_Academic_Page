import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-yellow-500">Ms.</span> Zhang Shimin
            </a>
            <p className="text-blue-200 mt-2 max-w-md">Crypto researcher</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h5 className="font-medium text-yellow-500 mb-3">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#research"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#publications"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Publications
                  </a>
                </li>
                <li>
                  <a
                    href="#teaching"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Teaching
                  </a>
                </li>
                <li>
                  <a
                    href="#cv"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-yellow-500 mb-3">Affiliations</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    National University of Singapore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Asian Institute of Digital Finance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ms.Zhang Shimin. All rights reserved.
          </p>

          <p className="text-blue-300 text-sm">Last updated: July 2025</p>
        </div>
      </div>
    </footer>
  );
};
