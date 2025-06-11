import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<string[]>([]);

  const sampleProfiles = [
    {
      name: "Анна",
      age: 25,
      city: "Москва",
      bio: "Люблю путешествия и хорошую музыку 🎵",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&auto=format",
    },
    {
      name: "Мария",
      age: 28,
      city: "СПб",
      bio: "Фотограф и любитель кофе ☕️",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&auto=format",
    },
    {
      name: "Елена",
      age: 23,
      city: "Екатеринбург",
      bio: "Танцую, читаю, готовлю 💃",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&auto=format",
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

  const handleLike = () => {
    const profile = sampleProfiles[currentIndex];
    const newMatches = [...matches, profile.name];
    setMatches(newMatches);
    localStorage.setItem("userMatches", JSON.stringify(newMatches));

    if (currentIndex < sampleProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePass = () => {
    if (currentIndex < sampleProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const currentProfile = sampleProfiles[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-pink/20 to-purple-100/30 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate("/profile")}>
            <Icon name="User" size={20} />
          </Button>
          <h1 className="text-2xl font-bold text-romance-purple">
            Two Crystals
          </h1>
          <div className="relative">
            <Button variant="ghost" onClick={() => navigate("/matches")}>
              <Icon name="MessageCircle" size={20} />
            </Button>
            {matches.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-romance-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {matches.length}
              </span>
            )}
          </div>
        </div>

        {/* Profile Card */}
        <Card className="relative overflow-hidden shadow-2xl">
          <div className="aspect-[3/4] relative">
            <img
              src={currentProfile.photo}
              alt={currentProfile.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <CardContent className="absolute bottom-0 left-0 right-0 text-white p-6">
              <h2 className="text-2xl font-bold mb-1">
                {currentProfile.name}, {currentProfile.age}
              </h2>
              <p className="text-white/90 mb-2 flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                {currentProfile.city}
              </p>
              <p className="text-white/80">{currentProfile.bio}</p>
            </CardContent>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <Button
            onClick={handlePass}
            size="lg"
            variant="outline"
            className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-red-400 hover:text-red-400"
          >
            <Icon name="X" size={24} />
          </Button>

          <Button
            onClick={handleLike}
            size="lg"
            className="w-16 h-16 rounded-full bg-romance-purple hover:bg-romance-purple/90"
          >
            <Icon name="Heart" size={24} />
          </Button>
        </div>

        {matches.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-romance-purple font-medium">
              💖 У вас {matches.length} совпадений!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
