import React from 'react';
import { Home, Users, DollarSign, Star } from 'lucide-react';

const stats = [
  { label: 'Total Rooms', value: '12', icon: Home, color: 'bg-blue-500' },
  { label: 'Active Tenants', value: '8', icon: Users, color: 'bg-green-500' },
  { label: 'Total Revenue', value: '$24,500', icon: DollarSign, color: 'bg-purple-500' },
  { label: 'Average Rating', value: '4.8', icon: Star, color: 'bg-yellow-500' }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}