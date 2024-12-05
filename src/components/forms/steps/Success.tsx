import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SuccessProps {
  userType: string;
}

export function Success({ userType }: SuccessProps) {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Registration Successful!
      </h2>
      <p className="text-gray-600 mb-8">
        Welcome to RoomGroom. Your {userType} account has been created successfully.
      </p>
      <button
        onClick={() => navigate(`/${userType}`)}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Go to Dashboard
      </button>
    </div>
  );
}