import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface Story {
  id: number;
  username: string;
  avatar: string;
  content: string;
  isVideo: boolean;
  isOnline: boolean;
  createdAt: Date;
  expiresAt: Date;
  duration?: number;
}

interface StoryUpload {
  file: File | null;
  preview: string;
  isVideo: boolean;
}

const StoriesPreview = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      username: "Анна",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: false,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() + 22 * 60 * 60 * 1000),
    },
    {
      id: 2,
      username: "Михаил",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: true,
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() + 20 * 60 * 60 * 1000),
      duration: 15,
    },
    {
      id: 3,
      username: "Елена",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop",
      isOnline: false,
      isVideo: false,
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() + 18 * 60 * 60 * 1000),
    },
    {
      id: 4,
      username: "Дмитрий",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: true,
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() + 23 * 60 * 60 * 1000),
      duration: 20,
    },
    {
      id: 5,
      username: "София",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop",
      isOnline: true,
      isVideo: false,
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() + 21 * 60 * 60 * 1000),
    },
  ]);

  const [currentStoryIndex, setCurrentStoryIndex] = useState<number | null>(
    null,
  );
  const [viewerOpen, setViewerOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [storyUpload, setStoryUpload] = useState<StoryUpload>({
    file: null,
    preview: "",
    isVideo: false,
  });
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Story viewing logic
  useEffect(() => {
    if (viewerOpen && currentStoryIndex !== null && !isPaused) {
      const currentStory = stories[currentStoryIndex];
      const duration = currentStory.isVideo
        ? (currentStory.duration || 10) * 1000
        : 5000;

      setProgress(0);

      const startTime = Date.now();
      progressIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = (elapsed / duration) * 100;

        if (newProgress >= 100) {
          handleNextStory();
        } else {
          setProgress(newProgress);
        }
      }, 100);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [viewerOpen, currentStoryIndex, isPaused]);

  // File upload handling
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isVideo = file.type.startsWith("video/");
    const preview = URL.createObjectURL(file);

    setStoryUpload({
      file,
      preview,
      isVideo,
    });
  };

  const handleUploadStory = () => {
    if (!storyUpload.file) return;

    const newStory: Story = {
      id: Date.now(),
      username: "Вы",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: storyUpload.preview,
      isVideo: storyUpload.isVideo,
      isOnline: true,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      duration: storyUpload.isVideo ? 15 : undefined,
    };

    setStories((prev) => [newStory, ...prev]);
    setStoryUpload({ file: null, preview: "", isVideo: false });
    setUploadOpen(false);
  };

  const openStoryViewer = (index: number) => {
    setCurrentStoryIndex(index);
    setViewerOpen(true);
    setIsPaused(false);
  };

  const handleNextStory = () => {
    if (currentStoryIndex !== null && currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      setViewerOpen(false);
      setCurrentStoryIndex(null);
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex !== null && currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const getTimeRemaining = (expiresAt: Date) => {
    const now = new Date();
    const diff = expiresAt.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return hours > 0 ? `${hours}ч` : "Скоро истечет";
  };

  const filteredStories = stories.filter(
    (story) => story.expiresAt > new Date(),
  );

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
          {filteredStories.map((story, index) => (
            <Card
              key={story.id}
              className="group cursor-pointer overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openStoryViewer(index)}
            >
              <div className="relative">
                {/* Story Preview */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  {story.isVideo ? (
                    <video
                      src={story.content}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={story.content}
                      alt={`${story.username} story`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  {/* Video indicator */}
                  {story.isVideo && (
                    <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                      <Icon name="Play" size={16} className="text-white" />
                    </div>
                  )}

                  {/* Expiration timer */}
                  <div className="absolute top-4 left-4 bg-black/50 rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">
                      {getTimeRemaining(story.expiresAt)}
                    </span>
                  </div>

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
          <Card
            className="inline-block p-8 bg-gradient-to-r from-romance-pink to-romance-purple text-white border-0 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setUploadOpen(true)}
          >
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

        {/* Story Viewer Dialog */}
        <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
          <DialogContent className="max-w-md p-0 bg-black border-0 overflow-hidden">
            {currentStoryIndex !== null && (
              <div className="relative w-full h-[600px] md:h-[700px]">
                {/* Progress bars */}
                <div className="absolute top-4 left-4 right-4 z-10 flex gap-1">
                  {filteredStories.map((_, index) => (
                    <div
                      key={index}
                      className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-white transition-all duration-100"
                        style={{
                          width:
                            index < currentStoryIndex
                              ? "100%"
                              : index === currentStoryIndex
                                ? `${progress}%`
                                : "0%",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* User info */}
                <div className="absolute top-12 left-4 right-4 z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage
                        src={filteredStories[currentStoryIndex].avatar}
                      />
                      <AvatarFallback>
                        {filteredStories[currentStoryIndex].username[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        {filteredStories[currentStoryIndex].username}
                      </h3>
                      <p className="text-white/70 text-xs">
                        {getTimeRemaining(
                          filteredStories[currentStoryIndex].expiresAt,
                        )}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePause}
                    className="text-white hover:bg-white/20"
                  >
                    <Icon name={isPaused ? "Play" : "Pause"} size={16} />
                  </Button>
                </div>

                {/* Story content */}
                <div className="w-full h-full relative">
                  {filteredStories[currentStoryIndex].isVideo ? (
                    <video
                      ref={videoRef}
                      src={filteredStories[currentStoryIndex].content}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      playsInline
                      onEnded={handleNextStory}
                    />
                  ) : (
                    <img
                      src={filteredStories[currentStoryIndex].content}
                      alt="Story"
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Navigation areas */}
                  <div className="absolute inset-0 flex">
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={handlePrevStory}
                    />
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={handleNextStory}
                    />
                  </div>

                  {/* Navigation arrows */}
                  {currentStoryIndex > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                      onClick={handlePrevStory}
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </Button>
                  )}
                  {currentStoryIndex < filteredStories.length - 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                      onClick={handleNextStory}
                    >
                      <Icon name="ChevronRight" size={24} />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Upload Dialog */}
        <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Добавить историю</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              {storyUpload.preview ? (
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                  {storyUpload.isVideo ? (
                    <video
                      src={storyUpload.preview}
                      className="w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <img
                      src={storyUpload.preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      setStoryUpload({
                        file: null,
                        preview: "",
                        isVideo: false,
                      })
                    }
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              ) : (
                <div
                  className="aspect-[3/4] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-romance-pink transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Icon
                    name="Upload"
                    size={48}
                    className="text-gray-400 mb-4"
                  />
                  <p className="text-gray-600 text-center">
                    Нажмите для выбора фото или видео
                  </p>
                  <p className="text-gray-400 text-sm mt-2">JPG, PNG или MP4</p>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setUploadOpen(false)}
                >
                  Отмена
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-romance-pink to-romance-purple"
                  onClick={handleUploadStory}
                  disabled={!storyUpload.file}
                >
                  Опубликовать
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default StoriesPreview;
