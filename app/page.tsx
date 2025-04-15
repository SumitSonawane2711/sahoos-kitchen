import { Metadata } from 'next';
import HeroSection from '@/components/home/herosection';
import FeaturedDishes from '@/components/home/featuredDishes';
import WeeklyMenuPreview from '@/components/home/weeklyMenuPreview';
import TestimonialsSection from '@/components/home/testimonials';
import SpecialOffersSection from '@/components/home/specialOffers';
import { RestaurantSchema, FAQSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: "Sahoo's Kitchen - Authentic Indian Cloud Kitchen",
  description: "Order fresh, homemade Indian meals, weekly combos, and breakfast subscriptions delivered to your doorstep. Experience authentic tastes with convenient delivery.",
  keywords: ["Indian food delivery", "cloud kitchen", "weekly meal plans", "breakfast subscription", "authentic Indian food"],
  alternates: {
    canonical: "https://sahooskitchen.com",
  },
};

export default function Home() {
  // FAQ data for schema
  const faqData = {
    questions: [
      {
        question: "How does the weekly meal subscription work?",
        answer: "Our weekly meal subscription provides fresh, ready-to-eat meals delivered to your doorstep on schedule. Simply choose your preferred veg or non-veg option for each day of the week, and we'll take care of the rest."
      },
      {
        question: "Do you cater to dietary restrictions?",
        answer: "Yes, we offer vegetarian and non-vegetarian options for all our meals. We can also accommodate specific dietary needs upon request."
      },
      {
        question: "What areas do you deliver to?",
        answer: "We currently deliver to all major areas in the city. Enter your pincode during checkout to confirm delivery availability in your area."
      },
      {
        question: "How do I place an order?",
        answer: "You can order directly through our website by selecting your desired meals and completing the checkout process. For bulk orders or special requests, please contact us directly."
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <RestaurantSchema
        name="Sahoo's Kitchen"
        description="Authentic Indian cloud kitchen offering fresh, homemade meals, weekly combos, and breakfast subscriptions."
        image="/images/restaurant.jpg"
        address={{
          streetAddress: "123 Food Street",
          addressLocality: "Bhubaneswar",
          addressRegion: "Odisha",
          postalCode: "751002",
          addressCountry: "IN"
        }}
        priceRange="₹₹-₹₹₹"
        telephone="+919876543210"
        servesCuisine={["Indian", "Vegetarian", "Non-Vegetarian"]}
        url="https://sahooskitchen.com"
      />
      <FAQSchema questions={faqData.questions} />

      {/* Page Components */}
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedDishes />
        <WeeklyMenuPreview />
        <SpecialOffersSection />
        <TestimonialsSection />
      </main>
    </>
  );
}