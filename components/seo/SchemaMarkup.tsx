'use client';

import { FC } from 'react';
import Script from 'next/script';

interface RestaurantSchemaProps {
  name: string;
  description: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  priceRange: string;
  telephone: string;
  servesCuisine: string[];
  url: string;
}

export const RestaurantSchema: FC<RestaurantSchemaProps> = ({
  name,
  description,
  image,
  address,
  priceRange,
  telephone,
  servesCuisine,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name,
    description,
    image,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    priceRange,
    telephone,
    servesCuisine,
    url,
    hasMenu: {
      '@type': 'Menu',
      name: 'Cloud Kitchen Menu',
      description: 'Weekly combo meals, breakfast plans, and individual dishes',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Weekly Combo Meals',
          description: 'Weekly meal plans with veg and non-veg options',
        },
        {
          '@type': 'MenuSection',
          name: 'Breakfast Plans',
          description: 'Daily and monthly breakfast subscription options',
        },
      ],
    },
  };

  return (
    <Script
      id="restaurant-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
};

interface FoodItemSchemaProps {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency: string;
  isVegetarian?: boolean;
  isSpecial?: boolean;
}

export const FoodItemSchema: FC<FoodItemSchemaProps> = ({
  name,
  description,
  image,
  price,
  priceCurrency,
  isVegetarian,
  isSpecial,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name,
    description,
    image,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
    },
    ...(isVegetarian && { suitableForDiet: 'https://schema.org/VegetarianDiet' }),
  };

  return (
    <Script
      id={`food-schema-${name.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
};

interface FAQSchemaProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export const FAQSchema: FC<FAQSchemaProps> = ({ questions }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
};

interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

export const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}; 