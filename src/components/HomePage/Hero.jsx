"use client";

import Header from './../Header.jsx';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Leaf, Heart, Sun } from 'lucide-react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

const Hero = () => {
  const sliderRef = useRef(null)
const [slider] = useKeenSlider({
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
})

const services = [
  {
    title: "Skincare & Facials",
    description: "Pamper yourself with a facial treatment and you will love the look and feel...",
    image: "/images/skincare.jpg",
  },
  {
    title: "Body Treatments",
    description: "Enjoy exotic body scrub treatments to relax your body and soul...",
    image: "/images/body-treatment.jpg",
  },
  {
    title: "Couples Treatments",
    description: "Renew and balance mind, body and soul in a shared spa experience...",
    image: "/images/couples-treatment.jpg",
  },
  {
    title: "Cryoskin Therapy",
    description: "Cryotherapy introduced for inflammation, arthritis and muscle recovery...",
    image: "/images/cryoskin.jpg",
  },
  {
    title: "Manicure & Pedicure",
    description: "Massages, exfoliation, wax, and care for hands and feet...",
    image: "/images/manicure.jpg",
  },
]

  return (
    <>
      <Header />
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-green-50 via-white to-emerald-100">
  {/* Animated background elements */}
  <motion.div
    className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-green-200/30 blur-[100px]"
    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-emerald-300/30 blur-[120px]"
    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
  />

  <div className="container relative mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-gray-800"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm w-fit"
        >
          <Leaf className="w-4 h-4" />
          <span>Holistic Wellness & Nature</span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Reconnect with <span className="text-emerald-600">Nature</span> & Yourself
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Experience peace and restoration through nature-inspired healing practices at our tranquil wellness retreat.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 transition duration-200"
          >
            <Heart className="w-4 h-4 mr-2" />
            Book Now
          </Link>
          <Link 
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-emerald-400 hover:bg-emerald-50 text-emerald-700 transition duration-200"
          >
            <Sun className="w-4 h-4 mr-2" />
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative lg:ml-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-w-4 aspect-h-3 w-full">
            <Image 
              src="/kehida-termal-wellness-spa-aromafurduk.webp"
              alt="Wellness Center"
              width={1000}
              height={750}
              className="object-cover contrast-110 saturate-110"
              priority
            />
          </div>

          {/* Decorative Circles */}
          <motion.div 
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-green-100/70 backdrop-blur-sm z-0 hidden md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-teal-100/70 backdrop-blur-sm z-0 hidden md:block"
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
              Loved by nature seekers
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>
<section className="relative bg-white py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold text-emerald-800 mb-10 text-center">Our Treatments</h2>

    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {services.map((service, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition mx-2">
              <div className="h-48 relative w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{service.description}</p>
                <a href="#" className="text-emerald-600 font-medium text-sm hover:underline flex items-center gap-1">
                  Read More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-r z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-l z-10"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
</section>
<section className="bg-white py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT CONTENT */}
        <div>
          <p className="uppercase text-sm text-gray-500 tracking-wide font-semibold mb-2">
            Take rest in our retreat
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We’re a Spa & Wellness Center opened since 1986
          </h2>
          <p className="text-gray-600 mb-4">
            Thermen Spa & Wellness offers signature treatments in New York. Guests will learn to embrace simple luxuries through our expansive collection of relaxing, professional treatments utilizing a wide array of natural and organic products.
          </p>
          <p className="text-gray-600 mb-6">
            Our professional staff will work with you to <strong className="text-gray-800">meet your needs.</strong> Whether you are new to massage & skin care treatments or a long-time wellness enthusiast, our treatments are crafted to enhance your senses and overall well-being.
          </p>

          {/* Signature + Name */}
          <div className="flex items-center gap-4 mt-6">
            <Image src="/signature.png" alt="signature" width={100} height={50} />
            <div>
              <h4 className="font-semibold text-gray-800">Ashley Willes</h4>
              <p className="text-sm text-gray-500">CEO Spa & Wellness</p>
            </div>
          </div>
        </div>

        {/* IMAGES */}
        <div className="flex gap-4">
          <div className="w-1/2 rounded-lg overflow-hidden">
            <Image
              src="/images/facial-mask.jpg"
              alt="facial"
              width={600}
              height={800}
              className="object-cover h-full"
            />
          </div>
          <div className="w-1/2 rounded-lg overflow-hidden">
            <Image
              src="/images/tea-relax.jpg"
              alt="tea relax"
              width={600}
              height={800}
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>

      {/* INFO BOXES */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 container mx-auto px-4">
        <div className="flex items-start bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-indigo-500 text-white p-4">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-1">Our Location</h4>
            <p className="text-sm text-gray-600">
              Kingston Street 3201<br />
              New Jersey, NY, USA
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-indigo-500 text-white p-4">
            <Phone className="w-6 h-6" />
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
            <p className="text-sm text-gray-600">+31 02–123–456–789</p>
            <p className="text-sm text-gray-400">Fax: 02–023–456–987</p>
          </div>
        </div>

        <div className="flex items-start bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-indigo-500 text-white p-4">
            <Clock className="w-6 h-6" />
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-1">Opening Hours</h4>
            <p className="text-sm text-gray-600">Everyday open from</p>
            <p className="text-sm text-gray-600">08:00 AM till 11:00 PM</p>
          </div>
        </div>
      </div>
    </section>



    </>
  );
};

export default Hero;
