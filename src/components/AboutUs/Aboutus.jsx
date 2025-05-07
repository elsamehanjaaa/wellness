import React, { useState, useEffect } from 'react';
import { Flower, Heart, Leaf, Sparkles } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Emma Winters",
      position: "Founder & Wellness Director",
      bio: "Dr. Emma holds a Ph.D. in Holistic Medicine and brings over 15 years of experience in wellness therapy. She founded ThemenSpa with a vision to create a sanctuary where traditional healing meets modern wellness techniques.",
      image: "https://images.pexels.com/photos/5199149/pexels-photo-5199149.jpeg",
    },
    {
      name: "Michael Chen",
      position: "Master Massage Therapist",
      bio: "With expertise in Swedish, Thai, and deep tissue massage, Michael specializes in creating personalized therapy sessions that address both physical and mental wellness. His approach integrates Eastern and Western techniques.",
      image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg",
    },
    {
      name: "Sofia Rodriguez",
      position: "Aromatherapist & Skincare Specialist",
      bio: "Sofia brings her knowledge of botanical ingredients and essential oils to create custom treatments that enhance natural beauty while promoting relaxation. Her facial treatments have been recognized in wellness publications.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    }
  ];

  const testimonials = [
    {
      quote: "ThemenSpa transformed my wellness journey. The thermal baths combined with their massage therapy created the most rejuvenating experience I've ever had.",
      author: "Catherine L.",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      quote: "I visit ThemenSpa monthly for their wellness packages. Their holistic approach has significantly improved my chronic back pain and sleep quality.",
      author: "Marcus T.",
      location: "Chicago, IL",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      quote: "The attention to detail and personalized care at ThemenSpa is unmatched. Every visit feels like they've crafted the experience just for me.",
      author: "Jennifer K.",
      location: "Boston, MA",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    }
  ];

  const values = [
    {
      icon: <Flower className="h-8 w-8 text-spa-purple" />,
      title: "Holistic Wellness",
      description: "We believe in treating the whole person—mind, body, and spirit—rather than focusing solely on symptoms."
    },
    {
      icon: <Leaf className="h-8 w-8 text-spa-purple" />,
      title: "Natural Healing",
      description: "Our treatments harness the healing power of nature, utilizing organic products and time-tested natural remedies."
    },
    {
      icon: <Heart className="h-8 w-8 text-spa-purple" />,
      title: "Personalized Care",
      description: "We recognize each person's unique needs, creating customized wellness experiences for optimal results."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-spa-purple" />,
      title: "Mindful Presence",
      description: "We practice and encourage mindful awareness in all our services, fostering deeper relaxation and healing."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[600px] flex items-center justify-center bg-gradient-to-b from-pink-50 to-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
              alt="Spa atmosphere"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold text-pink-800 mb-6">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-lato leading-relaxed">
                A journey of wellness, healing, and transformation
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-spa-soft-peach rounded-2xl -z-10 transform -rotate-3"></div>
                  <img 
                    src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                    alt="ThemenSpa Exterior" 
                    className="rounded-2xl shadow-xl w-full h-auto object-cover transform rotate-3 transition-transform hover:rotate-0 duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-playfair font-semibold text-gray-800 mb-8">Our Journey</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6 font-lato">
                    Founded in 2010, ThemenSpa began with a simple yet profound vision: to create an oasis of tranquility where modern life's stresses dissolve, and true healing can begin.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 font-lato">
                    Dr. Emma Winters, our founder, combined her extensive background in holistic medicine with her passion for traditional wellness practices from around the world. After traveling across continents to study various healing techniques, she brought this collective wisdom back to create ThemenSpa.
                  </p>
                  <p className="text-lg text-gray-700 font-lato">
                    Today, ThemenSpa stands as a testament to our commitment to holistic wellness, offering a sanctuary where ancient wisdom meets modern science, and where every treatment is delivered with heart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-semibold text-gray-800 mb-6">Our Philosophy</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lato">
                Guided by principles that prioritize your complete wellbeing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-6 bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 font-lato leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className=" py-16 bg-white "> 
        <div className="container mx-auto px-4">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6">Meet Our Team</h2>
    <div className="w-16 h-1 bg-spa-purple mx-auto mb-8"></div>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lato">
      Our experienced practitioners are dedicated to providing the highest quality wellness services.
    </p>
  </div>

  <div className="space-y-12">
    {teamMembers.map((member, index) => (
      <div 
        key={index}
        className={`flex flex-col md:flex-row gap-4 items-center ${
          index % 2 !== 0 ? 'md:flex-row-reverse' : ''
        } animate-fade-in`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 px-2 md:px-4 text-center md:text-left">
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 mb-1">
            {member.name}
          </h3>
          <p className="text-spa-purple text-base md:text-lg font-medium mb-3 tracking-wide">
            {member.position}
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose">
            {member.bio}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

</section>


        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-semibold text-gray-800 mb-6">Client Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lato">
                Real experiences from our valued guests
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[400px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === activeTestimonial 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ display: index === activeTestimonial ? 'block' : 'none' }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                      <div className="flex justify-center mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Sparkles key={i} className="w-6 h-6 text-yellow-400 mr-1" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl text-gray-700 italic mb-8 font-playfair">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-lg text-gray-800">{testimonial.author}</p>
                          <p className="text-spa-purple">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-spa-purple w-8' 
                        : 'bg-gray-300 hover:bg-spa-purple/50'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-spa-purple">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-8">
              Begin Your Wellness Journey
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-lato">
              Experience the transformative power of our holistic treatments
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-spa-purple bg-white rounded-full hover:bg-pink-50 transition-colors duration-300"
              >
                Book Your Session
              </a>
              <a 
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;