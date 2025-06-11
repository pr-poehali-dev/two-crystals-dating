import { useState, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface Story {
  id: number;
  username: string;
  avatar: string;
  content: string;
  type: "photo" | "video";
  caption: string;
  timestamp: string;
  views: number;
  isOwn?: boolean;
}

const Stories = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState({
    caption: "",
    type: "photo" as "photo" | "video",
  });

  const sampleStories: Story[] = [
    {
      id: 1,
      username: "Анна",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=600&fit=crop",
      type: "photo",
      caption: "Прекрасный закат сегодня! 🌅",
      timestamp: "2 ч назад",
      views: 145,
    },
    {
      id: 2,
      username: "Михаил",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      type: "video",
      caption: "Готовлю ужин для особенного человека 👨‍🍳❤️",
      timestamp: "4 ч назад",
      views: 89,
    },
    {
      id: 3,
      username: "Елена",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
      type: "photo",
      caption: "Мой новый образ! Как вам? 💃✨",
      timestamp: "6 ч назад",
      views: 234,
    },
    {
      id: 4,
      username: "Дмитрий",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
      type: "video",
      caption: "Тренировка в спортзале 💪 Кто со мной?",
      timestamp: "8 ч назад",
      views: 167,
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/");
      return;
    }

    const savedStories = localStorage.getItem("userStories");
    if (savedStories) {
      const parsed = JSON.parse(savedStories);
      setStories([...sampleStories, ...parsed]);
    } else {
      setStories(sampleStories);
    }
  }, [navigate]);

  const handleUpload = () => {
    const newStory: Story = {
      id: Date.now(),
      username: "Вы",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
      content: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=400&h=600&fit=crop`,
      type: uploadData.type,
      caption: uploadData.caption,
      timestamp: "Сейчас",
      views: 0,
      isOwn: true,
    };

    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);

    const userStories = updatedStories.filter((s) => s.isOwn);
    localStorage.setItem("userStories", JSON.stringify(userStories));

    setShowUpload(false);
    setUploadData({ caption: "", type: "photo" });
  };

  const openStoryViewer = (story: Story, index: number) => {
    setSelectedStory(story);
    setCurrentIndex(index);
  };

  const navigateStory = (direction: "prev" | "next") => {
    if (direction === "next" && currentIndex < stories.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedStory(stories[newIndex]);
    } else if (direction === "prev" && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedStory(stories[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedStory) return;

      if (e.key === "ArrowLeft") navigateStory("prev");
      if (e.key === "ArrowRight") navigateStory("next");
      if (e.key === "Escape") setSelectedStory(null);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedStory, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-pink/20 to-purple-100/30">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/discover")}>
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <h1 className="text-2xl font-bold text-romance-purple">
                Stories
              </h1>
            </div>
            <Button
              onClick={() => setShowUpload(true)}
              className="bg-romance-purple hover:bg-romance-purple/90"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить историю
            </Button>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {stories.map((story, index) => (
            <Card
              key={story.id}
              className="group cursor-pointer overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openStoryViewer(story, index)}
            >
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={story.content}
                    alt={`${story.username} story`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {story.type === "video" && (
                    <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                      <Icon name="Play" size={16} className="text-white" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="w-8 h-8 border-2 border-white">
                        <AvatarImage src={story.avatar} alt={story.username} />
                        <AvatarFallback>{story.username[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-semibold text-sm">
                          {story.username}
                        </h3>
                        <p className="text-white/80 text-xs">
                          {story.timestamp}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Icon name="Eye" size={12} />
                      <span>{story.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Story Viewer */}
      {selectedStory && (
        <Dialog
          open={!!selectedStory}
          onOpenChange={() => setSelectedStory(null)}
        >
          <DialogContent className="max-w-md p-0 bg-black border-0">
            <div className="relative aspect-[9/16] bg-black">
              <img
                src={selectedStory.content}
                alt="Story"
                className="w-full h-full object-cover"
              />

              {/* Progress bars */}
              <div className="absolute top-4 left-4 right-4 flex gap-1">
                {stories.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full flex-1 ${
                      index === currentIndex
                        ? "bg-white"
                        : index < currentIndex
                          ? "bg-white/60"
                          : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Story info */}
              <div className="absolute top-12 left-4 right-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border-2 border-white">
                    <AvatarImage src={selectedStory.avatar} />
                    <AvatarFallback>{selectedStory.username[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">
                      {selectedStory.username}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {selectedStory.timestamp}
                    </p>
                  </div>
                </div>
              </div>

              {/* Caption */}
              {selectedStory.caption && (
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">{selectedStory.caption}</p>
                </div>
              )}

              {/* Navigation */}
              <button
                onClick={() => navigateStory("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                <Icon name="ChevronLeft" size={20} />
              </button>

              <button
                onClick={() => navigateStory("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors disabled:opacity-50"
                disabled={currentIndex === stories.length - 1}
              >
                <Icon name="ChevronRight" size={20} />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Upload Dialog */}
      <Dialog open={showUpload} onOpenChange={setShowUpload}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-romance-purple">
              Добавить историю
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                variant={uploadData.type === "photo" ? "default" : "outline"}
                onClick={() =>
                  setUploadData((prev) => ({ ...prev, type: "photo" }))
                }
                className="flex-1"
              >
                <Icon name="Image" size={16} className="mr-2" />
                Фото
              </Button>
              <Button
                variant={uploadData.type === "video" ? "default" : "outline"}
                onClick={() =>
                  setUploadData((prev) => ({ ...prev, type: "video" }))
                }
                className="flex-1"
              >
                <Icon name="Video" size={16} className="mr-2" />
                Видео
              </Button>
            </div>

            <div className="aspect-[3/4] bg-gray-100 rounded-lg border-2 border-dashed border-romance-purple/50 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="Upload"
                  size={32}
                  className="text-romance-purple mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">
                  Нажмите, чтобы загрузить{" "}
                  {uploadData.type === "photo" ? "фото" : "видео"}
                </p>
              </div>
            </div>

            <Textarea
              placeholder="Добавьте подпись к вашей истории..."
              value={uploadData.caption}
              onChange={(e) =>
                setUploadData((prev) => ({ ...prev, caption: e.target.value }))
              }
              rows={3}
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

export default Stories;
