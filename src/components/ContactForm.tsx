import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactForm = () => {
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
  );
};

export default ContactForm;
