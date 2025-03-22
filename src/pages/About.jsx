// WhoWeAre.js
import React, { useState, useEffect } from 'react';
import { Globe, Users, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Prof. Dr. Hari Prasad Neupane',
    designation: 'Patron',
    profilePic: '/hari.jpeg',
    statement: '"Guiding the club with wisdom and vision."',
    socialLinks: { linkedin: 'https://linkedin.com/in/patron' },
  },
  {
    name: 'Associate Prof. Dr Khagendra Acharya',
    designation: 'Advisor',
    profilePic: '/khagendra.jpeg',
    statement: '"Providing invaluable advice and support."',
    socialLinks: { linkedin: 'https://linkedin.com/in/advisor' },
  },
  {
    name: 'Dibyansh Sah',
    designation: 'President',
    profilePic: '/dib.jpeg',
    statement: '"Leading with dedication and purpose."',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/dibyanshsah/' },
  },
  {
    name: 'Anubhav Ghimire',
    designation: 'Alumni',
    profilePic: '/anubhav.jpeg',
    statement: '"Contributing expertise and guidance."',
    socialLinks: { linkedin: 'https://linkedin.com/in/alumni1' },
  },
  {
    name: 'Prashant Kandel',
    designation: 'Alumni',
    profilePic: '/prashant.jpeg',
    statement: '"Supporting club growth and development."',
    socialLinks: { linkedin: 'https://linkedin.com/in/alumni2' },
  },
  {
    name: 'Puspa Das',
    designation: 'Alumni',
    profilePic: '/puspa.jpeg',
    statement: '"Mentoring and sharing experiences."',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/puspa-das-253b8a1b9' },
  },
  {
    name: 'Shashwat Mani Risal',
    designation: 'Vice President',
    profilePic: '/shaswat.jpeg',
    statement: '"Coordinating and supporting club initiatives."',
    socialLinks: { linkedin: 'https://linkedin.com/in/vp' },
  },
  {
    name: 'Ravi Kumar Pajiyar',
    designation: 'Developer Head',
    profilePic: '/ravipp.jpg',
    statement: '"Leading technical development and innovation."',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/ravi-pajiyar-a4a5512ba/' },
  },
  {
    name: 'Sarita Sapkota',
    designation: 'Media Head',
    profilePic: '/saritanew.jpg',
    statement: '"Managing media outreach and communications."',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/sarita-sapkota-80683b332/' },
  },
];

const WhoWeAre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(teamMembers.length / 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(teamMembers.length / 3) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <Navbar />
      <div className="bg-gray-100">
        <div className="relative">
          <img
            src="/voluntereer.jpeg"
            alt="KUYRCC volunteers in action"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-navy-900 bg-opacity-60">
            <div className="container mx-auto px-6 py-16">
              <h1 className="text-4xl font-bold text-white">About KUYRCC</h1>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who are we and what do we do?</h2>
          <p className="text-gray-700 text-lg mb-6">
            KUYRCC (Kathmandu University Youth Red Cross Circle) is a student-led initiative that
            acts before, during, and after emergencies to meet the needs and improve the lives of
            vulnerable people in our community.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            We are a humanitarian organization that unites students and faculty members of Kathmandu
            University, fostering leadership and community engagement through various social and
            humanitarian activities.
          </p>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6">
              The mission of KUYRCC is to inspire, encourage, facilitate and promote humanitarian
              activities within Kathmandu University and surrounding communities. We do so with a
              view to preventing and alleviating human suffering, thereby contributing to the
              maintenance and promotion of human dignity and peace.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Key Figures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Active Members</h3>
              <p className="text-gray-600">Over 200 dedicated volunteers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600">Serving local communities since establishment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Projects</h3>
              <p className="text-gray-600">Multiple ongoing humanitarian initiatives</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet Our Key Team Members</h2>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/3 flex-shrink-0 px-4"
                        >
                            <div className="bg-red-50 p-6 rounded-lg shadow-lg text-center">
                            <img
                                src={member.profilePic}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600"
                            />
                            <h3 className="text-lg font-bold text-red-800">
                                {member.name}
                            </h3>
                            <p className="text-sm text-red-600 font-semibold mb-2">
                                {member.designation}
                            </p>
                            <p className="text-sm text-gray-500 italic mb-4">
                                {member.statement}
                            </p>
                            <a
                                href={member.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                LinkedIn Profile
                            </a>
                            </div>
                        </div>
                        ))}
                    </div>
                    <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full hover:bg-red-700"
                    >
                    ←
                    </button>
                    <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full hover:bg-red-700"
                    >
                    →
                    </button>
                </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WhoWeAre;