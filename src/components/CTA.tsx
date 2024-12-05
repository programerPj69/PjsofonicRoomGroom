import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-indigo-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Find Your Perfect Room?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of happy users who have found their ideal living space through RoomGroom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/get-started')}
            className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}