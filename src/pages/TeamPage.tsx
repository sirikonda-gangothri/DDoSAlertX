import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, Mail, User } from 'lucide-react';

const photoSrc = (name: string) => {
  const filename = `${name.replace(/\s+/g, '_')}.jpg`;
  try {
    return new URL(`../static/${filename}`, import.meta.url).toString();
  } catch {
    return '';
  }
};

const TeamPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Meet the experts behind DDoSAlertX
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Guides */}
          <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Dr.V.RadhaKrishna', phone: '+91 97006 84242', email: 'radhakrishna_v@vnrvjiet.in' },
                { name: 'Raghupati Manthena', phone: '+91 72071 01535', email: 'mraghu30@gmail.com' },
              ].map((p, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={photoSrc(p.name)}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement)?.classList.remove('hidden'); }}
                      alt={p.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center hidden">
                      <User className="h-7 w-7 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
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

          {/* Team Members */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((p, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={photoSrc(p.name)}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement)?.classList.remove('hidden'); }}
                      alt={p.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center hidden">
                      <Users className="h-7 w-7 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
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
    </div>
  );
};

export default TeamPage;
