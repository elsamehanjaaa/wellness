"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Leaf, Heart, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-secondary-50/20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-primary-100/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-secondary-100/20 blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container relative mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-medium text-sm w-fit"
            >
              <Leaf className="w-4 h-4" />
              <span>Holistic Wellness & Healing</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Journey to <span className="text-primary-600">Wellness</span> Starts Here
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience holistic healing and rejuvenation at our 
              state-of-the-art wellness center. Our expert practitioners 
              are dedicated to helping you achieve optimal health and balance.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-200 transition duration-200"
              >
                <Heart className="w-4 h-4 mr-2" />
                Book Your Session
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-200 hover:bg-primary-50 text-primary-700 transition duration-200"
              >
                <Sun className="w-4 h-4 mr-2" />
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-3 w-full">
                <Image 
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Wellness Center"
                  width={1000}
                  height={750}
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary-200/80 backdrop-blur-sm z-0 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-secondary-200/80 backdrop-blur-sm z-0 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              />
            </div>
            
            {/* Review badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 md:-bottom-8 right-8 md:right-16 bg-white px-5 py-3 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="ml-2 text-sm font-medium text-gray-700">
                  Trusted by 2,000+ clients
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;