
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Attraction {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  badge: string;
  distance: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Телецкое озеро',
    location: 'Турочакский район',
    description: 'Живописное озеро, включенное в список Всемирного наследия ЮНЕСКО. Одно из глубочайших озер России.',
    image: 'https://images.unsplash.com/photo-1627327719562-f1f61e8364fb?q=80&w=1600&auto=format&fit=crop',
    badge: 'Популярное',
    distance: '70 км от Горно-Алтайска'
  },
  {
    id: 2,
    name: 'Алтайский Марс (Кызыл-Чин)',
    location: 'Кош-Агачский район',
    description: 'Удивительные марсианские пейзажи, разноцветные глиняные холмы и красочный ландшафт.',
    image: 'https://images.unsplash.com/photo-1569974641259-deffa0973aaa?q=80&w=1600&auto=format&fit=crop',
    badge: 'Уникальное',
    distance: '30 км от села Чаган-Узун'
  },
  {
    id: 3,
    name: 'Горнолыжный курорт Манжерок',
    location: 'Майминский район',
    description: 'Популярный курорт с гондольным подъемником, откуда открывается потрясающий вид на долину реки Катунь.',
    image: 'https://images.unsplash.com/photo-1512467289565-5d5e5693edab?q=80&w=1600&auto=format&fit=crop',
    badge: 'Активный отдых',
    distance: '30 км от Горно-Алтайска'
  }
];

const PopularAttractions: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-montserrat text-3xl font-bold">Популярные достопримечательности</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Исследуйте потрясающие природные и культурные объекты Алтая, которые нельзя пропустить
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            Смотреть все
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-green-700">{attraction.badge}</Badge>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{attraction.name}</h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <Icon name="MapPin" className="h-4 w-4 mr-1" />
                      <span className="text-sm">{attraction.location}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 line-clamp-3">{attraction.description}</p>
                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <Icon name="Navigation" className="h-4 w-4 mr-1" />
                  {attraction.distance}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Icon name="Info" className="mr-2 h-4 w-4" />
                  Подробнее
                </Button>
                <Button size="sm" className="bg-green-700 hover:bg-green-800">
                  <Icon name="Route" className="mr-2 h-4 w-4" />
                  Маршрут
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAttractions;
