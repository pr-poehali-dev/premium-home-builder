import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    houseType: "frame",
    area: 150,
    foundation: false,
    roof: false,
    windows: false,
    heating: false,
    interior: false
  });

  const calculatePrice = () => {
    const basePrice = calculator.houseType === "frame" ? 25000 : 35000;
    let total = basePrice * calculator.area;
    
    if (calculator.foundation) total += 500000;
    if (calculator.roof) total += 400000;
    if (calculator.windows) total += 300000;
    if (calculator.heating) total += 600000;
    if (calculator.interior) total += calculator.area * 15000;
    
    return total;
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Калькулятор стоимости</h2>
          <p className="text-lg text-muted-foreground">
            Рассчитайте примерную стоимость строительства вашего дома
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 animate-fade-in">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <Label className="text-base font-semibold mb-4 block">Тип дома</Label>
                  <RadioGroup 
                    value={calculator.houseType} 
                    onValueChange={(value) => setCalculator({...calculator, houseType: value})}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label 
                      htmlFor="frame" 
                      className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        calculator.houseType === "frame" ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <RadioGroupItem value="frame" id="frame" />
                      <div className="flex-1">
                        <div className="font-semibold">Каркасный</div>
                        <div className="text-sm text-muted-foreground">от 25 000 ₽/м²</div>
                      </div>
                    </Label>
                    <Label 
                      htmlFor="stone" 
                      className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        calculator.houseType === "stone" ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <RadioGroupItem value="stone" id="stone" />
                      <div className="flex-1">
                        <div className="font-semibold">Каменный</div>
                        <div className="text-sm text-muted-foreground">от 35 000 ₽/м²</div>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <Label className="text-base font-semibold">Площадь дома</Label>
                    <span className="text-2xl font-bold text-accent">{calculator.area} м²</span>
                  </div>
                  <Slider
                    value={[calculator.area]}
                    onValueChange={(value) => setCalculator({...calculator, area: value[0]})}
                    min={80}
                    max={400}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>80 м²</span>
                    <span>400 м²</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 block">Дополнительные опции</Label>
                  <div className="space-y-3">
                    {[
                      { id: "foundation", label: "Усиленный фундамент", price: "+ 500 000 ₽" },
                      { id: "roof", label: "Премиум кровля", price: "+ 400 000 ₽" },
                      { id: "windows", label: "Панорамные окна", price: "+ 300 000 ₽" },
                      { id: "heating", label: "Тёплый пол по всему дому", price: "+ 600 000 ₽" },
                      { id: "interior", label: "Дизайнерская отделка", price: "+ 15 000 ₽/м²" }
                    ].map((option) => (
                      <div key={option.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={option.id}
                            checked={calculator[option.id as keyof typeof calculator] as boolean}
                            onCheckedChange={(checked) => 
                              setCalculator({...calculator, [option.id]: checked})
                            }
                          />
                          <Label htmlFor={option.id} className="cursor-pointer font-normal">
                            {option.label}
                          </Label>
                        </div>
                        <span className="text-sm text-muted-foreground">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 animate-scale-in h-fit sticky top-24">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Icon name="Calculator" size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Итоговая стоимость</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </div>
                <p className="text-sm text-muted-foreground">
                  Примерная стоимость под ключ
                </p>
              </div>

              <div className="space-y-3 mb-6 pt-6 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Базовая стоимость:</span>
                  <span className="font-semibold">
                    {((calculator.houseType === "frame" ? 25000 : 35000) * calculator.area).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                {(calculator.foundation || calculator.roof || calculator.windows || calculator.heating || calculator.interior) && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Опции:</span>
                    <span className="font-semibold">
                      {(calculatePrice() - (calculator.houseType === "frame" ? 25000 : 35000) * calculator.area).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                )}
              </div>

              <Button className="w-full" size="lg">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить точный расчёт
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Финальная стоимость определяется после осмотра участка и обсуждения деталей
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
