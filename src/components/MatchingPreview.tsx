import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MatchingPreview = () => {
  const profiles = [
    {
      id: 1,
      name: "Алина",
      age: 25,
      city: "Москва",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      interests: ["Путешествия", "Йога", "Кино"],
      isVerified: true,
      matchPercentage: 94,
    },
    {
      id: 2,
      name: "Екатерина",
      age: 28,
      city: "Санкт-Петербург",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
      interests: ["Книги", "Кулинария", "Музыка"],
      isVerified: true,
      matchPercentage: 89,
    },
    {
      id: 3,
      name: "Мария",
      age: 26,
      city: "Казань",
      photo:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
      interests: ["Спорт", "Фотография", "Природа"],
      isVerified: false,
      matchPercentage: 87,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Система
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-romance-pink to-romance-purple">
              {" "}
              Мэтчинга
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш умный алгоритм анализирует ваши предпочтения и находит людей с
            максимальной совместимостью
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards Stack */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {profiles.map((profile, index) => (
                <Card
                  key={profile.id}
                  className={`swipe-card absolute inset-0 bg-white shadow-2xl border-0 overflow-hidden
                    ${index === 0 ? "z-30" : index === 1 ? "z-20 rotate-2 scale-95" : "z-10 rotate-1 scale-90"}`}
                  style={{
                    transform: `rotate(${index * 2}deg) scale(${1 - index * 0.05}) translateY(${index * 8}px)`,
                  }}
                >
                  <div className="relative">
                    {/* Profile Image */}
                    <div className="aspect-[3/4] relative">
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Match percentage */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-500 text-white font-bold px-3 py-1">
                          {profile.matchPercentage}% совпадение
                        </Badge>
                      </div>

                      {/* Verification badge */}
                      {profile.isVerified && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <Icon
                              name="Check"
                              size={16}
                              className="text-white"
                            />
                          </div>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>

                    {/* Profile Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold font-montserrat">
                          {profile.name}, {profile.age}
                        </h3>
                        <p className="text-white/90 flex items-center gap-1">
                          <Icon name="MapPin" size={16} />
                          {profile.city}
                        </p>
                      </div>

                      {/* Interests */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {profile.interests.map((interest, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-white/20 text-white border-0"
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex justify-center gap-4">
                        <Button
                          size="lg"
                          variant="outline"
                          className="rounded-full w-16 h-16 border-2 border-white/30 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300"
                        >
                          <Icon name="X" size={24} />
                        </Button>
                        <Button
                          size="lg"
                          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 border-0 love-animation transition-all duration-300"
                        >
                          <Icon name="Heart" size={24} />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="rounded-full w-16 h-16 border-2 border-white/30 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                        >
                          <Icon name="Star" size={24} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romance-pink rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Brain" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                    Умный алгоритм
                  </h3>
                  <p className="text-gray-600">
                    Анализирует более 50 параметров совместимости для поиска
                    идеальной пары
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romance-purple rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                    Точный подбор
                  </h3>
                  <p className="text-gray-600">
                    Показываем только тех, с кем у вас высокая вероятность
                    взаимности
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romance-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                    Мгновенные мэтчи
                  </h3>
                  <p className="text-gray-600">
                    Получайте уведомления о новых мэтчах в реальном времени
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                    Верификация
                  </h3>
                  <p className="text-gray-600">
                    Подтвержденные профили для безопасного и честного общения
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="gradient-primary text-white px-8 py-4 text-lg"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать поиск пары
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingPreview;
