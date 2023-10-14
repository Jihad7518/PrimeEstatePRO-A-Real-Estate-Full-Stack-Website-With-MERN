import React from 'react';

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto text-center">
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to PrimeEstatePRO</h1>
        <p className="text-lg mb-6 text-gray-700 leading-7">
          PrimeEstatePRO is your trusted partner in real estate. Our experienced team is committed to providing personalized service and expert advice throughout your real estate journey.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-7">
          Whether you're buying, selling, or renting, we're here to make the process seamless and rewarding.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-7">
          With a deep understanding of the local market, we help you find the perfect place to call home in the most desirable neighborhoods.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-7">
          At PrimeEstatePRO, we believe in turning your dreams into reality. Contact us today to get started on your real estate journey.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/team.jpg"
          alt="Team"
          className="w-48 h-48 object-cover rounded-full border-4 border-white"
        />
        <div className="ml-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h2>
          <p className="text-lg mb-6 text-gray-700 leading-7">
            Meet our dedicated team of professionals who are here to guide you every step of the way.
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
