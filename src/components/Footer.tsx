import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-romance-pink to-romance-purple rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat">
                Two Crystals
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Современная платформа знакомств, где каждый может найти свою
              любовь. Присоединяйтесь к миллионам счастливых пар!
            </p>
            <div className="flex gap-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:bg-romance-pink hover:border-romance-pink hover:text-white"
              >
                <Icon name="Instagram" size={16} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:bg-romance-pink hover:border-romance-pink hover:text-white"
              >
                <Icon name="Facebook" size={16} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:bg-romance-pink hover:border-romance-pink hover:text-white"
              >
                <Icon name="Twitter" size={16} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:bg-romance-pink hover:border-romance-pink hover:text-white"
              >
                <Icon name="Youtube" size={16} />
              </Button>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Возможности
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Stories и Reels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Умный поиск
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Система мэтчей
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Безопасный чат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Верификация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Premium подписка
                </a>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Поддержка
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Центр помощи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Правила безопасности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Сообщить о проблеме
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Связаться с нами
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Правовая информация
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Правила сообщества
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-romance-pink transition-colors"
                >
                  Лицензии
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
            <span>© {currentYear} Two Crystals. Все права защищены.</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Icon name="MapPin" size={14} />
                Россия, Москва
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Phone" size={14} />
                +7 (800) 123-45-67
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="bg-romance-pink hover:bg-romance-pink/90"
            >
              <Icon name="Download" size={16} className="mr-2" />
              App Store
            </Button>
            <Button
              size="sm"
              className="bg-romance-purple hover:bg-romance-purple/90"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Google Play
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500 text-xs">
          <div className="flex items-center gap-1">
            <Icon name="Shield" size={12} />
            <span>SSL Сертификат</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Lock" size={12} />
            <span>Данные защищены</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Award" size={12} />
            <span>Сертифицированное приложение</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="CheckCircle" size={12} />
            <span>Проверенный разработчик</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
