"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Utensils, Award, Users, Clock } from 'lucide-react';

// Define a type for the tab keys
type TabKey = 'story' | 'values' | 'motto';

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
      content: "I still remember the day we decided to start our little cloud kitchen. It wasn’t a business pitch or a grand plan written on paper — it was a feeling, a calling of sorts. My name is Sumitra Sahoo, and if you’ve ever tasted one of our meals, you’ve probably tasted a little bit of my soul too.",
      image: "/about/story.jpeg"
    },
    values: {
      title: "Our Values",
      content: "At Sahoo’s Cloud Kitchen, hygiene isn’t just a practice — it’s a promise. We prioritize cleanliness at every step, from our spotless kitchen to the way we handle ingredients and pack each meal. Every dish is prepared in a neat, sanitized environment, ensuring it reaches you fresh and safe. We take pride in serving clean, home-style food that is completely free from artificial colors and additives — just pure, wholesome goodness made with honesty. For us, health and hygiene are as important as taste, because we believe that feeding someone is a sacred act — and it must be done with both love and responsibility.",
      image: "/about/values.jpeg"
    },
    motto: {
      title: "Our Moto",
      content: "At Sahoo’s Cloud Kitchen, our heart beats for two things: purity and tradition. We prepare every meal in a clean, hygienic kitchen where neatness and safety come first. Our food is always fresh, color-free, and made without artificial additives — just the way you’d expect in a caring home. But beyond cleanliness, our true pride lies in promoting the rich, diverse flavors of Odisha. From classic comfort foods to hidden gems of Odia cuisine, every dish we serve is a tribute to our roots. This isn’t just cooking — it’s our way of sharing Odisha’s culinary heritage with the world, one soulful bite at a time.",
      image: "/about/motto.jpeg"
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
          {['story', 'values', 'motto'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab as TabKey)}
              className={`px-6 py-3 rounded-full text-sm uppercase font-bold transition-all duration-300 ${activeTab === tab
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary border border-primary/20 hover:border-primary'
                }`}
            >
              {tab === 'story' ? 'Our Story' : tab === 'values' ? 'Our Values' : 'Our motto'}
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
                <>
                  <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed mb-8">
                    Cooking has always been my love language. Whether it was a simple dal or a festive spread during Diwali, I’ve always believed that food is more than just nourishment — it’s emotion, it’s care, it’s warmth served on a plate. Over the years, our family — the Sahoos — became known among friends and neighbors not just for our friendly nature, but for the way we opened our doors and hearts during every occasion.
                  </motion.p>


                </>

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

              {activeTab === 'motto' && (
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">

                </motion.div>
              )}

              {/* <motion.div variants={itemVariants}>
                
                <button className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-all duration-300 shadow-md hover:shadow-lg">
                  {activeTab === 'motto' ? 'Join Our motto' : activeTab === 'values' ? 'Learn More' : 'Visit Us'}
                </button>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* story section */}
        {activeTab === 'story' && (
          <motion.div variants={itemVariants} className=" gap-4 my-10">
            <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed mb-8">
              So when the idea of Sahoo’s Cloud Kitchen was born, it wasn’t with the thought of profit. It was about extending that warmth beyond our walls — to feed strangers like family, to give working bachelors the taste of home, and to remind people that food made with love can heal tired souls.

              Each dish that leaves our kitchen carries a part of me. When I knead dough for parathas, I think of my children rushing to school. When I stir my slow-cooked sabzis, I recall my mother’s hands guiding mine. This kitchen isn’t just a space filled with ingredients — it’s filled with memories, traditions, and a lot of heartfelt intentions.

            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed mb-8">
              We’re not the biggest or the fanciest, but what we serve comes with genuine care. We greet every customer with a smile, even if they only interact with us through a phone call. Because for us, you’re not just an order ID — you’re someone we are grateful to serve.

              Sahoo’s Cloud Kitchen is our way of saying, “Come, eat. You’re home.”
              And if you ever do try one of our meals, know that it wasn’t just cooked — it was loved into existence.
            </motion.p>
          </motion.div>
        )}


        {/* Stats Section */}
        {/* <motion.div 
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection; 