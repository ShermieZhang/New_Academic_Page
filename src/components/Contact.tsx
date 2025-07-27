import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Twitter,
  Linkedin,
  Globe,
} from 'lucide-react';
import { RichTextEditor } from './RichTextEditor';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Contact Information
          </h3>
          <p className="text-gray-600">
            If you're interested in my research, potential collaborations, or
            have questions about my work, please don't hesitate to reach out.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 text-white">
                <h4 className="text-2xl font-bold mb-6">Contact Details</h4>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-800 p-3 rounded-lg mr-4">
                      <Mail size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Email</h5>
                      <p className="text-blue-100">shimin@u.nus.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-800 p-3 rounded-lg mr-4">
                      <MapPin size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Office</h5>
                      <p className="text-blue-100">
                        Asian Institute of Digital Finance
                        <br />
                        Innovation 4 (i4.0) Building,
                        <br />
                        3 Research Link,
                        <br />
                        #04-03,
                        <br />
                        Singapore 117602
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-800 p-3 rounded-lg mr-4">
                      <Phone size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Phone</h5>
                      <p className="text-blue-100">+65 8029 8200</p>
                      <p className="text-sm text-blue-200 mt-1"></p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="font-medium mb-3">Connect</h5>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                    >
                      <Twitter size={20} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                    >
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                    >
                      <Globe size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10">
                <h4 className="text-2xl font-bold text-blue-900 mb-6">
                  Send a Message
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <RichTextEditor
                      content={formData.message}
                      onChange={(content) =>
                        setFormData({ ...formData, message: content })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">
              Academic Collaborations
            </h4>
            <p className="text-gray-600 mb-4">
              I am always open to potential collaborations with fellow
              researchers, industry professionals, and institutions on topics
              related to Cryptocurrency and Blockchain.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-900 hover:text-blue-800 font-medium"
            >
              Learn more about my collaborative projects
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
