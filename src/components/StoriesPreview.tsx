import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const StoriesPreview = () => {
  const stories = [
    {
      id: 1,
      username: "Анна",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      preview:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: false,
    },
    {
      id: 2,
      username: "Михаил",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      preview:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: true,
    },
    {
      id: 3,
      username: "Елена",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      preview:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop",
      isOnline: false,
      isVideo: false,
    },
    {
      id: 4,
      username: "Дмитрий",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      preview:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: true,
    },
    {
      id: 5,
      username: "София",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      preview:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Живые
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-romance-pink to-romance-purple">
              {" "}
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Делитесь моментами своей жизни и узнавайте людей через их истории
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="group cursor-pointer overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                {/* Story Preview */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={story.preview}
                    alt={`${story.username} story`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Video indicator */}
                  {story.isVideo && (
                    <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                      <Icon name="Play" size={16} className="text-white" />
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* User info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-white">
                          <AvatarImage
                            src={story.avatar}
                            alt={story.username}
                          />
                          <AvatarFallback>{story.username[0]}</AvatarFallback>
                        </Avatar>
                        {story.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">
                          {story.username}
                        </h3>
                        {story.isOnline && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-500/20 text-green-300 border-0"
                          >
                            Online
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add Story CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-romance-pink to-romance-purple text-white border-0 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Plus" size={28} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2 font-montserrat">
                  Добавить свою историю
                </h3>
                <p className="text-white/90">
                  Поделитесь моментом и привлеките внимание
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoriesPreview;
