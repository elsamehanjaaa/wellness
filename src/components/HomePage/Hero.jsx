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
                  src="/homepage/homepagephoto.png"
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
<section className="bg-pink-200 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-serif font-bold text-pink-800 mb-6">Why Choose Serenity?</h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
      At Serenity Spa, wellness is more than a treatment — it's a lifestyle. With nature-inspired therapies and a calming environment, we guide you to inner peace.
    </p>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
      {[
        {
          icon: "🌿",
          title: "Natural Therapies",
          desc: "We use organic ingredients and ancient techniques to harmonize body and soul.",
        },
        {
          icon: "💆‍♀️",
          title: "Skilled Practitioners",
          desc: "Our certified therapists customize each experience to your individual needs.",
        },
        {
          icon: "🕯️",
          title: "Serene Environment",
          desc: "Unwind in a setting crafted for tranquility, mindfulness, and renewal.",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="text-3xl mb-3">{item.icon}</div>
          <h4 className="text-xl font-semibold text-pink-700 mb-2">{item.title}</h4>
          <p className="text-gray-700 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white py-15">
  <div className="max-w-8xl mx-auto px-6 text-center">
    <h3 className="text-3xl font-serif font-bold text-pink-800 mb-15">Our Space</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-15">
      {[
        "/homepage/Therapy-Room.webp",
        "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      ].map((src, idx) => (
        <img
          key={idx}
          src={src + "?auto=compress&cs=tinysrgb&w=400"}
          alt={`Spa view ${idx + 1}`}
          className="rounded-xl object-cover h-48 w-full shadow-md"
        />
      ))}
    </div>
  </div>
</section>
<section className="bg-white py-20 border-t border-gray-100">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h3 className="text-3xl font-serif font-bold text-pink-800 mb-4">Our Philosophy</h3>
    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
      Serenity is more than a destination — it's a philosophy rooted in balance, harmony, and mindful living.
      We combine ancient wellness traditions with modern techniques to nurture your body, mind, and spirit.
    </p>
  </div>
</section>

<section className="bg-fuchsia-200  py-20 text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-pink-800 mb-6">
      More Than a Spa — It’s a Sanctuary
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed">
      Every touch, every scent, every moment is thoughtfully designed to help you slow down, reconnect, and renew.
    </p>
  </div>
</section>

{/* Call to Action */}
<section className="bg-white py-16 text-center">
  <div className="max-w-3xl mx-auto px-6">
    <h3 className="text-2xl md:text-3xl font-semibold text-pink-900 mb-6">
      Begin your wellness journey today.
    </h3>
    <Link href="/bookappointment">
      <button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full font-medium shadow transition">
        Book an Appointment
      </button>
    </Link>
  </div>
</section>

      <Footer />
    </>
  );
};

export default Hero;
