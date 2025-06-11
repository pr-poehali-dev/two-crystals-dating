import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-romance-pink via-romance-purple to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-romance-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Icon name="Heart" size={40} className="text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
            Твоя любовь ждёт тебя
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Не откладывай счастье на завтра! Присоединись к Two Crystals и найди
            свою вторую половинку уже сегодня. Регистрация бесплатная, первое
            свидание — бесценное! 💕
          </p>
        </div>

        {/* Benefits cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-effect border-0 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-romance-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">
                2 минуты
              </h3>
              <p className="text-white/80 text-sm">
                на регистрацию и создание профиля
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">
                Бесплатно
              </h3>
              <p className="text-white/80 text-sm">
                все базовые функции навсегда
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">
                Безопасно
              </h3>
              <p className="text-white/80 text-sm">
                проверенные профили и конфиденциальность
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="text-lg px-12 py-6 bg-white text-romance-purple hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold"
          >
            <Icon name="Heart" size={24} className="mr-3" />
            Создать профиль бесплатно
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-romance-purple transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Icon name="Smartphone" size={24} className="mr-3" />
            Скачать приложение
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} />
            <span>2М+ пользователей</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} />
            <span>SSL защита</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Star" size={16} />
            <span>4.9 рейтинг</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Award" size={16} />
            <span>Лучшее приложение 2024</span>
          </div>
        </div>

        {/* Special offer */}
        <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
          <p className="text-lg font-semibold mb-2">
            🎉 Специальное предложение!
          </p>
          <p className="text-white/90">
            Зарегистрируйтесь до конца месяца и получите Premium статус на
            первый месяц бесплатно
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
