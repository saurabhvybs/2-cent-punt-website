import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}