import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Leaf, Award } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const AboutUs = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10,000+' },
    { icon: Heart, label: 'Years of Service', value: '15+' },
    { icon: Award, label: 'Expert Therapists', value: '25+' },
    { icon: Leaf, label: 'Treatments', value: '50+' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      image: 'https://images.pexels.com/photos/5214976/pexels-photo-5214976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Specialized in integrative medicine with 15+ years of experience in holistic healing.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Therapist',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Master practitioner in traditional Chinese medicine and modern therapeutic techniques.'
    },
    {
      name: 'Emma Williams',
      role: 'Wellness Coach',
      image: 'https://images.pexels.com/photos/5721098/pexels-photo-5721098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Certified wellness coach specializing in holistic lifestyle transformation.'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>   
     <Header/>
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-emerald-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Spa atmosphere"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Your Journey to Wellness Begins Here
            </h1>
            <p className="text-xl text-emerald-100">
              At ThermenSpa, we believe in nurturing the connection between mind, body, and spirit
              through holistic healing practices and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700">
                Founded in 2010, ThermenSpa emerged from a vision to create a sanctuary where
                ancient healing wisdom meets modern wellness practices. Our journey began with
                a simple belief: true wellness encompasses the whole person - body, mind, and spirit.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to evolve and grow, incorporating the latest research and
                techniques while staying true to our holistic roots. Our commitment to
                excellence and personalized care remains unwavering.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced practitioners are dedicated to guiding you on your wellness journey
              with expertise and compassion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Begin Your Wellness Journey Today
            </h2>
            <p className="text-emerald-100 mb-8">
              Experience the transformative power of holistic healing at ThermenSpa.
            </p>
            <button className="bg-white text-emerald-800 px-8 py-3 rounded-full font-medium hover:bg-emerald-100 transition-colors">
              Book Your Appointment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;