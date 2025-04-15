export const siteConfig = {
  name: "Sahoos Kitchen",
  description: "Authentic Traditional Indian Cuisine",
  address: "123 Culinary Street, Foodie District, City",
  phone: "+1 (555) 123-4567",
  email: "info@sahooskitchen.com",
  openingHours: {
    monday: "11:00 AM - 11:00 PM",
    tuesday: "11:00 AM - 11:00 PM",
    wednesday: "11:00 AM - 11:00 PM",
    thursday: "11:00 AM - 11:00 PM",
    friday: "11:00 AM - 12:00 AM",
    saturday: "10:00 AM - 12:00 AM",
    sunday: "10:00 AM - 11:00 PM"
  },
  socialMedia: {
    facebook: "https://facebook.com/sahooskitchen",
    instagram: "https://instagram.com/sahooskitchen",
    twitter: "https://twitter.com/sahooskitchen",
    youtube: "https://youtube.com/sahooskitchen"
  }
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Special Offers", href: "/offers" },
    { name: "Contact", href: "/contact" }
  ],
  footer: [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Dine In", href: "/dine-in" },
        { name: "Takeaway", href: "/takeaway" },
        { name: "Catering", href: "/catering" },
        { name: "Private Events", href: "/events" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "/faqs" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Feedback", href: "/feedback" },
        { name: "Loyalty Program", href: "/loyalty" }
      ]
    }
  ]
};

export const theme = {
  colors: {
    primary: "#8B4513", // Brown
    secondary: "#FFA500", // Orange
    accent: "#FFD700", // Gold
    background: "#FFFFFF",
    text: "#1A1A1A",
    muted: "#666666"
  },
  fonts: {
    heading: "Winky Sans, sans-serif",
    body: "Inter, sans-serif"
  }
}; 