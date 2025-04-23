import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Therapist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
    },
    {
      name: 'Emma Williams',
      role: 'Nutritionist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section bg-sage-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-6 text-sage-800">Our Story</h1>
            <p className="text-lg text-gray-700">
              Founded in 2010, Wellness Center has been dedicated to providing holistic healing
              and wellness services to our community. Our approach combines traditional wisdom
              with modern techniques to offer comprehensive care for mind, body, and spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6 text-sage-800">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We believe in a holistic approach to wellness that treats the whole person,
                not just symptoms. Our mission is to empower individuals to achieve optimal
                health and balance in their lives through integrated wellness practices.
              </p>
              <ul className="space-y-4">
                {[
                  'Provide exceptional, personalized care',
                  'Integrate traditional and modern healing practices',
                  'Create a nurturing and peaceful environment',
                  'Educate and empower our community',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Wellness Center Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-sage-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-md mb-6 text-sage-800">Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our experienced team of practitioners is dedicated to providing you with
              the highest quality care and support on your wellness journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sage-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;