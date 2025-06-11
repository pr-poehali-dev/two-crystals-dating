import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const ReelsPreview = () => {
  const reels = [
    {
      id: 1,
      username: "Анастасия",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=500&fit=crop",
      title: "Мой утренний ритуал ☀️",
      likes: 1243,
      comments: 89,
      shares: 45,
    },
    {
      id: 2,
      username: "Максим",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=500&fit=crop",
      title: "Готовлю любимое блюдо 👨‍🍳",
      likes: 892,
      comments: 156,
      shares: 78,
    },
    {
      id: 3,
      username: "Диана",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=300&h=500&fit=crop",
      title: "Танцую в своей комнате 💃",
      likes: 2156,
      comments: 234,
      shares: 123,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Короткие
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-romance-pink to-romance-purple">
              {" "}
              Reels
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Покажи себя в коротких видео и открой для себя удивительных людей
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile mockup with reels */}
          <div className="relative max-w-sm mx-auto">
            {/* Phone frame */}
            <div className="relative bg-gray-800 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                <div className="relative h-full">
                  {/* Current reel */}
                  <div className="absolute inset-0">
                    <img
                      src={reels[0].video}
                      alt="Reel"
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      {/* Top info */}
                      <div className="absolute top-4 left-4 right-16">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage src={reels[0].avatar} />
                            <AvatarFallback>
                              {reels[0].username[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-semibold text-sm">
                            {reels[0].username}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs border-white text-white hover:bg-white hover:text-black"
                          >
                            Подписаться
                          </Button>
                        </div>
                      </div>

                      {/* Right sidebar */}
                      <div className="absolute right-4 bottom-20 space-y-6">
                        <button className="flex flex-col items-center gap-1 group">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-romance-pink transition-colors">
                            <Icon
                              name="Heart"
                              size={24}
                              className="text-white"
                            />
                          </div>
                          <span className="text-xs text-white/80">
                            {reels[0].likes}
                          </span>
                        </button>

                        <button className="flex flex-col items-center gap-1 group">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                            <Icon
                              name="MessageCircle"
                              size={24}
                              className="text-white"
                            />
                          </div>
                          <span className="text-xs text-white/80">
                            {reels[0].comments}
                          </span>
                        </button>

                        <button className="flex flex-col items-center gap-1 group">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                            <Icon
                              name="Share"
                              size={24}
                              className="text-white"
                            />
                          </div>
                          <span className="text-xs text-white/80">
                            {reels[0].shares}
                          </span>
                        </button>

                        <button className="flex flex-col items-center gap-1 group">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                            <Icon
                              name="Bookmark"
                              size={24}
                              className="text-white"
                            />
                          </div>
                        </button>
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-4 left-4 right-20">
                        <p className="text-sm font-medium mb-2">
                          {reels[0].title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/80">
                          <Icon name="Music" size={12} />
                          <span>Оригинальный звук</span>
                        </div>
                      </div>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon
                            name="Play"
                            size={28}
                            className="text-white ml-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reels.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === 0 ? "bg-romance-pink w-8" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romance-pink rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Video" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">
                    Короткие видео
                  </h3>
                  <p className="text-gray-300">
                    Создавайте видео до 60 секунд и показывайте свою яркую
                    личность
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romance-purple rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">
                    Удобная навигация
                  </h3>
                  <p className="text-gray-300">
                    Листайте видео свайпом на телефоне или стрелками на
                    компьютере
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romance-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Trending" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">
                    Viral контент
                  </h3>
                  <p className="text-gray-300">
                    Алгоритм продвигает интересные видео в топ для максимального
                    охвата
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">
                    Взаимодействие
                  </h3>
                  <p className="text-gray-300">
                    Лайкайте, комментируйте и делитесь понравившимися видео
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Button
                size="lg"
                className="bg-romance-pink hover:bg-romance-pink/90"
              >
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить Reel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => (window.location.href = "/reels")}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть все
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsPreview;
