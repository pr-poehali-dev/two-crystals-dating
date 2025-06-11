import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-romance-pink via-romance-purple to-purple-900">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-romance-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon name="Heart" size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-montserrat">
              Two Crystals
            </h1>
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-romance-orange rounded-full animate-love-bounce"></div>
            <div className="w-8 h-8 bg-white rounded-full animate-love-bounce delay-200"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="animate-fade-in delay-300">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat leading-tight">
            Найди свою любовь среди
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              миллионов сердец
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Современная платформа знакомств с Stories, Reels и умным алгоритмом
            подбора пар. Создай профиль за минуту и начни общение уже сегодня!
            💕
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-romance-purple hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Начать знакомства
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-romance-purple transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть как работает
            </Button>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-romance-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Image" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Stories</h3>
              <p className="text-white/70 text-sm">Фото и видео</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-romance-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Video" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Reels</h3>
              <p className="text-white/70 text-sm">Короткие видео</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-love-red rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Мэтчи</h3>
              <p className="text-white/70 text-sm">Взаимные лайки</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Чаты</h3>
              <p className="text-white/70 text-sm">Общение 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
