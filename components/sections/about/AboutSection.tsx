"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Utensils, Award, Users, Clock } from 'lucide-react';

// Define a type for the tab keys
type TabKey = 'story' | 'values' | 'team';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('story');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { icon: <Utensils className="w-8 h-8 text-secondary" />, value: '50+', label: 'Authentic Dishes' },
    { icon: <Award className="w-8 h-8 text-secondary" />, value: '10+', label: 'Years of Excellence' },
    { icon: <Users className="w-8 h-8 text-secondary" />, value: '10k+', label: 'Happy Customers' },
    { icon: <Clock className="w-8 h-8 text-secondary" />, value: '7', label: 'Days a Week' },
  ];

  const tabContent = {
    story: {
      title: "Our Story",
      content: "Sahoos Kitchen began with a simple vision – to share the authentic flavors of traditional cuisine with the world. Founded by Chef Sahoo in 2010, our journey started as a small family-owned restaurant with recipes passed down through generations. Today, we've grown into a beloved culinary destination while staying true to our roots and commitment to quality.",
      image: "/about-story.jpg"
    },
    values: {
      title: "Our Values",
      content: "At Sahoos Kitchen, we believe that food is more than sustenance—it's an expression of culture, heritage, and love. We are committed to using only the freshest, locally-sourced ingredients, prepared with traditional techniques and a modern twist. Every dish we serve is crafted with care, ensuring an unforgettable dining experience that honors our culinary traditions.",
      image: "/about-values.jpg"
    },
    team: {
      title: "Our Team",
      content: "Behind every delicious dish at Sahoos Kitchen is our exceptional team of passionate chefs, attentive servers, and dedicated staff who work tirelessly to create memorable experiences for our guests. Led by Executive Chef Sahoo, our culinary experts bring decades of combined experience and a shared commitment to excellence in every aspect of our service.",
      image: "/about-team.jpg"
    }
  };

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">About Sahoos Kitchen</h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Experience the rich heritage and authentic flavors that have made us a beloved culinary destination.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {['story', 'values', 'team'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab as TabKey)}
              className={`px-6 py-3 rounded-full text-sm uppercase font-bold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border border-primary/20 hover:border-primary'
              }`}
            >
              {tab === 'story' ? 'Our Story' : tab === 'values' ? 'Our Values' : 'Our Team'}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <Image
                src={tabContent[activeTab].image || "/p1.jpg"}
                alt={tabContent[activeTab].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{tabContent[activeTab].title}</h3>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
              >
                {tabContent[activeTab].title}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-lg leading-relaxed mb-8"
              >
                {tabContent[activeTab].content}
              </motion.p>
              
              {activeTab === 'story' && (
                <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed mb-8">
                  What makes us special is our dedication to preserving the authenticity of our recipes while adapting to modern tastes. Each ingredient is carefully selected, each spice perfectly balanced, and each dish prepared with love and respect for our heritage.
                </motion.p>
              )}
              
              {activeTab === 'values' && (
                <motion.ul variants={itemVariants} className="space-y-3 mb-8">
                  {['Authenticity', 'Quality', 'Community', 'Sustainability'].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
              
              {activeTab === 'team' && (
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
                  {['Chef Sahoo - Executive Chef', 'Rani Patel - Head Chef', 'Arjun Kumar - Manager', 'Priya Sen - Customer Relations'].map((member, index) => (
                    <div key={index} className="bg-white/80 p-3 rounded-lg shadow-sm">
                      <p className="text-primary font-medium">{member}</p>
                    </div>
                  ))}
                </motion.div>
              )}
              
              {/* <motion.div variants={itemVariants}>
                
                <button className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-all duration-300 shadow-md hover:shadow-lg">
                  {activeTab === 'team' ? 'Join Our Team' : activeTab === 'values' ? 'Learn More' : 'Visit Us'}
                </button>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 bg-primary/5 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Journey in Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 