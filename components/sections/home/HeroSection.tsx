import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sahoos Kitchen</h1>
        <p className="text-xl mb-8">Experience the authentic taste of traditional cuisine</p>
        <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition">
          View Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 