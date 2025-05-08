import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Bath, Thermometer, ShowerHead, Hotel as Hot, Space as Spa, Clock, Calendar, Users, Leaf, Award, Star } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
  const revealRefs = useRef([]);
  const [isBookingVisible, setBookingVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 }
          });
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  // Define color scheme
  const colors = {
    primary: '#3A5A78',       // Spa blue (dark teal)
    secondary: '#D4AF37',     // Spa gold
    accent: '#A38F6B',        // Neutral accent
    lightBg: '#F8F5F2',       // Light background
    darkText: '#2D3748',      // Dark text
    lightText: '#FFFFFF'      // Light text
  };

  const addToRevealRefs = (el, index) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current[index] = el;
    }
  };

  const services = [
    {
      icon: <Bath className="w-10 h-10" />,
      title: "Thermal Baths",
      description: "Experience therapeutic baths to soothe your body and mind.",
      details: "Our mineral-rich thermal baths are maintained at optimal temperatures for maximum therapeutic benefits.",
      image: "https://images.unsplash.com/photo-1562325959-df4f8f36c480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "Sauna Experience",
      description: "Relax and detox in our premium sauna facilities.",
      details: "Choose between traditional Finnish sauna, infrared, or steam rooms for your perfect detox session.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <ShowerHead className="w-10 h-10" />,
      title: "Hydrotherapy",
      description: "Rejuvenate with targeted hydrotherapy sessions.",
      details: "Our Vichy shower treatments and hydro-massage pools provide targeted relief for muscle tension.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Hot className="w-10 h-10" />,
      title: "Luxury Accommodation",
      description: "Stay in our premium spa resort rooms.",
      details: "Wake up to breathtaking views with our signature turndown service and pillow menu.",
      image: "https://images.unsplash.com/photo-1582719471388-93b9cc7a1a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Spa className="w-10 h-10" />,
      title: "Holistic Treatments",
      description: "Balance your mind and body with our therapies.",
      details: "From Ayurvedic rituals to crystal healing, our expert practitioners tailor each session to your needs.",
      image: "https://images.unsplash.com/photo-1544168212-5a423defd9fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Organic Products",
      description: "We use only the finest natural ingredients.",
      details: "All our products are cruelty-free, sustainably sourced, and free from harmful chemicals.",
      image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Client",
      quote: "The thermal baths transformed my chronic pain. I'm a regular now!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      name: "Michael Chen",
      role: "First-time Visitor",
      quote: "Exceptional service from start to finish. Worth every penny.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Spa Enthusiast",
      quote: "The most relaxing experience I've had in years. Already booked my next visit!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Relaxation",
      price: "$89",
      duration: "60 min",
      features: ["Thermal bath access", "Sauna session", "Herbal tea"],
      popular: false
    },
    {
      name: "Premium Spa Day",
      price: "$159",
      duration: "120 min",
      features: ["Full body massage", "Facial treatment", "Lunch included"],
      popular: true
    },
    {
      name: "Luxury Retreat",
      price: "$299",
      duration: "Full day",
      features: ["All access pass", "Private suite", "Personal therapist"],
      popular: false
    }
  ];
  
  
  

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/services/spaservices.avif')",
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
           <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-pink-300 ">
  Transformative Wellness Experiences
</h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
                Discover our curated collection of spa services designed to rejuvenate your body, mind, and spirit.
              </p>
              <button 
                onClick={() => setBookingVisible(true)}
                className="bg-pink-800 hover:bg-pink-400 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Book Your Session
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-800 uppercase tracking-wider font-medium" >
                Our Philosophy
              </span>
              <h2 className="text-3xl text-blue-800 font-bold md:text-4xl font-serif mt-4 mb-6" >
                Holistic Approach to Wellness
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600">
                  At our spa, we believe true wellness comes from harmony between body, mind, and environment. 
                  Our expert therapists combine ancient techniques with modern science to create personalized experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-10 h-10" />,
                  title: "Certified Experts",
                  description: "All therapists hold advanced certifications in their specialties."
                },
                {
                  icon: <Leaf className="w-10 h-10" />,
                  title: "Sustainable Practices",
                  description: "We're committed to eco-friendly operations and products."
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Personalized Care",
                  description: "Each treatment is tailored to your unique needs."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#F8F5F2] p-8 rounded-lg text-center"
                  style={{ backgroundColor: colors.lightBg }}
                >
                  <div className="text-blue-900 mb-4 mx-auto flex justify-center" >
                    {item.icon}
                  </div>
                  <h3 className="text-xl  text-blue-800 font-bold mb-3" >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#F8F5F2]" >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-pink-800 uppercase tracking-wider font-medium">
                Our Offerings
              </span>
              <h2 className="text-3xl text-pink-900 font-bold  md:text-4xl font-serif mt-4 mb-6" >
                Signature Services
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600">
                  Explore our comprehensive range of treatments designed to address your specific wellness goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-0 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div 
                    className="h-48 bg-cover bg-center" 
                  />
                  <div className="p-8">
                    <div className="text-pink-800 mb-4" >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-serif mb-3" >
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <p className="text-gray-500 text-sm">{service.details}</p>
                    <button 
                      className="mt-4 font-medium transition-colors duration-300"
                    >
                      Learn more →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span
        className="uppercase text-blue-800 tracking-wider font-medium"
      >
        Investment
      </span>
      <h2
        className="text-3xl text-blue-900 md:text-4xl font-bold font-serif mt-4 mb-6"
      >
        Wellness Packages
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-blue-700">
          We offer flexible options to suit your schedule and wellness objectives.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {pricingPlans.map((plan, index) => (
    <Link href={plan.href || '#'} key={index}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`block bg-blue-100 
             
             rounded-xl shadow-2xlg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 ${
          plan.popular ? 'ring-2 transform md:-translate-y-4' : ''
        }`}
      >
        {plan.popular && (
          <div className="text-center bg-blue-800 text-blue-200 py-2 font-medium">
            Most Popular
          </div>
        )}
        <div className="p-8">
          <h3 className="text-2xl text-blue-800 font-serif mb-2">
            {plan.name}
          </h3>
          <div className="flex items-end mb-6">
            <span className="text-4xl text-blue-800 font-medium">
              {plan.price}
            </span>
            <span className="text-sky-600 ml-2">/{plan.duration}</span>
          </div>
          <ul className="space-y-3 mb-8 text-black">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div
            className={`w-full text-blue-900 font-semibold py-3 px-4 rounded-lg font-medium text-center transition-colors duration-300 ${
              plan.popular
                ? 'text-blue-900'
                : 'bg-blue-900 hover:bg-blue-00 text-gray-800'
            }`}
          >
            Select Package
          </div>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

  </div>
</section>;


        {/* Testimonials Section */}
        <section className="py-20 bg-[#F8F5F2]" style={{ backgroundColor: colors.lightBg }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-800 uppercase tracking-wider font-medium" style={{ color: colors.secondary }}>
                Client Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6" style={{ color: colors.darkText }}>
                What Our Guests Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#D4AF37] fill-current' : 'text-gray-300'}`} 
                        style={{ color: i < testimonial.rating ? colors.secondary : '' }}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium" style={{ color: colors.darkText }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>

     

      <Footer />
    </>
  );
};

export default Services;