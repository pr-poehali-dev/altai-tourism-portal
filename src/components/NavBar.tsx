
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Mountain" className="h-6 w-6 text-green-700" />
            <span className="font-montserrat font-bold text-lg">Удивительный Алтай</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/attractions" className="font-medium text-gray-700 hover:text-green-700 transition-colors">
            Достопримечательности
          </Link>
          <Link to="/hotels" className="font-medium text-gray-700 hover:text-green-700 transition-colors">
            Где остановиться
          </Link>
          <Link to="/tours" className="font-medium text-gray-700 hover:text-green-700 transition-colors">
            Экскурсии
          </Link>
          <Link to="/cafes" className="font-medium text-gray-700 hover:text-green-700 transition-colors">
            Кафе и рестораны
          </Link>
          <Link to="/map" className="font-medium text-gray-700 hover:text-green-700 transition-colors">
            Карта
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
          <Button className="hidden md:flex bg-green-700 hover:bg-green-800">
            <Icon name="PlusCircle" className="mr-2 h-4 w-4" />
            Добавить объект
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Удивительный Алтай</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/attractions" className="flex items-center py-2">
                  <Icon name="Landmark" className="mr-2 h-4 w-4" />
                  Достопримечательности
                </Link>
                <Separator />
                <Link to="/hotels" className="flex items-center py-2">
                  <Icon name="Hotel" className="mr-2 h-4 w-4" />
                  Где остановиться
                </Link>
                <Separator />
                <Link to="/tours" className="flex items-center py-2">
                  <Icon name="MapPin" className="mr-2 h-4 w-4" />
                  Экскурсии
                </Link>
                <Separator />
                <Link to="/cafes" className="flex items-center py-2">
                  <Icon name="UtensilsCrossed" className="mr-2 h-4 w-4" />
                  Кафе и рестораны
                </Link>
                <Separator />
                <Link to="/map" className="flex items-center py-2">
                  <Icon name="Map" className="mr-2 h-4 w-4" />
                  Карта
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline">
                    <Icon name="LogIn" className="mr-2 h-4 w-4" />
                    Войти
                  </Button>
                  <Button className="bg-green-700 hover:bg-green-800">
                    <Icon name="PlusCircle" className="mr-2 h-4 w-4" />
                    Добавить объект
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
