const Footer = () => {
  return (
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
  );
};

export default Footer;
