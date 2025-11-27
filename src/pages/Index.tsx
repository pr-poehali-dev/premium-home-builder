import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ДомСтрой</div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">О компании</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Проекты</a>
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Портфолио</a>
            <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Премиальные дома<br />под ключ
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Строительство каркасных и каменных домов в Московской области. 
                Полный цикл работ от проекта до сдачи под ключ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Заказать расчёт
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть проекты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a8685f9f-966c-4e53-b46e-480091e970c6/files/c59261ae-2403-4142-8e33-8c6ace436227.jpg"
                alt="Премиальный каркасный дом"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "Calendar", value: "15+", label: "лет на рынке" },
              { icon: "Home", value: "200+", label: "построенных домов" },
              { icon: "Award", value: "100%", label: "гарантия качества" },
              { icon: "Users", value: "50+", label: "специалистов" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Icon name={stat.icon as any} size={32} className="mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground">
              Мы специализируемся на строительстве премиальных домов, где каждая деталь 
              продумана до мелочей. Наша команда — это профессионалы с многолетним опытом.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Надёжность",
                description: "Используем только проверенные технологии и качественные материалы от ведущих производителей"
              },
              {
                icon: "CheckCircle",
                title: "Под ключ",
                description: "Полный цикл работ: от проектирования до финальной отделки и благоустройства территории"
              },
              {
                icon: "Clock",
                title: "Точные сроки",
                description: "Строго соблюдаем договорные сроки. Фиксируем их в контракте с финансовыми гарантиями"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-border/50 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-6">
                  <Icon name={feature.icon as any} size={40} className="text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Типы домов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предлагаем два основных типа строительства на выбор
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a8685f9f-966c-4e53-b46e-480091e970c6/files/c59261ae-2403-4142-8e33-8c6ace436227.jpg"
                alt="Каркасный дом"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Каркасные дома</h3>
                <p className="text-muted-foreground mb-4">
                  Современные энергоэффективные дома. Быстрое строительство (3-4 месяца), 
                  отличная теплоизоляция, экологичность.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Срок строительства: 3-4 месяца", "Цена от 2 500 000 ₽", "Гарантия 10 лет"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-accent mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Узнать подробнее</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <img 
                src="https://cdn.poehali.dev/projects/a8685f9f-966c-4e53-b46e-480091e970c6/files/84628da1-c2c8-4658-9d7e-93b965a5a4f5.jpg"
                alt="Каменный дом"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Каменные дома</h3>
                <p className="text-muted-foreground mb-4">
                  Капитальные дома из кирпича и блоков. Максимальная прочность, 
                  долговечность более 100 лет, престиж.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Срок строительства: 6-8 месяцев", "Цена от 4 500 000 ₽", "Гарантия 15 лет"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-accent mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Узнать подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Этапы работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс строительства от идеи до новоселья
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { num: "01", title: "Консультация и выбор проекта", desc: "Обсуждаем ваши пожелания, показываем готовые проекты или разрабатываем индивидуальный" },
                { num: "02", title: "Проектирование и смета", desc: "Создаём рабочий проект, согласовываем все детали, составляем точную смету" },
                { num: "03", title: "Заключение договора", desc: "Подписываем договор с фиксированными сроками и ценой, открываем счёт эскроу" },
                { num: "04", title: "Строительство", desc: "Возводим дом с еженедельными отчётами и возможностью контроля на всех этапах" },
                { num: "05", title: "Отделка под ключ", desc: "Выполняем внутреннюю и внешнюю отделку, устанавливаем инженерные системы" },
                { num: "06", title: "Сдача объекта", desc: "Проводим финальную проверку, оформляем документы, передаём ключи от вашего дома" }
              ].map((step, idx) => (
                <Card key={idx} className="border-l-4 border-l-accent animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <CardContent className="p-6 flex gap-6">
                    <div className="text-5xl font-bold text-accent/20">{step.num}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Портфолио реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { img: "c59261ae-2403-4142-8e33-8c6ace436227", title: "Дом в Подмосковье", area: "180 м²", type: "Каркасный" },
              { img: "84628da1-c2c8-4658-9d7e-93b965a5a4f5", title: "Коттедж в Истре", area: "250 м²", type: "Каменный" },
              { img: "8cf0538e-4426-4cdc-b44b-a213a00d4e95", title: "В процессе", area: "320 м²", type: "Каменный" }
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://cdn.poehali.dev/projects/a8685f9f-966c-4e53-b46e-480091e970c6/files/${project.img}.jpg`}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.area}</span>
                    <span>{project.type}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Оставьте заявку</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Получите бесплатную консультацию и расчёт стоимости вашего будущего дома
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input 
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Textarea 
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </div>
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <a href="tel:+74951234567" className="text-muted-foreground hover:text-accent">+7 (495) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:info@domstroy.ru" className="text-muted-foreground hover:text-accent">info@domstroy.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Офис</div>
                      <div className="text-muted-foreground">Московская область, г. Красногорск</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб-Вс: 10:00 - 17:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">ДомСтрой</div>
              <p className="text-sm opacity-80">
                Премиальное строительство домов под ключ в Московской области
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Каркасные дома</li>
                <li>Каменные дома</li>
                <li>Проектирование</li>
                <li>Отделка под ключ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">О нас</a></li>
                <li><a href="#portfolio" className="hover:opacity-100">Портфолио</a></li>
                <li><a href="#contacts" className="hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>+7 (495) 123-45-67</div>
                <div>info@domstroy.ru</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60">
            © 2024 ДомСтрой. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
