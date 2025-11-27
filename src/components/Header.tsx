import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">ДомСтрой</div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-sm hover:text-accent transition-colors">О компании</a>
          <a href="#projects" className="text-sm hover:text-accent transition-colors">Проекты</a>
          <a href="#calculator" className="text-sm hover:text-accent transition-colors">Калькулятор</a>
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
  );
};

export default Header;
