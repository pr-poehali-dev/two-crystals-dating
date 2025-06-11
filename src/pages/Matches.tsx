import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Matches = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState<string[]>([]);

  const matchedProfiles = [
    {
      name: "Анна",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format",
      lastMessage: "Привет! Как дела? 😊",
      time: "10:30",
    },
    {
      name: "Мария",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
      lastMessage: "Спасибо за лайк! 💕",
      time: "09:15",
    },
    {
      name: "Елена",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format",
      lastMessage: "Новое совпадение!",
      time: "Вчера",
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/");
      return;
    }

    const savedMatches = localStorage.getItem("userMatches");
    if (savedMatches) {
      setMatches(JSON.parse(savedMatches));
    }
  }, [navigate]);

  const filteredProfiles = matchedProfiles.filter((profile) =>
    matches.includes(profile.name),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-pink/20 to-purple-100/30 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate("/discover")}>
            <Icon name="ArrowLeft" size={20} />
          </Button>
          <h1 className="text-2xl font-bold text-romance-purple">Совпадения</h1>
          <Button variant="ghost" onClick={() => navigate("/profile")}>
            <Icon name="User" size={20} />
          </Button>
        </div>

        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              name="Heart"
              size={48}
              className="text-romance-purple/50 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              Пока нет совпадений
            </h2>
            <p className="text-gray-500 mb-6">
              Продолжайте лайкать профили, чтобы найти совпадения!
            </p>
            <Button
              onClick={() => navigate("/discover")}
              className="bg-romance-purple hover:bg-romance-purple/90"
            >
              Искать людей
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProfiles.map((profile, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-romance-purple">
                        {profile.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {profile.lastMessage}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{profile.time}</p>
                      <Icon
                        name="MessageCircle"
                        size={16}
                        className="text-romance-purple mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
