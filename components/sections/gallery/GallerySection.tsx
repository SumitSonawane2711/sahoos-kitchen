"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define types
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface Category {
  value: string;
  label: string;
}

// Gallery images with categories
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/https://sahooskitchen.com/p2.JPG",
    alt: "Restaurant Interior",
    category: "interior",
    title: "Elegant Dining Space"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    alt: "Chef Preparing Food",
    category: "cooking",
    title: "Master Chef at Work"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80",
    alt: "Delicious Food",
    category: "food",
    title: "Exquisite Cuisine"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
    alt: "Restaurant Event",
    category: "events",
    title: "Special Celebrations"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
    alt: "Food Closeup",
    category: "food",
    title: "Culinary Perfection"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    alt: "Restaurant Bar",
    category: "interior",
    title: "Stylish Bar Area"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    alt: "Main Course",
    category: "food",
    title: "Signature Dish"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80",
    alt: "Chef Team",
    category: "cooking",
    title: "Our Culinary Team"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
    alt: "Private Dining",
    category: "interior",
    title: "Private Dining Room"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    alt: "Restaurant Ambiance",
    category: "interior",
    title: "Cozy Ambiance"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    alt: "Vegetarian Dish",
    category: "food",
    title: "Vegetarian Delight"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    alt: "Special Event",
    category: "events",
    title: "Wedding Reception"
  },
];

// Available filter categories
const categories: Category[] = [
  { value: "all", label: "All" },
  { value: "food", label: "Food" },
  { value: "interior", label: "Interior" },
  { value: "cooking", label: "Cooking" },
  { value: "events", label: "Events" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeCategory));
    }
  }, [activeCategory]);

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Our Gallery</h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            A visual journey through our restaurant, cuisine, and memorable moments.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-3 rounded-full text-sm uppercase font-bold transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border border-primary/20 hover:border-primary'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                  <div className="relative h-full w-full transform transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                      <p className="text-white/80 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", damping: 15 }}
                className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold text-xl md:text-2xl">{selectedImage.title}</h3>
                  <p className="text-white/80 capitalize">{selectedImage.category}</p>
                </div>
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Experience Our Restaurant in Person</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            The pictures only tell part of the story. Visit us to experience the atmosphere, aromas, and tastes that make Sahoos Kitchen special.
          </p>
          <button className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-all duration-300 shadow-md hover:shadow-lg">
            Book Your Table
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection; 