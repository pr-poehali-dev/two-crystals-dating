import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    city: "",
    bio: "",
    interests: "",
    photos: [] as string[],
  });

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    const savedProfile = localStorage.getItem("userProfile");

    if (!user) {
      navigate("/");
      return;
    }

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      const userData = JSON.parse(user);
      setProfile((prev) => ({ ...prev, name: userData.name }));
    }
  }, [navigate]);

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    navigate("/discover");
  };

  const addPhoto = () => {
    const photoUrl = `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=400&h=600&fit=crop&auto=format`;
    setProfile((prev) => ({
      ...prev,
      photos: [...prev.photos, photoUrl].slice(0, 6),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-pink/20 to-purple-100/30 p-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-romance-purple flex items-center justify-center gap-2">
              <Icon name="User" size={24} />
              Мой профиль
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <Label htmlFor="age">Возраст</Label>
                <Input
                  id="age"
                  type="number"
                  value={profile.age}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, age: e.target.value }))
                  }
                  placeholder="25"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="city">Город</Label>
              <Input
                id="city"
                value={profile.city}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, city: e.target.value }))
                }
                placeholder="Москва"
              />
            </div>

            <div>
              <Label htmlFor="bio">О себе</Label>
              <Textarea
                id="bio"
                value={profile.bio}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, bio: e.target.value }))
                }
                placeholder="Расскажите о себе..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="interests">Интересы</Label>
              <Input
                id="interests"
                value={profile.interests}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, interests: e.target.value }))
                }
                placeholder="Путешествия, музыка, кино..."
              />
            </div>

            <div>
              <Label>Фотографии ({profile.photos.length}/6)</Label>
              <div className="grid grid-cols-3 gap-4 mt-2">
                {profile.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={photo}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {profile.photos.length < 6 && (
                  <button
                    onClick={addPhoto}
                    className="aspect-square border-2 border-dashed border-romance-purple/50 rounded-lg flex items-center justify-center hover:bg-romance-pink/10"
                  >
                    <Icon
                      name="Plus"
                      size={24}
                      className="text-romance-purple"
                    />
                  </button>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleSave}
                className="flex-1 bg-romance-purple hover:bg-romance-purple/90"
              >
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/discover")}
                className="flex-1"
              >
                К знакомствам
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
