"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Utensils, Heart, ShoppingBag, X, Phone } from "lucide-react";
import { theme } from '@/data/site';

interface DishDetailProps {
  dish: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    prepTime?: number;
    category?: string;
    subcategory?: string;
    dietaryTags?: string[];
    isSpecial?: boolean;
    isAvailable?: boolean;
    customizations?: { name: string; price: number; isAvailable: boolean }[];
  };
  onClose: () => void;
}

const DishDetail = ({ dish, onClose }: DishDetailProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image 
            src={dish.imageUrl || "/images/default-dish.jpg"}
            alt={dish.name}
            fill
            className="object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold" style={{ color: theme.colors.primary }}>{dish.name}</h2>
            
            <div className="flex gap-2">
              {dish.isSpecial && (
                <Badge style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}>
                  Special
                </Badge>
              )}
              {dish.subcategory && (
                <Badge className={dish.subcategory === 'Veg' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                  {dish.subcategory}
                </Badge>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{dish.description}</p>
          
          <div className="flex items-center gap-6 mb-6">
            {dish.prepTime && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{dish.prepTime} mins</span>
              </div>
            )}
            {dish.category && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Utensils className="h-4 w-4" />
                <span>{dish.category}</span>
              </div>
            )}
          </div>
          
          {dish.dietaryTags && dish.dietaryTags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2 text-gray-700">Dietary Information</h3>
              <div className="flex flex-wrap gap-2">
                {dish.dietaryTags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {dish.customizations && dish.customizations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2 text-gray-700">Customizations</h3>
              <div className="space-y-2">
                {dish.customizations.map((option, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{option.name}</span>
                    <span className="font-medium">+₹{option.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
                ₹{dish.price.toFixed(2)}
              </span>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            
            <Button 
              className="w-full text-white" 
              style={{ backgroundColor: theme.colors.secondary }}
              onClick={() => window.location.href = 'tel:+1234567890'}
            >
              <Phone className="mr-2 h-4 w-4" /> Contact to Order
              {/* <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart */}
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetail; 