import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-pink-100 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <span className="text-black font-medium mb-3 block">Welcome to ThermenSpa</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-pink-800 mb-6 leading-tight">
                Luxury Wellness & Spa Experience
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg">
                Discover a sanctuary where mind, body, and spirit align. Our holistic approach combines traditional wellness practices with luxurious spa treatments for total rejuvenation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bookappointment">
                  <button className="border border-pink-700 text-black hover:bg-pink-700 hover:text-white py-3 px-6 rounded">
                    Book a Session
                  </button>
                </Link>
                <Link href="/services">
                  <button className="border border-pink-700 text-black hover:bg-pink-700 hover:text-white py-3 px-6 rounded">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Hero Image and Decorations */}
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-full bg-pink-200/30 absolute -top-20 -right-20 w-64 h-64 animate-float"></div>
              <div
                className="aspect-square rounded-full bg-pink-300/30 absolute -bottom-10 left-10 w-40 h-40 animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef"
                  alt="Serene wellness and spa environment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4.9", label: "Average rating" },
              { value: "10+", label: "Years of experience" },
              { value: "1,500+", label: "Happy clients" },
              { value: "Certified", label: "Holistic Therapists" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-pink-700">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Serenity */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-pink-800 mb-4">Why Choose Serenity?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            At Serenity Spa, we believe that wellness is a journey. Our tranquil space, curated therapies, and caring staff create an oasis for the soul.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Natural Therapies", desc: "We use organic products and traditional healing methods to restore balance." },
              { title: "Experienced Staff", desc: "Our certified professionals tailor every session to your personal needs." },
              { title: "Peaceful Ambience", desc: "Relax in a space designed for serenity, silence, and self-care." },
            ].map((item, idx) => (
              <div key={idx} className="bg-pink-50 p-6 rounded-lg shadow">
                <h4 className="text-lg font-bold text-pink-700 mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold text-pink-800 mb-6">Our Space</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg",
              "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src + "?auto=compress&cs=tinysrgb&w=400"}
                alt="Spa"
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-pink-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pink-800 mb-4">
            More than a Spa — It’s a Sanctuary
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Every detail at Serenity is designed to help you slow down, breathe deeply, and reconnect with yourself.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-pink-200 text-center py-12">
        <h3 className="text-xl md:text-2xl font-semibold text-pink-900 mb-4">
          Your wellness journey begins today.
        </h3>
        <Link href="/bookappointment">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-medium transition">
            Book an Appointment
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
