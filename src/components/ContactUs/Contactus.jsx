"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setFieldErrors({});
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    // Client-side validation
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email";
    if (!values.message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }
    try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(values),
  });

  const responseData = await response.json();

  if (!response.ok) {
    if (responseData.details && typeof responseData.details === 'object') {
      setFieldErrors(responseData.details);
    } else {
      setErrorMessage(responseData.error || "Failed to send message");
    }
    return;
  }

  setSuccess(true);
  form.reset();
  setTimeout(() => setSuccess(false), 5000);

} catch (error) {
  console.error("Network error:", error);
  setErrorMessage("Network error. Please check your connection and try again.");
} finally {
  setLoading(false);
}


    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.details && typeof responseData.details === 'object') {
          setFieldErrors(responseData.details);
        } else {
          setErrorMessage(responseData.error || "Failed to send message");
        }
        return;
      }

      setSuccess(true);
      form.reset();
      
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
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
              Have questions or want to collaborate? We'd love to hear from you.
              Fill out the form below or reach out directly using our contact
              information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block font-medium mb-1 text-black">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 shadow-sm text-gray-600 ${
                      fieldErrors.name 
                        ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                        : 'border-gray-300 focus:ring-pink-500'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-1 text-black">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 shadow-sm text-gray-600 ${
                      fieldErrors.email 
                        ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                        : 'border-gray-300 focus:ring-pink-500'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1 text-black">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-md min-h-[150px] focus:outline-none focus:ring-2 shadow-sm text-gray-600 resize-vertical ${
                      fieldErrors.message 
                        ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                        : 'border-gray-300 focus:ring-pink-500'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {success && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-700 font-medium flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-700 font-medium flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {errorMessage}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Send contact message"
                  className={`w-full font-semibold px-4 py-3 rounded-md transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                    loading
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      : 'bg-pink-800 text-white hover:bg-pink-700'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <Mail className="w-6 h-6 text-pink-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">Email</h3>
                    <a 
                      href="mailto:contact@thermenspa.com"
                      className="text-gray-600 hover:text-pink-800 transition-colors"
                    >
                      contact@thermenspa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <Phone className="w-6 h-6 text-pink-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">Phone</h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+1-02-123-456-789"
                        className="block text-gray-600 hover:text-pink-800 transition-colors"
                      >
                        +1 02–123–456–789
                      </a>
                      <a 
                        href="tel:+1-03-123-456-789"
                        className="block text-gray-600 hover:text-pink-800 transition-colors"
                      >
                        +1 03–123–456–789
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <MapPin className="w-6 h-6 text-pink-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">Address</h3>
                    <address className="text-gray-600 not-italic">
                      Kingston Street 3201,<br />
                      New Jersey,<br />
                      NY
                    </address>
                  </div>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4 text-black">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
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