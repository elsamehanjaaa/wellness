import React from 'react';
import { Clock, MapPin, Phone, Mail, Award, Users, Leaf, Star, Check } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import Image from 'next/image';
import { useState } from 'react';


const ServicesPage = () => {
  const services = [
    {
      title: "Deep Tissue Massage",
      description: "A therapeutic massage targeting the deeper layers of muscle and connective tissue, perfect for chronic tension and pain relief.",
      image: "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$120",
      duration: "60 minutes",
      link: "/booking"
    },
    {
      title: "Swedish Massage",
      description: "A gentle, relaxing massage using long, flowing strokes to improve circulation and promote overall wellness and relaxation.",
      image: "https://images.pexels.com/photos/3865570/pexels-photo-3865570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$90",
      duration: "60 minutes",
      link: "/booking"
    },
    {
      title: "Hot Stone Therapy",
      description: "Smooth, heated stones placed on key points of the body to melt away tension and promote deep relaxation.",
      image: "https://images.pexels.com/photos/3865555/pexels-photo-3865555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$140",
      duration: "75 minutes",
      link: "/booking"
    },
    {
      title: "Rejuvenating Facial",
      description: "A customized facial treatment that cleanses, exfoliates, and nourishes the skin for a refreshed, radiant appearance.",
      image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$95",
      duration: "45 minutes",
      link: "/booking"
    },
    {
      title: "Aromatherapy Massage",
      description: "A therapeutic massage enhanced with essential oils to promote relaxation, reduce stress, and improve overall well-being.",
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$110",
      duration: "60 minutes",
      link: "/booking"
    },
    {
      title: "Body Scrub & Wrap",
      description: "An exfoliating scrub followed by a nourishing body wrap to detoxify, hydrate, and leave your skin silky smooth.",
      image: "https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$150",
      duration: "90 minutes",
      link: "/booking"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential Relaxation",
      price: "$89",
      duration: "60 min",
      features: [
        "Swedish or Aromatherapy Massage",
        "Express Facial",
        "Herbal Tea Service",
        "Access to Relaxation Lounge"
      ],
      popular: false
    },
    {
      name: "Signature Spa Day",
      price: "$159",
      duration: "120 min",
      features: [
        "Deep Tissue or Hot Stone Massage",
        "Signature Facial Treatment",
        "Hand & Foot Renewal",
        "Aromatherapy Enhancement",
        "Spa Lunch & Refreshments"
      ],
      popular: true
    },
    {
      name: "Ultimate Retreat",
      price: "$289",
      duration: "All Day",
      features: [
        "Custom Massage (90 min)",
        "Luxury Facial & Scalp Treatment",
        "Deluxe Mani-Pedi",
        "Private Relaxation Suite",
        "Gourmet Spa Cuisine",
        "Take-home Wellness Kit"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Loyal Client",
      quote: "The signature massage completely transformed my chronic shoulder pain. The therapists are incredibly knowledgeable and attentive to every detail.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Chen",
      role: "Monthly Member",
      quote: "As someone who travels constantly for work, their deep tissue massage is the only thing that keeps me functioning. Absolute lifesaver!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Rodriguez",
      role: "New Client",
      quote: "From the moment I walked in, I felt welcomed and cared for. The prenatal massage was exactly what I needed during my third trimester.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <Header/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Discover Tranquility & Renewal
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience our expertly crafted spa treatments designed to rejuvenate your body, mind, and spirit.
            </p>
            <button className="bg-pink-800 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Book Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="services" className="py-20 bg-blue-50">
          <div className="text-center mb-16">
            <span className="text-pink-800 uppercase tracking-wider font-medium">
              Our Philosophy
            </span>
            <h2 className="text-3xl text-pink-900 font-bold md:text-4xl font-serif mt-4 mb-6">
              The Art of Wellness
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                At ThermenSpa, we believe true wellness emerges when body, mind, and spirit exist in harmony. 
                Our holistic approach combines time-honored techniques with modern innovations to create 
                transformative experiences that restore balance and promote lasting well-being.
              </p>
            </div>
          </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {services.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl text-pink-900 font-serif mb-8 text-center">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group">
                    <div 
                      className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="p-6">
      <h3 className="text-xl text-black font-serif mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>

       <div className="p-6">
    

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 text-pink-800 font-medium hover:text-pink-700 transition-colors duration-300"
      >
        Learn more →
      </button>

      {/* ✅ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative overflow-y-auto max-h-[80vh] text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">Our Story</h2>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Founded in 2021</strong> by visionary entrepreneur <strong>Elena Brooks</strong> in the heart of <strong>Kosovo</strong>, EduSpark was created with a powerful mission: to revolutionize education by making high-quality online learning accessible, engaging, and transformative for learners across the globe.
              </p>
              <p>
                Recognizing the urgent need for flexible, modern educational solutions in an increasingly digital world, Elena set out to build a platform that would not only deliver knowledge but also inspire personal and professional growth.
              </p>
              <p>
                From the beginning, EduSpark distinguished itself through its commitment to innovation and learner-centric design. Our platform offers a diverse range of courses across technology, business, languages, and creative fields.
              </p>
              <p>
                EduSpark is more than just a course provider; it is a thriving learning community. Through interactive modules, personalized learning paths, live mentorship, and peer collaboration, we ensure that every learner feels supported, challenged, and inspired.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
     
    </div>
<section id="giftcards" className="py-20 bg-pink-200">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="uppercase text-pink-800 tracking-wider font-medium">
        Give the Gift of Wellness
      </span>
      <h2 className="text-3xl text-pink-900 md:text-4xl font-bold font-serif mt-4 mb-6">
        Gift Cards Available
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          Share the joy of relaxation with a spa gift card! Choose from various denominations and treat a loved one to a personalized spa experience.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        { amount: "$50", description: "Perfect for a Quick Escape", popular: false },
        { amount: "$100", description: "For a Full Spa Experience", popular: true },
        { amount: "$200", description: "For Ultimate Relaxation", popular: false },
      ].map((card, index) => (
        <div key={index} className={`relative rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg ${card.popular ? 'md:-translate-y-4' : ''}`}>
          {card.popular && (
            <div className="absolute top-0 right-0 -mr-14 -mt-14 w-40 h-40 rotate-45">
              <div className="absolute top-32 left-0 w-40 text-center text-sm font-semibold py-1 bg-pink-800 text-white shadow-md">
                Popular
              </div>
            </div>
          )}

          <div className={`p-8 h-full flex flex-col ${card.popular ? 'bg-blue-50' : 'bg-white'}`}>
            <h3 className="text-2xl text-pink-900 font-serif mb-2">
              Gift Card - {card.amount}
            </h3>
            <p className="text-gray-600 mb-6">{card.description}</p>
            <button
              className={`w-full py-3 px-4 rounded-lg text-center transition-colors duration-300 ${card.popular ? 'bg-pink-800 hover:bg-pink-700 text-white' : 'bg-white border-2 border-pink-800 text-pink-800 hover:bg-pink-100'}`}
            >
              Purchase Gift Card
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  
</section>

    <Footer/>
    </>
  );
};

export default Services;