import React from 'react';
import { Search, Clock, Shield, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Advanced Search Filters',
    description: 'Find exactly what you need with powerful search filters for location, price, amenities, and more.'
  },
  {
    icon: Clock,
    title: 'Real-time Availability',
    description: 'See instant updates on room availability and book immediately without waiting.'
  },
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Feel confident with our secure payment system and verified property listings.'
  },
  {
    icon: MessageCircle,
    title: 'Easy Communication',
    description: 'Connect directly with landlords or tenants through our built-in messaging system.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-600">
            Discover why thousands choose RoomGroom for their room rental needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}