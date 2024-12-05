import React from 'react';
import { Building2, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function UserTypeSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to RoomGroom
          </h1>
          <p className="text-xl text-gray-600">
            Choose how you'd like to use our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => navigate('/register/landlord')}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <Building2 className="w-10 h-10 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">I'm a Landlord</h2>
              <p className="text-gray-600 text-center">
                List your properties, manage bookings, and connect with potential tenants
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/register/tenant')}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <User className="w-10 h-10 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">I'm a Tenant</h2>
              <p className="text-gray-600 text-center">
                Search for rooms, connect with landlords, and book your perfect space
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}