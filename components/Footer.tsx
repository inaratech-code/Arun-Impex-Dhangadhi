import Link from 'next/link'
import { MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-asphalt-black text-gray-300 mt-auto">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Arun Impex</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Trusted supplier and distributor of industrial fuels and bitumen products for infrastructure and construction projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-safety-orange transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-safety-orange transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-safety-orange transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-safety-orange transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products#bitumen" className="hover:text-safety-orange transition-colors">
                  Bitumen (VG Grades)
                </Link>
              </li>
              <li>
                <Link href="/products#emulsion" className="hover:text-safety-orange transition-colors">
                  Bitumen Emulsion
                </Link>
              </li>
              <li>
                <Link href="/products#furnace-oil" className="hover:text-safety-orange transition-colors">
                  Furnace Oil
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/9779858420038" target="_blank" rel="noopener noreferrer" className="hover:text-safety-orange transition-colors">
                  +977 9858420038 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                <a href="mailto:arunimpex.dhn@gmail.com" className="hover:text-safety-orange transition-colors break-all">
                  arunimpex.dhn@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Dhangadhi-03, Kailali,<br />
                  Nepal - 10900
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Arun Impex & Inara Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/about" className="hover:text-safety-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-safety-orange transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

