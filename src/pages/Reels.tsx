import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface Reel {
  id: number;
  username: string;
  avatar: string;
  video: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  music: string;
  isLiked?: boolean;
  isOwn?: boolean;
}

const Reels = () => {
  const navigate = useNavigate();
  const [reels, setReels] = useState<Reel[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: "",
    description: "",
    music: "Оригинальный звук",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const sampleReels: Reel[] = [
    {
      id: 1,
      username: "Анастасия",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=500&fit=crop",
      title: "Мой утренний ритуал ☀️",
      description:
        "Каждое утро начинаю с медитации и йоги. А как проводите утро вы?",
      likes: 1243,
      comments: 89,
      shares: 45,
      music: "Оригинальный звук",
      isLiked: false,
    },
    {
      id: 2,
      username: "Максим",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=500&fit=crop",
      title: "Готовлю любимое блюдо 👨‍🍳",
      description: "Секретный рецепт пасты карбонара от шеф-повара 🍝",
      likes: 892,
      comments: 156,
      shares: 78,
      music: "Jazz Cafe - Instrumental",
      isLiked: true,
    },
    {
      id: 3,
      username: "Диана",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=300&h=500&fit=crop",
      title: "Танцую в своей комнате 💃",
      description: "Новый танец, который сегодня выучила! Кто танцует со мной?",
      likes: 2156,
      comments: 234,
      shares: 123,
      music: "Dance Hit 2024",
      isLiked: false,
    },
    {
      id: 4,
      username: "Алексей",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      video:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=500&fit=crop",
      title: "Путешествие по городу 🏙️",
      description:
        "Открываю новые места в нашем городе. Где ваше любимое место?",
      likes: 567,
      comments: 78,
      shares: 34,
      music: "Travel Vibes",
      isLiked: false,
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/");
      return;
    }

    const savedReels = localStorage.getItem("userReels");
    if (savedReels) {
      const parsed = JSON.parse(savedReels);
      setReels([...sampleReels, ...parsed]);
    } else {
      setReels(sampleReels);
    }
  }, [navigate]);

  const handleScroll = (direction: "up" | "down") => {
    if (direction === "down" && currentIndex < reels.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "up" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleLike = (reelId: number) => {
    setReels((prevReels) =>
      prevReels.map((reel) =>
        reel.id === reelId
          ? {
              ...reel,
              isLiked: !reel.isLiked,
              likes: reel.isLiked ? reel.likes - 1 : reel.likes + 1,
            }
          : reel,
      ),
    );
  };

  const handleUpload = () => {
    const newReel: Reel = {
      id: Date.now(),
      username: "Вы",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
      video: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=300&h=500&fit=crop`,
      title: uploadData.title,
      description: uploadData.description,
      likes: 0,
      comments: 0,
      shares: 0,
      music: uploadData.music,
      isLiked: false,
      isOwn: true,
    };

    const updatedReels = [...reels, newReel];
    setReels(updatedReels);

    const userReels = updatedReels.filter((r) => r.isOwn);
    localStorage.setItem("userReels", JSON.stringify(userReels));

    setShowUpload(false);
    setUploadData({ title: "", description: "", music: "Оригинальный звук" });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") handleScroll("up");
      if (e.key === "ArrowDown") handleScroll("down");
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) handleScroll("down");
      else handleScroll("up");
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  const currentReel = reels[currentIndex];

  if (!currentReel) return null;

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/discover")}
            className="text-white hover:bg-white/20"
          >
            <Icon name="ArrowLeft" size={20} />
          </Button>
          <h1 className="text-xl font-bold text-white">Reels</h1>
          <Button
            onClick={() => setShowUpload(true)}
            variant="ghost"
            className="text-white hover:bg-white/20"
          >
            <Icon name="Plus" size={20} />
          </Button>
        </div>
      </div>

      {/* Main Reel */}
      <div className="relative h-full w-full max-w-md mx-auto">
        <img
          src={currentReel.video}
          alt="Reel"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* User info */}
        <div className="absolute top-20 left-4 right-20">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-white">
              <AvatarImage src={currentReel.avatar} />
              <AvatarFallback>{currentReel.username[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-white font-semibold">
                {currentReel.username}
              </h3>
              <Button
                size="sm"
                variant="outline"
                className="text-xs border-white text-white hover:bg-white hover:text-black mt-1"
              >
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="absolute right-4 bottom-32 space-y-6">
          <button
            onClick={() => handleLike(currentReel.id)}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all ${
                currentReel.isLiked ? "bg-romance-pink" : "bg-white/20"
              }`}
            >
              <Icon
                name="Heart"
                size={24}
                className={
                  currentReel.isLiked ? "text-white fill-current" : "text-white"
                }
              />
            </div>
            <span className="text-xs text-white/80">{currentReel.likes}</span>
          </button>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <span className="text-xs text-white/80">
              {currentReel.comments}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all">
              <Icon name="Share" size={24} className="text-white" />
            </div>
            <span className="text-xs text-white/80">{currentReel.shares}</span>
          </button>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:scale-110 transition-all">
              <Icon name="Bookmark" size={24} className="text-white" />
            </div>
          </button>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-20">
          <h3 className="text-white font-semibold text-lg mb-2">
            {currentReel.title}
          </h3>
          <p className="text-white/90 text-sm mb-3">
            {currentReel.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-white/80">
            <Icon name="Music" size={12} />
            <span>{currentReel.music}</span>
          </div>
        </div>

        {/* Navigation indicators */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 space-y-2">
          {reels.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-8 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Scroll hints */}
        <div className="absolute bottom-20 right-2 text-white/50 text-xs space-y-2">
          {currentIndex > 0 && (
            <div className="flex flex-col items-center">
              <Icon name="ChevronUp" size={16} />
              <span>Вверх</span>
            </div>
          )}
          {currentIndex < reels.length - 1 && (
            <div className="flex flex-col items-center">
              <Icon name="ChevronDown" size={16} />
              <span>Вниз</span>
            </div>
          )}
        </div>
      </div>

      {/* Touch/Swipe areas */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-auto"
          onClick={() => handleScroll("up")}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-auto"
          onClick={() => handleScroll("down")}
        />
      </div>

      {/* Upload Dialog */}
      <Dialog open={showUpload} onOpenChange={setShowUpload}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-romance-purple">
              Создать Reel
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="aspect-[9/16] bg-gray-100 rounded-lg border-2 border-dashed border-romance-purple/50 flex items-center justify-center max-h-60">
              <div className="text-center">
                <Icon
                  name="Video"
                  size={32}
                  className="text-romance-purple mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">
                  Нажмите, чтобы загрузить видео
                </p>
                <p className="text-xs text-gray-500 mt-1">До 60 секунд</p>
              </div>
            </div>

            <Input
              placeholder="Заголовок вашего Reel..."
              value={uploadData.title}
              onChange={(e) =>
                setUploadData((prev) => ({ ...prev, title: e.target.value }))
              }
            />

            <Textarea
              placeholder="Описание..."
              value={uploadData.description}
              onChange={(e) =>
                setUploadData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={3}
            />

            <Input
              placeholder="Музыка"
              value={uploadData.music}
              onChange={(e) =>
                setUploadData((prev) => ({ ...prev, music: e.target.value }))
              }
            />

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowUpload(false)}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                onClick={handleUpload}
                className="flex-1 bg-romance-purple hover:bg-romance-purple/90"
              >
                Опубликовать
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reels;
