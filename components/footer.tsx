"use client";

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, ChefHat, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { theme } from '@/data/site';

export function Footer() {
  return (
    <footer style={{ backgroundColor: `${theme.colors.primary}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: theme.fonts.heading }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/80 mb-6" style={{ fontFamily: theme.fonts.body }}>
                Stay updated with our latest dishes, special offers, and events
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button 
                  className="rounded-full"
                  style={{ 
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.primary
                  }}
                >
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-secondary" style={{ color: theme.colors.secondary }} />
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: theme.fonts.heading }}>
                Sahoo's Kitchen
              </h3>
            </div>
            <p className="text-white/80 mb-6" style={{ fontFamily: theme.fonts.body }}>
              Experience the authentic taste of traditional cuisine crafted with passion and served with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: theme.fonts.heading }}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="flex items-center text-white/80">
                <Phone className="h-5 w-5 mr-3 text-secondary" style={{ color: theme.colors.secondary }} />
                +91 (555) 123-4567
              </p>
              <p className="flex items-center text-white/80">
                <Mail className="h-5 w-5 mr-3 text-secondary" style={{ color: theme.colors.secondary }} />
                info@sahooskitchen.com
              </p>
              <p className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-3 text-secondary" style={{ color: theme.colors.secondary }} />
                123 Food Street, Bhubaneswar
              </p>
              <p className="flex items-center text-white/80">
                <Clock className="h-5 w-5 mr-3 text-secondary" style={{ color: theme.colors.secondary }} />
                Mon-Sun: 11:00 AM - 10:00 PM
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: theme.fonts.heading }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/80 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-white/80 hover:text-secondary transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/80 hover:text-secondary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: theme.fonts.heading }}>
              Opening Hours
            </h3>
            <div className="space-y-3 text-white/80">
              <p className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 - 22:00</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 - 23:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </p>
              <div className="pt-4">
                <p className="text-secondary font-semibold" style={{ color: theme.colors.secondary }}>
                  * Last order 30 mins before closing
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Sahoo's Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}