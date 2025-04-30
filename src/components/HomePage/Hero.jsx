import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import { Leaf, Heart, Sun, Star, Menu, X, MapPin, Phone, Clock, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Mail, PhoneCall } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';
import Header from '../Header';
import Footer from '../Footer';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 16 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2.2, spacing: 18 },
      },
    },
  });

  const services = [
    {
      title: "Skincare & Facials",
      description: "Pamper yourself with a facial treatment using natural ingredients that nourish and rejuvenate your skin, leaving it glowing and refreshed.",
      image: "https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Body Treatments",
      description: "Enjoy exotic body scrub treatments to relax your body and soul. Our therapists use premium organic products for a rejuvenating experience.",
      image: "https://images.pexels.com/photos/5938605/pexels-photo-5938605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Couples Treatments",
      description: "Renew and balance mind, body and soul in a shared spa experience. Create lasting memories with your partner in our tranquil environment.",
      image: "https://images.pexels.com/photos/7363080/pexels-photo-7363080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Cryoskin Therapy",
      description: "Cryotherapy introduced for inflammation, arthritis and muscle recovery. Experience the healing power of cold treatments in a controlled setting.",
      image: "https://images.pexels.com/photos/7363077/pexels-photo-7363077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Manicure & Pedicure",
      description: "Massages, exfoliation, wax, and care for hands and feet. Our specialists use premium products for a luxurious nail care experience.",
      image: "https://images.pexels.com/photos/4210864/pexels-photo-4210864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: ["Kingston Street 3201", "New Jersey, NY, USA"],
      color: "bg-teal-700"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+31 02–123–456–789", "Fax: 02–023–456–987"],
      color: "bg-teal-800"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Open every day", "08:00 AM — 11:00 PM"],
      color: "bg-teal-900"
    }
  ];

  return (
    <>
     <Header/>
   
    <div className="font-montserrat text-gray-800">
    
    
      <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-teal-900 via-teal-800 to-teal-700">
        <motion.div
          className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-teal-500/20 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-teal-400/20 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm w-fit"
              >
                <Leaf className="w-4 h-4" />
                <span>Holistic Wellness & Nature</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Reconnect with <span className="text-spa-accent">Nature</span> & Yourself
              </motion.h1>

              <motion.p 
                className="text-lg text-teal-100 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Experience peace and restoration through nature-inspired healing practices at our tranquil wellness retreat. Our holistic treatments help restore balance to mind, body, and spirit.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="#booking"
                  className="btn btn-primary"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Book Now
                </a>
                <a 
                  href="#about"
                  className="btn btn-secondary border-white/70 text-white hover:bg-white/10"
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Learn More
                </a>
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
                  <img 
                    src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Wellness Center"
                    className="object-cover h-[350px] md:h-[450px] w-full contrast-110 saturate-110"
                  />
                </div>

                <motion.div 
                  className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-spa-light/70 backdrop-blur-sm z-0 hidden md:block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-teal-100/70 backdrop-blur-sm z-0 hidden md:block"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                />
              </div>

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
                    Loved by nature seekers
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="relative bg-gray-50 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title font-bold text-3xl">Our Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium treatments designed to rejuvenate your mind, body, and spirit
            </p>
          </div>

          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {services.map((service, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="card h-full">
                    <div className="h-48 relative w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-teal-800 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{service.description}</p>
                      <a href="#" className="text-teal-600 font-medium text-sm hover:underline flex items-center gap-1">
                        Read More <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                instanceRef.current?.prev();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-r z-10 shadow-md hover:bg-teal-700 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                instanceRef.current?.next();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-l z-10 shadow-md hover:bg-teal-700 transition"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="uppercase text-sm text-teal-600 tracking-wide font-semibold mb-2">
              Our story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nurturing Well-being Since 1986
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Thermen Spa & Wellness offers signature treatments inspired by ancient healing traditions 
              and modern wellness science. Guests experience a perfect harmony of simple luxuries through our
              expansive collection of relaxing, professional treatments utilizing natural and organic products.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our professional staff will work with you to <strong className="text-gray-800">meet your unique needs.</strong> Whether 
              you are new to massage & skin care treatments or a long-time wellness enthusiast, our treatments 
              are crafted to enhance your senses and overall well-being through personalized care.
            </p>

            <div className="flex items-center gap-4 mt-8 border-t pt-6 border-gray-100">
              <div>
                <h4 className="font-semibold text-gray-800">Ashley Willes</h4>
                <p className="text-sm text-gray-500">CEO & Lead Therapist</p>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-4">
            <motion.div 
              className="w-1/2 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="facial"
                className="object-cover h-full w-full rounded-lg hover:scale-105 transition duration-500"
              />
            </motion.div>
            <motion.div 
              className="w-1/2 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="tea relax"
                className="object-cover h-full w-full rounded-lg hover:scale-105 transition duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title font-bold text-2xl ">Visit Our Center</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We're conveniently located in the heart of the city, providing a tranquil oasis amidst the urban bustle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className={`${item.color} text-white p-4 flex items-center justify-center h-full`}>
                  {item.icon}
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? 'text-gray-600' : 'text-gray-500'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831236555!2d-74.14448217266354!3d40.697370921541294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1663274763338!5m2!1sen!2sca" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map location"
                className="w-full h-[450px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Hero;