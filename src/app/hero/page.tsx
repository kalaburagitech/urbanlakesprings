// components/HeroSection.tsx
import { FC } from 'react';
import Link from 'next/link';

const HeroSection: FC = () => (
  <section
    className="relative bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: 'url(/images/property2.jpg)' }}
  >
    <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Dream Home</h1>
      <p className="text-lg md:text-xl mb-8">Luxury, comfort, and convenience all in one place.</p>
      <Link href="#price">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium transition">Explore Now</button>
      </Link>
    </div>
  </section>
);

export default HeroSection;