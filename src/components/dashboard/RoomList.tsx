import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { RoomCard } from './RoomCard';

const rooms = [
  {
    id: 1,
    name: 'Cozy Studio Apartment',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600'],
    price: 1200,
    location: 'Downtown, New York',
    status: 'available'
  },
  {
    id: 2,
    name: 'Modern 2-Bedroom Suite',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600'],
    price: 2000,
    location: 'Brooklyn, New York',
    status: 'occupied'
  }
];

export function RoomList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Your Rooms</h2>
        <div className="flex items-center space-x-2">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>All Rooms</option>
            <option>Available</option>
            <option>Occupied</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}