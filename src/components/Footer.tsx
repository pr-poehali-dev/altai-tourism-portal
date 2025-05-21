
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" className="h-6 w-6 text-green-500" />
              <span className="font-montserrat font-bold text-lg text-white">Удивительный Алтай</span>
            </div>
            <p className="mt-4 text-sm">
              Ваш путеводитель по лучшим местам, отелям и развлечениям Алтая. Делаем путешествия комфортными и запоминающимися.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-700 transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-700 transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-700 transition-colors">
                <Icon name="TwitterIcon" className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-700 transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/attractions" className="hover:text-green-500 transition-colors">Достопримечательности</Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-green-500 transition-colors">Отели и жилье</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-green-500 transition-colors">Экскурсии</Link>
              </li>
              <li>
                <Link to="/restaurants" className="hover:text-green-500 transition-colors">Кафе и рестораны</Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-green-500 transition-colors">Карта Алтая</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Для бизнеса</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/add-hotel" className="hover:text-green-500 transition-colors">Добавить отель</Link>
              </li>
              <li>
                <Link to="/add-tour" className="hover:text-green-500 transition-colors">Добавить экскурсию</Link>
              </li>
              <li>
                <Link to="/add-restaurant" className="hover:text-green-500 transition-colors">Добавить ресторан</Link>
              </li>
              <li>
                <Link to="/advertising" className="hover:text-green-500 transition-colors">Реклама на сайте</Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-green-500 transition-colors">Партнерская программа</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Подпишитесь на новости</h3>
            <p className="text-sm mb-4">
              Получайте первыми информацию о новых местах и специальных предложениях
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
              />
              <Button className="bg-green-700 hover:bg-green-800 shrink-0">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-white mb-2">Свяжитесь с нами</h4>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Phone" className="h-4 w-4 text-green-500" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <Icon name="Mail" className="h-4 w-4 text-green-500" />
                <span>info@altai-travel.ru</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2025 Удивительный Алтай. Все права защищены.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/about" className="hover:text-green-500 transition-colors">О проекте</Link>
            <Link to="/terms" className="hover:text-green-500 transition-colors">Условия использования</Link>
            <Link to="/privacy" className="hover:text-green-500 transition-colors">Политика конфиденциальности</Link>
            <Link to="/contacts" className="hover:text-green-500 transition-colors">Контакты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
