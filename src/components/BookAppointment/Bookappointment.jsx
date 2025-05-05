import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Clock, DollarSign, Calendar, Mail, Phone, 
  MessageSquare, Check, ChevronLeft, ChevronRight,
  User, Star, Gift
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { motion, AnimatePresence } from 'framer-motion';

const BookAppointment = () => {
  // Example services array (replace with your actual data)
  const services = [
    {
      id: 1,
      name: 'Swedish Massage',
      description: 'A classic massage for overall relaxation.',
      duration: '60 min',
      price: 80,
      src: '/services/swedishmassage.jpg',
      category: 'massage'
    },
    {
      id: 2,
      name: 'Deep Tissue Massage',
      description: 'Focus on deeper layers of muscle tissue.',
      duration: '60 min',
      price: 90,
      src: '/services/deeptissuemassage.webp',
      category: 'massage'
    },
    {
      id: 3,
      name: 'Hot Stone Massage',
      description: 'Warm stones soothe away tension.',
      duration: '90 min',
      price: 120,
      src: '/services/hotstonemassage.jpg',
      category: 'massage'
    },
    {
      id: 4,
      name: 'Aromatherapy Massage',
      description: 'Essential oils for relaxation and stress relief.',
      duration: '60 min',
      price: 85,
      src: '/services/aromatherapymassage.webp',
      category: 'massage'
    },
    {
      id: 5,
      name: 'Prenatal Massage',
      description: 'Tailored for expectant mothers.',
      duration: '60 min',
      price: 90,
      src: '/services/Prenatalmassage.jpeg',
      category: 'massage'
    },
    {
      id: 6,
      name: 'Reflexology',
      description: 'Targeting pressure points on the feet.',
      duration: '30 min',
      price: 50,
      src: '/services/reflexologymassage.webp',
      category: 'massage'
    },
    {
      id: 7,
      name: 'Couples Massage',
      description: 'Enjoy a massage session with a partner.',
      duration: '60 min',
      price: 150,
      src: '/services/couplemassage.jpg',
      category: 'massage'
    },
    {
      id: 8,
      name: 'Sports Massage',
      description: 'Aid muscle recovery and improve flexibility.',
      duration: '45 min',
      price: 80,
      src: '/services/sportsmassage.png',
      category: 'massage'
    },
    {
      id: 9,
      name: 'Thai Massage',
      description: 'Stretching and deep pressure for tension relief.',
      duration: '60 min',
      price: 100,
      src: '/services/thaimassage.webp',
      category: 'massage'
    },
    {
      id: 10,
      name: 'Facial Massage',
      description: 'Rejuvenate skin and reduce tension.',
      duration: '30 min',
      price: 40,
      src: '/services/facialmassage.webp',
      category: 'facial'
    },
    {
      id: 11,
      name: 'Manicure',
      description: 'A classic treatment for well-groomed nails and cuticles.',
      duration: '30 min',
      price: 25,
      src: '/services/manicure.jpg',
      category: 'nail'
    },
    {
      id: 12,
      name: 'Pedicure',
      description: 'Refresh and pamper your feet with a revitalizing pedicure.',
      duration: '45 min',
      price: 40,
      src: '/services/pedicure.jpg',
      category: 'nail'
    },
  ];

  // Time slots
  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  // State
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Filtered services based on category
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Unique categories
  const categories = ['all', ...new Set(services.map(service => service.category))];

  // Generate current month days
  const generateCalendarDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: '', date: null, available: false });
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isPast = date < new Date(today.setHours(0, 0, 0, 0));
      
      days.push({
        day: i,
        date: new Date(year, month, i).toISOString().split('T')[0],
        available: !isWeekend && !isPast,
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  
  // Format date for display
  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric'
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setStep(4);
    }, 1500);
  };

  // Navigate to next step if validation passes
  const goToNextStep = () => {
    if (step === 1 && !selectedService) {
      setErrors({ service: 'Please select a service' });
      return;
    }
    
    if (step === 2 && (!selectedDate || !selectedTime)) {
      setErrors({ datetime: 'Please select both date and time' });
      return;
    }
    
    setErrors({});
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Go back to previous step
  const goToPreviousStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      <Header />
      <motion.div 
        className="min-h-screen bg-gradient-to-b from-purple-50 via-rose-50 to-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-violet-950 mb-4 tracking-tight">
                Book Your Experience
              </h1>
              <p className="text-lg text-violet-700/80 max-w-2xl mx-auto font-light">
                Schedule your personalized session for relaxation and rejuvenation. 
                Our expert therapists are ready to help you unwind.
              </p>
            </div>

            {!isSubmitted && (
              <div className="mb-10">
                <div className="flex items-center justify-center">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          step >= num 
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-200' 
                            : 'bg-white text-violet-400 border border-violet-100 shadow-sm'
                        }`}
                      >
                        {step > num ? <Check size={16} /> : num}
                      </div>
                      
                      {num < 3 && (
                        <div 
                          className={`w-20 h-1 mx-1 rounded-full ${
                            step > num ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-violet-100'
                          } transition-all duration-300`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-2 text-sm font-medium text-violet-600 max-w-md mx-auto">
                  <span className={step >= 1 ? 'text-violet-800' : ''}>Service</span>
                  <span className={step >= 2 ? 'text-violet-800' : ''}>Date & Time</span>
                  <span className={step >= 3 ? 'text-violet-800' : ''}>Your Details</span>
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.4 }}
              >
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <form className="space-y-8">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-violet-100">
                      <div className="p-6 border-b border-violet-100 bg-gradient-to-r from-violet-50 to-purple-50">
                        <h3 className="text-2xl font-semibold text-violet-900">Select Your Service</h3>
                        <p className="text-violet-600 mt-1">Choose from our range of premium treatments</p>
                      </div>

                      {/* Categories */}
                      <div className="px-6 pt-4 pb-2 border-b border-violet-100">
                        <div className="flex flex-wrap gap-2">
                          {categories.map((category) => (
                            <button
                              key={category}
                              type="button"
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeCategory === category
                                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-200'
                                  : 'bg-white text-violet-700 hover:bg-violet-50 shadow-sm'
                              }`}
                              onClick={() => setActiveCategory(category)}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Services Grid */}
                      <div className="grid md:grid-cols-2 gap-6 p-6">
                        {filteredServices.map((service) => (
                          <motion.div
                            key={service.id}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                              selectedService?.id === service.id
                                ? 'ring-2 ring-violet-500 shadow-lg'
                                : 'border border-violet-100 hover:border-violet-300 hover:shadow-md'
                            }`}
                            onClick={() => setSelectedService(service)}
                          >
                            <div className="relative h-48 w-full overflow-hidden">
                              <Image
                                src={service.src}
                                alt={service.name}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                              />
                              {selectedService?.id === service.id && (
                                <div className="absolute top-3 right-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-1 rounded-full shadow-lg">
                                  <Check size={16} />
                                </div>
                              )}
                            </div>
                            <div className="p-5">
                              <div className="flex justify-between">
                                <h4 className="font-semibold text-violet-900 text-lg">{service.name}</h4>
                                <div className="flex items-center text-violet-700 font-medium">
                                  <DollarSign className="h-4 w-4" />
                                  <span>${service.price}</span>
                                </div>
                              </div>
                              <p className="text-violet-600 text-sm mt-2 min-h-[40px]">{service.description}</p>
                              <div className="mt-2 flex items-center text-violet-500">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm">{service.duration}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {errors.service && (
                        <div className="px-6 pb-4 text-rose-500 text-sm">{errors.service}</div>
                      )}

                      <div className="px-6 py-4 bg-gradient-to-r from-violet-50 to-purple-50 flex justify-end">
                        <button
                          type="button"
                          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium flex items-center hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                          onClick={goToNextStep}
                        >
                          Continue
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {/* Step 2: Date & Time Selection */}
                {step === 2 && (
                  <div className="space-y-8">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-violet-100">
                      <div className="p-6 border-b border-violet-100 bg-gradient-to-r from-violet-50 to-purple-50">
                        <h3 className="text-2xl font-semibold text-violet-900">Choose Date & Time</h3>
                        <p className="text-violet-600 mt-1">Select when you'd like to book your {selectedService?.name}</p>
                      </div>

                      {/* Calendar & Time Grid */}
                      <div className="p-6">
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-violet-900 mb-3">Select Date</h4>
                          
                          {/* Calendar */}
                          <div className="bg-white border border-violet-100 rounded-lg p-4 shadow-sm">
                            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="font-medium text-violet-500 text-sm py-1">
                                  {day}
                                </div>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-7 gap-1">
                              {calendarDays.map((day, index) => (
                                <div 
                                  key={index}
                                  className={`h-12 flex items-center justify-center rounded-md transition-all ${
                                    day.date === selectedDate
                                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium shadow-lg shadow-purple-200' 
                                      : day.available 
                                        ? 'hover:bg-violet-50 cursor-pointer'
                                        : 'text-violet-300'
                                  } ${!day.available && 'pointer-events-none'}`}
                                  onClick={() => day.available && setSelectedDate(day.date)}
                                >
                                  {day.day}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-violet-900 mb-3">Select Time</h4>
                          
                          {selectedDate ? (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {timeSlots.map((time) => (
                                <motion.button
                                  key={time}
                                  type="button"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className={`py-3 rounded-lg text-sm font-medium transition-all ${
                                    selectedTime === time
                                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-200'
                                      : 'bg-white text-violet-700 hover:bg-violet-50 border border-violet-100'
                                  }`}
                                  onClick={() => setSelectedTime(time)}
                                >
                                  {time}
                                </motion.button>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8 text-violet-500">
                              Please select a date first
                            </div>
                          )}
                        </div>

                        {errors.datetime && (
                          <div className="mt-4 text-rose-500 text-sm">{errors.datetime}</div>
                        )}
                      </div>

                      <div className="px-6 py-4 bg-gradient-to-r from-violet-50 to-purple-50 flex justify-between">
                        <button
                          type="button"
                          className="px-6 py-3 bg-white border border-violet-200 text-violet-700 rounded-lg font-medium flex items-center hover:bg-violet-50 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                          onClick={goToPreviousStep}
                        >
                          <ChevronLeft className="mr-2 h-5 w-5" />
                          Back
                        </button>
                        <button
                          type="button"
                          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium flex items-center hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                          onClick={goToNextStep}
                        >
                          Continue
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Booking Summary */}
                    {selectedService && selectedDate && (
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-violet-100">
                        <div className="p-5 border-b border-violet-100">
                          <h3 className="text-lg font-semibold text-violet-900">Booking Summary</h3>
                        </div>
                        <div className="p-5 space-y-3">
                          <div className="flex items-start">
                            <div className="bg-violet-100 p-2 rounded-md text-violet-600 mr-3">
                              <Gift size={20} />
                            </div>
                            <div>
                              <p className="font-medium text-violet-900">{selectedService.name}</p>
                              <p className="text-violet-600 text-sm">{selectedService.duration} - ${selectedService.price}</p>
                            </div>
                          </div>
                          
                          {selectedDate && (
                            <div className="flex items-start">
                              <div className="bg-violet-100 p-2 rounded-md text-violet-600 mr-3">
                                <Calendar size={20} />
                              </div>
                              <div>
                                <p className="font-medium text-violet-900">{formatDisplayDate(selectedDate)}</p>
                                {selectedTime && <p className="text-violet-600 text-sm">at {selectedTime}</p>}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-violet-100">
                      <div className="p-6 border-b border-violet-100 bg-gradient-to-r from-violet-50 to-purple-50">
                        <h3 className="text-2xl font-semibold text-violet-900">Your Information</h3>
                        <p className="text-violet-600 mt-1">Please provide your contact details to complete the booking</p>
                      </div>
                      
                      <div className="p-6 space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-violet-700 mb-2">
                            Full Name
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="h-5 w-5 text-violet-400" />
                            </div>
                            <input
                              type="text"
                              className={`w-full border rounded-lg pl-10 px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 ${
                                errors.name ? 'border-rose-300 bg-rose-50' : 'border-violet-200'
                              }`}
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          {errors.name && (
                            <p className="mt-1 text-sm text-rose-500">{errors.name}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-violet-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Mail className="h-5 w-5 text-violet-400" />
                            </div>
                            <input
                              type="email"
                              className={`w-full border rounded-lg pl-10 px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 ${
                                errors.email ? 'border-rose-300 bg-rose-50' : 'border-violet-200'
                              }`}
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-sm text-rose-500">{errors.email}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-violet-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Phone className="h-5 w-5 text-violet-400" />
                            </div>
                            <input
                              type="tel"
                              className={`w-full border rounded-lg pl-10 px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 ${
                                errors.phone ? 'border-rose-300 bg-rose-50' : 'border-violet-200'
                              }`}
                              placeholder="(123) 456-7890"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-sm text-rose-500">{errors.phone}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-violet-700 mb-2">
                            Special Requests (Optional)
                          </label>
                          <div className="relative">
                            <div className="absolute top-3 left-3">
                              <MessageSquare className="h-5 w-5 text-violet-400" />
                            </div>
                            <textarea
                              className="w-full border border-violet-200 rounded-lg pl-10 px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                              rows="3"
                              placeholder="Any specific areas you'd like us to focus on?"
                              value={formData.notes}
                              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-6 py-4 bg-gradient-to-r from-violet-50 to-purple-50 flex justify-between">
                        <button
                          type="button"
                          className="px-6 py-3 bg-white border border-violet-200 text-violet-700 rounded-lg font-medium flex items-center hover:bg-violet-50 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                          onClick={goToPreviousStep}
                        >
                          <ChevronLeft className="mr-2 h-5 w-5" />
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium flex items-center hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Confirm Booking
                              <Check className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {/* Booking Summary */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-violet-100">
                      <div className="p-5 border-b border-violet-100">
                        <h3 className="text-lg font-semibold text-violet-900">Booking Summary</h3>
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="flex items-start">
                          <div className="bg-violet-100 p-2 rounded-md text-violet-600 mr-3">
                            <Gift size={20} />
                          </div>
                          <div>
                            <p className="font-medium text-violet-900">{selectedService.name}</p>
                            <p className="text-violet-600 text-sm">{selectedService.duration} - ${selectedService.price}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-violet-100 p-2 rounded-md text-violet-600 mr-3">
                            <Calendar size={20} />
                          </div>
                          <div>
                            <p className="font-medium text-violet-900">{formatDisplayDate(selectedDate)}</p>
                            <p className="text-violet-600 text-sm">at {selectedTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}

                {/* Step 4: Confirmation */}
                {step === 4 && (
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-violet-100 text-center p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="h-20 w-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Check className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-violet-900 mb-2">Booking Confirmed!</h3>
                    <p className="text-violet-600 mb-6">
                      Thank you, {formData.name}. Your appointment has been successfully booked.
                    </p>
                    
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 max-w-md mx-auto mb-6">
                      <div className="text-left space-y-4">
                        <div>
                          <p className="text-sm text-violet-500">Service</p>
                          <p className="font-medium text-violet-900">{selectedService.name} ({selectedService.duration})</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-violet-500">Date & Time</p>
                          <p className="font-medium text-violet-900">{formatDisplayDate(selectedDate)} at {selectedTime}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-violet-500">Price</p>
                          <p className="font-medium text-violet-900">${selectedService.price}</p>
                        </div>
                        
                        <div className="pt-4 border-t border-violet-200">
                          <p className="text-sm text-violet-500">Confirmation sent to</p>
                          <p className="font-medium text-violet-900">{formData.email}</p>
                          <p className="font-medium text-violet-900">{formData.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button 
                        className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                        onClick={() => window.location.reload()}
                      >
                        Book Another Appointment
                      </button>
                      <button 
                        className="px-6 py-3 bg-white border border-violet-200 text-violet-700 rounded-lg font-medium hover:bg-violet-50 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                      >
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </motion.div>
      <Footer />
    </>
  );
};

export default BookAppointment;