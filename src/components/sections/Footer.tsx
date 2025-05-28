'use client';

import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  const footerLinks = {
    company: [
      { href: '#about', label: 'About Us' },
      { href: '#services', label: 'Services' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#', label: 'Careers' },
    ],
    contact: [
      { icon: <Mail className="w-4 h-4" />, text: 'hello@2centpunt.com' },
      { icon: <Phone className="w-4 h-4" />, text: '+1 (555) 123-4567' },
      { icon: <MapPin className="w-4 h-4" />, text: 'San Francisco, CA' },
    ],
    social: [
      { href: '#', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
      { href: '#', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
      { href: '#', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
    ],
  };

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark'
          ? 'bg-black border-t border-gray-800'
          : 'bg-white border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className={`w-10 h-10 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                    : 'bg-gradient-to-br from-blue-500 to-purple-600'
                } flex items-center justify-center`}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                2 Cent & Punt
              </span>
            </div>
            <p
              className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } mb-4 max-w-md`}
            >
              Empowering startups with intelligent software solutions. We handle the complexity so you can focus on growth.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((contact, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {contact.icon}
                  {contact.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-8 pt-8 border-t ${
            theme === 'dark'
              ? 'border-gray-800 text-gray-400'
              : 'border-gray-200 text-gray-600'
          } text-center`}
        >
          <p>&copy; 2024 2 Cent & Punt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;