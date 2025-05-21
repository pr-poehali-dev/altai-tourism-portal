
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Mountain" className="h-6 w-6 text-green-500" />
              <span className="font-montserrat font-bold text-lg">Удивительный Алтай</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ваш надежный гид по самым красивым местам Алтая. Исследуйте природные чудеса, 
              бронируйте жилье и планируйте незабываемое путешествие.
            </p>
            <div className="flex gap-3">
              <a href="https://vk.com" className="hover:text-green-500 transition-colors" aria-label="ВКонтакте">
                <Icon name="Share2" className="h-5 w-5" />
              </a>
              <a href="https://t.me" className="hover:text-green-500 transition-colors" aria-label="Telegram">
                <Icon name="Send" className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-green-500 transition-colors" aria-label="YouTube">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Разделы сайта</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/attractions" className="hover:text-green-500 transition-colors">Достопримечательности</Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-green-500 transition-colors">Где остановиться</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-green-500 transition-colors">Экскурсии</Link>
              </li>
              <li>
                <Link to="/cafes" className="hover:text-green-500 transition-colors">Кафе и рестораны</Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-green-500 transition-colors">Карта Алтая</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Для бизнеса</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/business/hotel" className="hover:text-green-500 transition-colors">Добавить отель</Link>
              </li>
              <li>
                <Link to="/business/tour" className="hover:text-green-500 transition-colors">Добавить экскурсию</Link>
              </li>
              <li>
                <Link to="/business/cafe" className="hover:text-green-500 transition-colors">Добавить кафе</Link>
              </li>
              <li>
                <Link to="/business/register" className="hover:text-green-500 transition-colors">Регистрация для бизнеса</Link>
              </li>
              <li>
                <Link to="/business/login" className="hover:text-green-500 transition-colors">Вход для партнеров</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Подписка на новости</h3>
            <p className="text-gray-400 mb-3">
              Узнавайте первыми о новых маршрутах, скидках и специальных предложениях.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                type="email" 
                className="bg-gray-800 border-gray-700 text-gray-200"
              />
              <Button className="bg-green-700 hover:bg-green-800 shrink-0">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2025 Удивительный Алтай. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">О проекте</Link>
            <Link to="/contacts" className="text-gray-400 hover:text-green-500 transition-colors">Контакты</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-green-500 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
