"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-secondary" />,
      title: "Phone",
      details: ["+91 123 456 7890", "+91 987 654 3210"]
    },
    {
      icon: <Mail className="w-5 h-5 text-secondary" />,
      title: "Email",
      details: ["info@sahooskitchen.com", "support@sahooskitchen.com"]
    },
    {
      icon: <MapPin className="w-5 h-5 text-secondary" />,
      title: "Location",
      details: ["123 Culinary Street", "Foodie District, Flavor City - 123456"]
    },
    {
      icon: <Clock className="w-5 h-5 text-secondary" />,
      title: "Opening Hours",
      details: ["Monday - Sunday: 11:00 AM - 11:00 PM"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for reservations, feedback, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-xl rounded-xl p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation</option>
                    <option value="feedback">Feedback</option>
                   
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="Please write your message here..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information and Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[350px] lg:h-[290px] relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7246641281247!2d77.64343517390562!3d12.990400914121466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173a0ccbe557%3A0x349889cd4f33439b!2sIndianapolis%20Boulevard%2C%20Bangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1712438215023!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sahoo's Kitchen Location Map"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Here are answers to some common questions. If you don't find what you're looking for,
            please don't hesitate to contact us directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
            {[
              {
                q: "How can I make a reservation?",
                a: "You can make a reservation by calling us, using our online booking system, or filling out the contact form on this page. We recommend booking at least 2-3 days in advance."
              },
              {
                q: "Do you offer catering services?",
                a: "Yes, we offer catering services for events of all sizes. Please contact us with details about your event, and we'll provide a customized quote."
              },
              {
                q: "Are there vegetarian or vegan options?",
                a: "Absolutely! We have a wide range of vegetarian dishes, and many can be adapted to be vegan-friendly. Just let us know your dietary preferences when ordering."
              },
              {
                q: "Is there parking available?",
                a: "Yes, we have ample parking space available for our guests right in front of the restaurant."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 