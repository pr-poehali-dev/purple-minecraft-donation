import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const donateItems = [
    {
      id: 1,
      title: 'VIP',
      price: '299₽',
      icon: 'Crown',
      color: 'from-purple-500 to-purple-700',
      features: ['Приоритет входа', 'Цветной ник', 'Доступ к /kit vip', '5 точек дома']
    },
    {
      id: 2,
      title: 'Diamond',
      price: '599₽',
      icon: 'Gem',
      color: 'from-cyan-500 to-blue-700',
      features: ['Все из VIP', 'Креативный режим', 'Доступ к /fly', '10 точек дома', 'Приватные миры']
    },
    {
      id: 3,
      title: 'Premium',
      price: '999₽',
      icon: 'Sparkles',
      color: 'from-yellow-500 to-orange-600',
      features: ['Все из Diamond', 'Бессмертие', 'Доступ ко всем мирам', '20 точек дома', 'Эксклюзивные предметы']
    }
  ];

  const rules = [
    { id: 1, title: 'Уважение к игрокам', description: 'Запрещены оскорбления, угрозы и любые формы дискриминации' },
    { id: 2, title: 'Честная игра', description: 'Использование читов, багов и эксплойтов строго запрещено' },
    { id: 3, title: 'Не грифить', description: 'Запрещено разрушать постройки других игроков без разрешения' },
    { id: 4, title: 'Не спамить', description: 'Запрещен спам в чате, флуд и реклама других серверов' },
    { id: 5, title: 'Слушать администрацию', description: 'Следуйте указаниям модераторов и администраторов сервера' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1625] via-[#251a35] to-[#1a1625]">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#1a1625]/80 border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">MineCraft Server</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="text-white hover:bg-purple-600/20"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'donate' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('donate')}
                className="text-white hover:bg-purple-600/20"
              >
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                Донат
              </Button>
              <Button
                variant={activeSection === 'rules' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('rules')}
                className="text-white hover:bg-purple-600/20"
              >
                <Icon name="ScrollText" size={18} className="mr-2" />
                Правила
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Добро пожаловать
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Лучший Minecraft сервер с уникальными мирами и дружным комьюнити
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-600/20">
                <Icon name="Users" size={20} className="mr-2" />
                Discord
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Активное комьюнити</CardTitle>
                <CardDescription className="text-gray-300">Более 1000 игроков онлайн каждый день</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Без лагов</CardTitle>
                <CardDescription className="text-gray-300">Мощные сервера для комфортной игры</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Защита</CardTitle>
                <CardDescription className="text-gray-300">Надежная защита от гриферов и читеров</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Информация о сервере</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="Server" size={20} className="text-purple-400" />
                  <span>IP: <strong className="text-white">play.mcserver.ru</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Gamepad2" size={20} className="text-purple-400" />
                  <span>Версия: <strong className="text-white">1.20.1</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={20} className="text-purple-400" />
                  <span>Онлайн: <strong className="text-white">847/1000</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-purple-400" />
                  <span>Режимы: <strong className="text-white">Survival, Creative, SkyBlock</strong></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'donate' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-black text-white mb-4">Донат магазин</h1>
            <p className="text-xl text-gray-300">
              Поддержи сервер и получи эксклюзивные привилегии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donateItems.map((item) => (
              <Card 
                key={item.id} 
                className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/40 backdrop-blur hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl text-center">{item.title}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-4xl font-bold text-purple-300">{item.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Icon name="Check" size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white">
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white">Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="secondary" className="bg-purple-700 text-white px-4 py-2">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Банковская карта
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-700 text-white px-4 py-2">
                    <Icon name="Smartphone" size={16} className="mr-2" />
                    СБП
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-700 text-white px-4 py-2">
                    <Icon name="Wallet" size={16} className="mr-2" />
                    Криптовалюта
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'rules' && (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-black text-white mb-4">Правила сервера</h1>
            <p className="text-xl text-gray-300">
              Соблюдение правил обязательно для всех игроков
            </p>
          </div>

          <div className="space-y-4">
            {rules.map((rule, index) => (
              <Card 
                key={rule.id} 
                className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/40 backdrop-blur hover:border-purple-400 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{rule.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-base">
                        {rule.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-red-900/40 to-red-800/20 border-red-500/30 backdrop-blur mt-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="AlertTriangle" size={24} className="text-red-400" />
                <CardTitle className="text-white">Важно!</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>За нарушение правил предусмотрены наказания: предупреждение, мут, кик или бан в зависимости от серьезности нарушения. Администрация оставляет за собой право изменять правила без предварительного уведомления.</p>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-[#0f0a1a] border-t border-purple-500/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={20} className="text-white" />
              </div>
              <span className="text-white font-bold">MineCraft Server</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 MineCraft Server. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-purple-600/20">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-purple-600/20">
                <Icon name="Send" size={18} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
