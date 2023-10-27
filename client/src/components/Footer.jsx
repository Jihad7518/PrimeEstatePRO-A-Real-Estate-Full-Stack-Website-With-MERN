
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <p>info@example.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <p>+1 234 567 890</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
