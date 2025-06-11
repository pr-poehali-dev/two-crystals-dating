import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Heart",
      title: "Умный алгоритм",
      description:
        "Система подбора анализирует ваши предпочтения и находит идеальные пары на основе совместимости",
      color: "bg-romance-pink",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Верификация профилей, модерация контента и защита личных данных на высшем уровне",
      color: "bg-romance-purple",
    },
    {
      icon: "MessageSquare",
      title: "Богатое общение",
      description:
        "Текст, фото, видео, голосовые сообщения, стикеры и виртуальные подарки",
      color: "bg-romance-orange",
    },
    {
      icon: "Sparkles",
      title: "Premium опыт",
      description:
        "Расширенные фильтры поиска, приоритет в показе и эксклюзивные функции",
      color: "bg-purple-600",
    },
    {
      icon: "Globe",
      title: "Без границ",
      description:
        "Знакомьтесь с людьми из любой точки мира или ищите пары рядом с вами",
      color: "bg-blue-500",
    },
    {
      icon: "Zap",
      title: "Мгновенность",
      description:
        "Быстрая регистрация, моментальные уведомления и мгновенная доставка сообщений",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Почему выбирают
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-romance-pink to-romance-purple">
              {" "}
              Two Crystals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали самую современную платформу для знакомств, где каждая
            функция продумана до мелочей
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-romance-pink to-romance-purple rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat">
            Two Crystals в цифрах
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                2M+
              </div>
              <div className="text-white/90">Активных пользователей</div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                500K+
              </div>
              <div className="text-white/90">Успешных пар</div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                10M+
              </div>
              <div className="text-white/90">Сообщений в день</div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-white/90">Довольных пользователей</div>
            </div>
          </div>
        </div>

        {/* Stories Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-romance-purple hover:bg-romance-purple/90"
            onClick={() => (window.location.href = "/stories")}
          >
            <Icon name="Image" size={20} className="mr-2" />
            Смотреть Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
