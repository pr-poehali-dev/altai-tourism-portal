
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  type: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Эко-отель "Алтайская долина"',
    location: 'Горно-Алтайск',
    description: 'Комфортабельный отель с видом на горы, рестораном и спа-центром.',
    price: 'от 5 000 ₽/ночь',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
    type: 'hotel'
  },
  {
    id: 2,
    name: 'Гостевой дом "Катунские террасы"',
    location: 'Манжерок',
    description: 'Уютный гостевой дом на берегу реки Катунь с собственной территорией и баней.',
    price: 'от 3 500 ₽/ночь',
    image: 'https://images.unsplash.com/photo-1587381419916-77ee0ec5bd86?q=80&w=1600&auto=format&fit=crop',
    rating: 4.6,
    type: 'guesthouse'
  },
  {
    id: 3,
    name: 'Турбаза "Алтайский кедр"',
    location: 'Артыбаш, Телецкое озеро',
    description: 'Турбаза с комфортабельными домиками и всеми удобствами на берегу Телецкого озера.',
    price: 'от 4 200 ₽/ночь',
    image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=1600&auto=format&fit=crop',
    rating: 4.5,
    type: 'base'
  }
];

const HotelSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-montserrat text-3xl font-bold">Где остановиться</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Выбирайте из множества вариантов проживания - от комфортабельных отелей до уютных гостевых домов
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            Все варианты
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList>
            <TabsTrigger value="all">Все типы</TabsTrigger>
            <TabsTrigger value="hotel">Отели</TabsTrigger>
            <TabsTrigger value="guesthouse">Гостевые дома</TabsTrigger>
            <TabsTrigger value="base">Турбазы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold line-clamp-1">{hotel.name}</h3>
                        <div className="flex items-center text-gray-500 mt-1">
                          <Icon name="MapPin" className="h-4 w-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                      </div>
                      <Badge className={
                        hotel.type === 'hotel' ? 'bg-blue-600' : 
                        hotel.type === 'guesthouse' ? 'bg-green-600' : 
                        'bg-amber-600'
                      }>
                        {hotel.type === 'hotel' ? 'Отель' : 
                         hotel.type === 'guesthouse' ? 'Гостевой дом' : 
                         'Турбаза'}
                      </Badge>
                    </div>
                    <p className="mt-3 text-gray-600 line-clamp-2">{hotel.description}</p>
                    <div className="mt-3 font-bold text-green-700">{hotel.price}</div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Icon name="Info" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">
                      <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                      Забронировать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hotel" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.filter(hotel => hotel.type === 'hotel').map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  {/* Same card content as above */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold line-clamp-1">{hotel.name}</h3>
                        <div className="flex items-center text-gray-500 mt-1">
                          <Icon name="MapPin" className="h-4 w-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-blue-600">Отель</Badge>
                    </div>
                    <p className="mt-3 text-gray-600 line-clamp-2">{hotel.description}</p>
                    <div className="mt-3 font-bold text-green-700">{hotel.price}</div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Icon name="Info" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">
                      <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                      Забронировать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Similar TabsContent for guesthouse and base, omitted for brevity */}
          <TabsContent value="guesthouse" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.filter(hotel => hotel.type === 'guesthouse').map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  {/* Same card structure */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold line-clamp-1">{hotel.name}</h3>
                        <div className="flex items-center text-gray-500 mt-1">
                          <Icon name="MapPin" className="h-4 w-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-600">Гостевой дом</Badge>
                    </div>
                    <p className="mt-3 text-gray-600 line-clamp-2">{hotel.description}</p>
                    <div className="mt-3 font-bold text-green-700">{hotel.price}</div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Icon name="Info" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">
                      <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                      Забронировать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="base" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.filter(hotel => hotel.type === 'base').map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  {/* Same card structure */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold line-clamp-1">{hotel.name}</h3>
                        <div className="flex items-center text-gray-500 mt-1">
                          <Icon name="MapPin" className="h-4 w-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-amber-600">Турбаза</Badge>
                    </div>
                    <p className="mt-3 text-gray-600 line-clamp-2">{hotel.description}</p>
                    <div className="mt-3 font-bold text-green-700">{hotel.price}</div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Icon name="Info" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">
                      <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                      Забронировать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-10 p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-bold">Вы владелец отеля или гостевого дома?</h3>
          <p className="mt-2 text-gray-600">
            Зарегистрируйтесь бесплатно, чтобы добавить свой объект на наш сайт и получать прямые бронирования от туристов.
          </p>
          <Button className="mt-4 bg-green-700 hover:bg-green-800">
            <Icon name="Hotel" className="mr-2 h-4 w-4" />
            Добавить объект размещения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
