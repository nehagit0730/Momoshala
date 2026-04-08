import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="images/logo.png" alt="Momoshala Logo" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-2xl font-bold text-orange-500 tracking-tighter">
                MOMO<span className="text-white">SHALA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Dharamshala's premier bulk momo supplier. We provide high-quality, delicious momos to businesses across the region since 2024.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                6280 167160
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                hello@momoshala.com
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-orange-500 flex-shrink-0" />
                <span>Yol Cant, Dharamshala,<br />Himachal Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Minimum Order: 10 Plates (100 Momos)
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Momoshala by Abhishek Thapa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
