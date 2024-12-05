import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up in minutes and complete your profile to get started.',
    image: 'https://images.unsplash.com/photo-1554178286-db96c387c552?auto=format&fit=crop&q=80&w=600'
  },
  {
    number: '02',
    title: 'Search or List Property',
    description: 'Find your ideal room or list your property with detailed information.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
  },
  {
    number: '03',
    title: 'Connect & Book',
    description: 'Message, schedule viewings, and book securely through our platform.',
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=600'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How RoomGroom Works
          </h2>
          <p className="text-xl text-gray-600">
            Your journey to finding the perfect room is just three steps away
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-xl object-cover w-full h-64"
                />
              </div>
              <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}