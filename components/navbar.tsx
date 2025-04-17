"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Twitter, Facebook, Instagram } from "lucide-react"; // Social media icons
import { Logo } from "./logo";
import { theme } from "@/data/site";
import { MenuCardPopup } from "./menu/MenuCardPopup";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuCardOpen, setMenuCardOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/menu", label: "Menu", hasDropdown: false, dropdownItems: [
        { href: "/menu/starters", label: "Starters" },
        { href: "/menu/main-course", label: "Main Course" },
        { href: "/menu/desserts", label: "Desserts" },
        { href: "/menu/beverages", label: "Beverages" },
      ]
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    // { href: "https://twitter.com", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
    { href: "https://facebook.com", icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
    { href: "https://www.instagram.com/sahooskitchen_nashik", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
  ];

  const handleDropdownToggle = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  // Get navbar background style based on page and scroll position
  const getNavbarStyle = () => {
    if (scrolled) {
      return "bg-primary/95 backdrop-blur-sm shadow-md pt-1";
    }
    if (isHomePage) {
      return "bg-transparent  py-4";
    }
    return "bg-transparent  py-4";
  };

  // Get text color based on page and scroll position
  const getTextColor = () => {
    if (scrolled) {
      return "text-white";
    }
    if (isHomePage) {
      return "text-white";
    }
    return `text-primary`;
  };

  // Get hover background color
  const getHoverBgColor = () => {
    if (scrolled) {
      return "hover:bg-primary-dark/50";
    }
    if (isHomePage) {
      return "hover:bg-white/10";
    }
    return "hover:bg-gray-100";
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${getNavbarStyle()}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo
                textClassName={`font-winky text-xl hover:text-secondary transition-all duration-300 ${getTextColor()}`}
                imageClassName="rounded-full hover:shadow-glow transition-all duration-300"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className={`px-3 py-2 rounded-full text-sm uppercase font-medium tracking-wider group-hover:text-secondary transition-all duration-300 flex items-center ${getTextColor()} ${getHoverBgColor()}`}
                      aria-expanded={activeDropdown === link.label}
                      aria-label={`${link.label} menu`}
                    >
                      {link.label}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-full text-sm uppercase font-medium tracking-wider group-hover:text-secondary transition-all duration-300 ${getTextColor()} ${getHoverBgColor()}`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown for desktop */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute left-0 mt-2 w-48 rounded-lg ${isHomePage || scrolled
                            ? "bg-white/10 backdrop-blur-lg border border-white/20"
                            : "bg-white shadow-lg border border-gray-100"
                            }`}
                        >
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className={`block px-4 py-2 text-sm ${isHomePage || scrolled
                                ? "text-white hover:bg-secondary hover:text-primary"
                                : "text-gray-800 hover:bg-gray-50 hover:text-secondary"
                                } transition-all duration-200`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Social Media Icons */}

              <div className="flex items-center space-x-1 pl-2 border-l border-white/20">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${getTextColor()} hover:text-secondary p-2 rounded-full transition-all duration-300 ${getHoverBgColor()}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Menu Card Button - Replaced Order Now */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setMenuCardOpen(true)}
                  className="bg-secondary text-primary ml-2 px-5 py-2 rounded-full text-sm uppercase font-bold hover:bg-secondary-dark hover:shadow-glow transition-all duration-300 flex items-center"
                >
                  Menu Card
                </button>
              </motion.div>
            </div>


            {/* Mobile Navigation Button */}
            <div className=" flex sm:hidden items-center gap-2">
              {/* Menu Card Button - Replaced Order Now */}
              <motion.div
              >
                <button
                  onClick={() => setMenuCardOpen(true)}
                  className=" bg-secondary text-primary ml-2 px-5 py-2 rounded-full text-sm uppercase font-bold transition-all duration-300 flex items-center"
                >
                  Menu Card
                </button>
              </motion.div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={` ${getTextColor()}  p-2 rounded-full ${getHoverBgColor()} transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>



          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${isHomePage || scrolled
                ? "bg-primary/95"
                : "bg-white"
                } backdrop-blur-md overflow-hidden shadow-lg`}
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(link.label)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${getTextColor()} ${getHoverBgColor()} transition-colors flex items-center justify-between`}
                        >
                          {link.label}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className={`block px-3 py-2 text-sm ${isHomePage || scrolled
                                    ? "text-white/90 hover:text-white"
                                    : "text-gray-600 hover:text-gray-900"
                                    } ${getHoverBgColor()} rounded-lg transition-colors`}
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpen(false);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium ${getTextColor()} ${getHoverBgColor()} transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Menu Card Button for Mobile */}
                <div className="mt-4 pt-4 border-t border-white/10">

                  <button
                    onClick={() => {
                      setMenuCardOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full flex justify-center items-center bg-secondary text-primary px-4 py-3 rounded-lg text-sm uppercase font-bold hover:bg-secondary-dark transition-all duration-300"
                  >
                    View Menu Card
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Menu Card Popup */}
      <MenuCardPopup open={menuCardOpen} onOpenChange={setMenuCardOpen} />
    </>
  );
}