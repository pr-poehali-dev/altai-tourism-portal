
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1612265847694-ad9347bb9442?q=80&w=1600&auto=format&fit=crop')",
          backgroundPosition: "50% 65%"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 flex h-full flex-col justify-center items-start text-white">
        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
          Откройте для себя<br />
          <span className="text-amber-300">удивительный Алтай</span>
        </h1>
        
        <p className="mt-4 text-lg md:text-xl max-w-xl animate-fade-in">
          Величественные горы, кристальные озера и богатая культура ждут вас в одном из самых красивых регионов России
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button size="lg" className="bg-green-700 hover:bg-green-800">
            <Icon name="Map" className="mr-2 h-5 w-5" />
            Исследовать достопримечательности
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm">
            <Icon name="HotelIcon" className="mr-2 h-5 w-5" />
            Найти жилье
          </Button>
        </div>
      </div>
      
      {/* Hero Bottom stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm">
        <div className="container py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center text-white">
            <div className="text-2xl font-bold">45+</div>
            <div className="text-sm">достопримечательностей</div>
          </div>
          <div className="text-center text-white">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm">вариантов жилья</div>
          </div>
          <div className="text-center text-white">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm">экскурсионных маршрутов</div>
          </div>
          <div className="text-center text-white">
            <div className="text-2xl font-bold">25+</div>
            <div className="text-sm">кафе и ресторанов</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
