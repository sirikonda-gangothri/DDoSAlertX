import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Phone, Mail } from 'lucide-react';

const photoSrc = (name: string) => {
  const filename = `${name.replace(/\s+/g, '_')}.jpg`;
  try {
    return new URL(`../../static/${filename}`, import.meta.url).toString();
  } catch {
    return '';
  }
};

const TeamSection: React.FC = () => {
  const guides = [
    { name: 'Dr.V.RadhaKrishna', phone: '+91 97006 84242', email: 'radhakrishna_v@vnrvjiet.in' },
    { name: 'Raghupati Manthena', phone: '+91 72071 01535', email: 'mraghu30@gmail.com' },
  ];

  const members = [
    { name: 'Krishna Sai Billakanti', email: 'Krishnasaibillakanti08@gmail.com', phone: '8008957436' },
    { name: 'Aashritha Bibireddy', email: 'aashrithabibireddy@gmail.com', phone: '8297828446' },
    { name: 'SIDDARTHA SAMISETTY', email: 'samisettysiddartha2004@gmail.com', phone: '8712196308' },
    { name: 'Srimurthi Sruthi', email: 'sruthisrimurthi2004@gmail.com', phone: '+919398434291' },
    { name: 'Sirikonda Gangothri', email: 'sirikondagangothri186@gmail.com', phone: '8522802604' },
    { name: 'Aryan Nampally', email: 'aryannampally@gmail.com', phone: '+917032034239' },
    { name: 'Rishi karthikeya Balineni', email: 'rishikarthikeya41@gmail.com', phone: '6301176922' },
    { name: 'Poojitha Bejugam', email: 'poojithabejugam13@gmail.com', phone: '9347758510' },
    { name: 'Reddy Rohith', email: 'reddyrohith757@gmail.com', phone: '89196 85247' },
    { name: 'Abhilash Banda', email: 'abhilashbanda7@gmail.com', phone: '7396939296' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">Guides and team members behind DDoSAlertX</p>
          </div>

          {/* Guides */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {guides.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={photoSrc(p.name)}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement)?.classList.remove('hidden'); }}
                    alt={p.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center hidden">
                    <User className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{p.name}</h4>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2"><Phone className="h-4 w-4 text-gray-500" /><span>{p.phone}</span></div>
                  <div className="flex items-center space-x-2"><Mail className="h-4 w-4 text-gray-500" /><a href={`mailto:${p.email}`} className="text-primary-600 hover:underline">{p.email}</a></div>
                </div>
              </div>
            ))}
          </div>

          {/* Members */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={photoSrc(p.name)}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement)?.classList.remove('hidden'); }}
                    alt={p.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hidden">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{p.name}</h4>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2"><Phone className="h-4 w-4 text-gray-500" /><span>{p.phone}</span></div>
                  <div className="flex items-center space-x-2"><Mail className="h-4 w-4 text-gray-500" /><a href={`mailto:${p.email}`} className="text-primary-600 hover:underline">{p.email}</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;