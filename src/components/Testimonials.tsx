import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна и Денис",
      photo1:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      photo2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      story:
        "Познакомились в Two Crystals год назад, и это была любовь с первого свайпа! Теперь планируем свадьбу 💕",
      date: "Вместе 1 год",
      rating: 5,
    },
    {
      id: 2,
      name: "Мария и Александр",
      photo1:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      photo2:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      story:
        "Искали серьёзные отношения, и Two Crystals помог нам найти друг друга. Алгоритм работает невероятно точно!",
      date: "Вместе 8 месяцев",
      rating: 5,
    },
    {
      id: 3,
      name: "Елена и Михаил",
      photo1:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      photo2:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face",
      story:
        "Долго не верили в онлайн знакомства, но Two Crystals изменил наше мнение. Здесь действительно ищут любовь!",
      date: "Вместе 6 месяцев",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Истории
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-romance-pink to-romance-purple">
              {" "}
              Любви
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый день на Two Crystals рождаются новые пары. Прочитайте истории
            тех, кто уже нашел свою любовь
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Couple Photos */}
                <div className="flex justify-center mb-6 relative">
                  <div className="relative">
                    <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                      <AvatarImage src={testimonial.photo1} />
                      <AvatarFallback>
                        {testimonial.name.split(" ")[0][0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="relative -ml-4">
                    <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                      <AvatarImage src={testimonial.photo2} />
                      <AvatarFallback>
                        {testimonial.name.split(" ")[2]
                          ? testimonial.name.split(" ")[2][0]
                          : "Л"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  {/* Heart */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-romance-pink rounded-full flex items-center justify-center z-10 love-animation">
                    <Icon name="Heart" size={16} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Story */}
                <p className="text-gray-600 text-center leading-relaxed mb-6 italic">
                  "{testimonial.story}"
                </p>

                {/* Names and Date */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-lg font-montserrat mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-romance-pink to-romance-purple rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat">
            Счастливые пары делятся результатами
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                94%
              </div>
              <div className="text-white/90">Находят серьёзные отношения</div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                76%
              </div>
              <div className="text-white/90">Встречаются в первый месяц</div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                1.2K+
              </div>
              <div className="text-white/90">Свадеб в этом году</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
