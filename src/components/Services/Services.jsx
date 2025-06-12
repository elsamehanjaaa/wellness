import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ServicesPage = () => {
  const services = [
    {
      title: "Deep Tissue Massage",
      description: "A therapeutic massage targeting the deeper layers of muscle and connective tissue, perfect for chronic tension and pain relief.",
      image: "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg",
      price: "$120",
      duration: "60 minutes",
      link: "/booking"
    },
    {
      title: "Swedish Massage",
      description: "A gentle, relaxing massage using long, flowing strokes to improve circulation and promote overall wellness and relaxation.",
      image: "https://images.pexels.com/photos/3865570/pexels-photo-3865570.jpeg",
      price: "$90",
      duration: "60 minutes",
      link: "/booking"
    },
    {
      title: "Hot Stone Therapy",
      description: "Smooth, heated stones placed on key points of the body to melt away tension and promote deep relaxation.",
      image: "https://images.pexels.com/photos/3865555/pexels-photo-3865555.jpeg",
      price: "$140",
      duration: "75 minutes",
      link: "/booking"
    },
    {
      title: "Rejuvenating Facial",
      description: "A customized facial treatment that cleanses, exfoliates, and nourishes the skin for a refreshed, radiant appearance.",
      image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
      price: "$95",
      duration: "45 minutes",
      link: "/booking"
    },
    {
      title: "Aromatherapy Massage",
      description: "A therapeutic massage enhanced with essential oils to promote relaxation, reduce stress, and improve overall well-being.",
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
      price: "$110",
      duration: "60 minutes",
      link: "/booking"
    },
    {
      title: "Body Scrub & Wrap",
      description: "An exfoliating scrub followed by a nourishing body wrap to detoxify, hydrate, and leave your skin silky smooth.",
      image: "https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg",
      price: "$150",
      duration: "90 minutes",
      link: "/booking"
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Discover Tranquility & Renewal</h1>
          <p className="text-xl text-white mb-8 max-w-xl mx-auto">
            Experience our expertly crafted spa treatments designed to rejuvenate your body, mind, and spirit.
          </p>
          <button className="bg-pink-800 hover:bg-blue-700 text-white py-3 px-8 rounded-full transition transform hover:scale-105">
            Book Your Experience
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50" id="services">
        <div className="text-center mb-16">
          <span className="text-pink-800 uppercase tracking-wider font-medium">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-900 mt-4 mb-6">The Art of Wellness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At ThermenSpa, we believe true wellness emerges when body, mind, and spirit exist in harmony. Our holistic
            approach combines time-honored techniques with modern innovations to restore balance and promote lasting well-being.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300 group">
              <div
                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl text-black font-serif mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-pink-800 font-medium hover:text-pink-700 transition-colors duration-300"
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
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
                <p><strong>Founded in 2021</strong> by Elena Brooks in Kosovo, ThermenSpa was created to deliver high-quality relaxation experiences with a modern, holistic approach.</p>
                <p>Combining ancient techniques with today's innovations, we provide custom spa treatments to help you heal, relax, and glow from the inside out.</p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
