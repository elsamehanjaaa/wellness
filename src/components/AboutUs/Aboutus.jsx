import React, { useState, useEffect } from 'react';
import { Flower, Heart, Leaf, Sparkles, Star } from 'lucide-react';
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
      id: 1,
      name: "Sarah Johnson",
      position: "Lead Massage Therapist",
      bio: "Sarah has over 15 years of experience in therapeutic massage and specializes in deep tissue and Swedish techniques. She's dedicated to helping clients find relief from chronic pain and stress.",
      image: "https://images.pexels.com/photos/5999817/pexels-photo-5999817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Holistic Wellness Coach",
      bio: "Michael blends Eastern and Western wellness practices to create personalized health plans. With certifications in nutrition, meditation, and yoga, he helps clients achieve balance in mind and body.",
      image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Skincare Specialist",
      bio: "Emma is a licensed esthetician with expertise in advanced facial treatments and skin rejuvenation. She's passionate about helping clients achieve their healthiest skin through customized care.",
      image: "https://images.pexels.com/photos/6663467/pexels-photo-6663467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "David Williams",
      position: "Aromatherapy Expert",
      bio: "David is certified in clinical aromatherapy and creates custom essential oil blends for therapeutic benefits. His knowledge of plant medicine helps clients find natural solutions for wellness.",
      image: "https://images.pexels.com/photos/7360504/pexels-photo-7360504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <div className="w-16 h-1 bg-spa-purple mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-lato leading-relaxed">
              Our experienced practitioners are dedicated to providing the highest quality wellness services.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 px-4 text-center md:text-left">
                  <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <div className="w-16 h-0.5 bg-spa-purple md:mx-0 mx-auto mb-3"></div>
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
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-pink-800 uppercase tracking-wider font-medium">
              Client Stories
            </span>
            <h2 className="text-3xl text-pink-900 font-bold md:text-4xl font-serif mt-4 mb-6">
              What Our Guests Say
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                The experiences of our clients reflect our commitment to exceptional service and transformative wellness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-pink-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default About;