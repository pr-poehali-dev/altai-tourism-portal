
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import PopularAttractions from '@/components/PopularAttractions';
import HotelSection from '@/components/HotelSection';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <PopularAttractions />
        <Separator className="container my-4" />
        <HotelSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
