'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import Button from '@/components/ui/Button';

const CTA = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Scale Your
          <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Startup Today?
          </span>
        </h2>
        <p
          className={`text-xl mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Join hundreds of successful startups who chose 2 Cent & Punt to accelerate their growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;