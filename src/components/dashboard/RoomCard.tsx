import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Room {
  id: number;
  name: string;
  images: string[];
  price: number;
  location: string;
  status: 'available' | 'occupied';
}

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
            room.status === 'available'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{room.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{room.location}</p>
        <p className="text-2xl font-bold text-indigo-600 mb-4">${room.price}/mo</p>

        <div className="flex justify-between items-center">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}