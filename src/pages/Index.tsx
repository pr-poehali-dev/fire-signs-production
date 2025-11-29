import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="ShieldAlert" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">ПожарТаблички</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Оплата и доставка</button>
              <button onClick={() => scrollToSection('certificates')} className="hover:text-primary transition-colors">Сертификаты</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="outline">
              <Icon name="Award" size={16} className="mr-2" />
              Сертифицированное производство
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Производство пожарных табличек
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональное изготовление знаков пожарной безопасности по ГОСТ. Быстрое производство, высокое качество, доставка по России.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('catalog')}>
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                <Icon name="Info" size={20} className="mr-2" />
                О компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">О компании</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Factory" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Собственное производство</h3>
                  <p className="text-muted-foreground">Современное оборудование и технологии для высокого качества продукции</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="FileCheck" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">ГОСТ стандарты</h3>
                  <p className="text-muted-foreground">Вся продукция соответствует требованиям пожарной безопасности</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Truck" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
                  <p className="text-muted-foreground">Отправка заказов по всей России в кратчайшие сроки</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <p className="text-lg leading-relaxed text-foreground">
                Мы специализируемся на производстве знаков пожарной безопасности и эвакуационных табличек. 
                Наша компания работает с 2010 года и за это время зарекомендовала себя как надежный партнер 
                для предприятий, торговых центров, офисов и государственных учреждений. Используем только 
                качественные материалы и современные технологии печати, что гарантирует долговечность и 
                соответствие всем нормативам пожарной безопасности.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Каталог продукции</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Полный ассортимент знаков пожарной безопасности по ГОСТ
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <img 
                  src="https://cdn.poehali.dev/projects/aeefdae4-2f8f-441a-a61d-e6663233c225/files/2fa0dd51-fe03-4168-a8af-c3e027a2d151.jpg" 
                  alt="Эвакуационные знаки"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Эвакуационные знаки</h3>
                  <p className="text-muted-foreground mb-4">
                    Указатели направления эвакуации, выходов, путей следования. 
                    Фотолюминесцентные и светоотражающие варианты.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">От 150 ₽</span>
                    <Button variant="outline" size="sm">
                      <Icon name="Plus" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <img 
                  src="https://cdn.poehali.dev/projects/aeefdae4-2f8f-441a-a61d-e6663233c225/files/825131dd-4a8a-4e5c-a6b9-cca9cc0e86ce.jpg" 
                  alt="Знаки пожарной безопасности"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Знаки ПБ</h3>
                  <p className="text-muted-foreground mb-4">
                    Огнетушитель, пожарный кран, пожарная лестница, телефон, 
                    кнопка сигнализации и другие.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">От 120 ₽</span>
                    <Button variant="outline" size="sm">
                      <Icon name="Plus" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <img 
                  src="https://cdn.poehali.dev/projects/aeefdae4-2f8f-441a-a61d-e6663233c225/files/52229a3a-3ef7-47c4-a650-f441c78ccbb2.jpg" 
                  alt="Запрещающие знаки"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Запрещающие знаки</h3>
                  <p className="text-muted-foreground mb-4">
                    Запрет курения, открытого огня, использования воды при тушении. 
                    Стандартные размеры и материалы.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">От 100 ₽</span>
                    <Button variant="outline" size="sm">
                      <Icon name="Plus" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Доступные размеры и материалы</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="Ruler" size={20} className="mr-2 text-primary" />
                    Размеры
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> 100×100 мм</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> 150×150 мм</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> 200×200 мм</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> 300×300 мм</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> Нестандартные размеры</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="Package" size={20} className="mr-2 text-primary" />
                    Материалы
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> ПВХ пластик 3 мм</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> Фотолюминесцентная пленка</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> Светоотражающая пленка</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> Металл с покрытием</li>
                    <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-primary" /> Самоклеящаяся основа</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Оплата и доставка</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="CreditCard" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Способы оплаты</h3>
                      <p className="text-muted-foreground">Безналичный расчет для юридических лиц и ИП</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="CircleCheck" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Банковский перевод по счету</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CircleCheck" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Оплата на расчетный счет</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CircleCheck" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Полный пакет документов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Доставка</h3>
                      <p className="text-muted-foreground">По всей России транспортными компаниями</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="CircleCheck" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>СДЭК, Деловые Линии, ПЭК</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CircleCheck" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Срок доставки 3-7 дней</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CircleCheck" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Самовывоз из Москвы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={32} className="flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сроки производства</h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Стандартные заказы изготавливаются за 3-5 рабочих дней. 
                      Срочное производство — от 1 дня (обсуждается индивидуально).
                    </p>
                    <p className="text-primary-foreground/90">
                      Минимальный заказ — от 1 штуки. Действуют оптовые скидки от 50 шт.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Сертификаты и документация</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Вся продукция сертифицирована и соответствует требованиям пожарной безопасности
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="FileCheck" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">ГОСТ Р 12.4.026-2015</h3>
                      <p className="text-muted-foreground text-sm">
                        Сертификат соответствия на знаки пожарной безопасности
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheck" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Декларация соответствия</h3>
                      <p className="text-muted-foreground text-sm">
                        Подтверждение качества продукции и безопасности материалов
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Сертификат пожарной безопасности</h3>
                      <p className="text-muted-foreground text-sm">
                        Подтверждение соответствия требованиям МЧС России
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Техническая документация</h3>
                      <p className="text-muted-foreground text-sm">
                        Паспорта качества, инструкции по монтажу и эксплуатации
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Download" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Запрос документов</h3>
                    <p className="text-muted-foreground mb-4">
                      Все сертификаты и декларации соответствия предоставляются по запросу. 
                      Свяжитесь с нами для получения полного пакета документации на интересующую продукцию.
                    </p>
                    <Button onClick={() => scrollToSection('contacts')}>
                      <Icon name="Mail" size={18} className="mr-2" />
                      Запросить документы
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                          +7 (495) 123-45-67
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@pozhartablichki.ru" className="text-muted-foreground hover:text-primary transition-colors">
                          info@pozhartablichki.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Промышленная, д. 15, офис 301
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: выходной
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-6">Отправить заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Телефон" 
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Комментарий к заказу" 
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                      />
                    </div>
                    <Button type="submit" variant="secondary" className="w-full">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="ShieldAlert" size={28} />
                  <span className="text-xl font-bold">ПожарТаблички</span>
                </div>
                <p className="text-white/70 text-sm">
                  Производство знаков пожарной безопасности с 2010 года
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Каталог</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Эвакуационные знаки</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Знаки ПБ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Запрещающие знаки</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Информация</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                  <li><a href="#delivery" className="hover:text-white transition-colors">Оплата и доставка</a></li>
                  <li><a href="#certificates" className="hover:text-white transition-colors">Сертификаты</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>+7 (495) 123-45-67</li>
                  <li>info@pozhartablichki.ru</li>
                  <li>г. Москва, ул. Промышленная, д. 15</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
              © 2024 ПожарТаблички. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
