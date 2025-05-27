'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { services } from '@/data/services';

const Services = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Solutions for
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Non-Tech Founders
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            We bridge the gap between complex technology and business growth with our suite of AI-powered tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                theme === 'dark'
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200'
              } hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p
                className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } mb-6`}
              >
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                    <span
                      className={
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;