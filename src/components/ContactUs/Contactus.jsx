"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to send message");
      }

      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Thermen Spa</title>
        <meta
          name="description"
          content="Contact Thermen Spa for appointments, questions, or collaborations."
        />
      </Head>

      <Header />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or want to collaborate? We’d love to hear from you.
              Fill out the form below or reach out directly using our contact
              information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FORM */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block font-medium mb-1 text-black">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1 text-black">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-1 text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-600"
                  />
                </div>

                {success && (
                  <p className="text-green-600 font-medium">
                    Message sent successfully!
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-600 font-medium">
                    Error: {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Send contact message"
                  className="w-full bg-pink-800 text-white font-semibold px-4 py-2 rounded-md transition duration-300 shadow-md hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-7 h-7 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-black">Email</h3>
                    <p className="text-gray-600">contact@thermenspa.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-7 h-7 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-black">Phone</h3>
                    <p className="text-gray-600">+1 02–123–456–789</p>
                    <p className="text-gray-600">+1 03–123–456–789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-7 h-7 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-black">Address</h3>
                    <p className="text-gray-600">
                      Kingston Street 3201,
                      <br />
                      New Jersey,
                      <br />
                      NY
                    </p>
                  </div>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4 text-black">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
