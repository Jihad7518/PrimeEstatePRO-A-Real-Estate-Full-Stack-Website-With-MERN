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
            <ul>
              <li className="mb-2">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services">Services</a>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link> {/* Changed to Link */}
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <ul>
              <li className="mb-2">
                <a href="https://www.linkedin.com/in/md-jihad-8685a424a/">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com/MdJihad80981458">𝕏</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/Jihad7518">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2023 PrimeEstatePRO. All rights reserved, © Md. Jihad</p>
        </div>
      </div>
    </footer>
  );
}
