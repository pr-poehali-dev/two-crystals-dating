import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useNavigate, useParams } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isOwn: boolean;
  type: "text" | "emoji" | "image";
  content?: string;
}

const Chat = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatUser = {
    name: username || "Анна",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    isOnline: true,
    lastSeen: "только что",
  };

  const initialMessages: Message[] = [
    {
      id: 1,
      text: "Привет! Как дела? 😊",
      timestamp: "10:30",
      isOwn: false,
      type: "text",
    },
    {
      id: 2,
      text: "Привет! Всё отлично, спасибо! А у тебя как?",
      timestamp: "10:32",
      isOwn: true,
      type: "text",
    },
    {
      id: 3,
      text: "Тоже хорошо! Понравилась твоя история про закат 🌅",
      timestamp: "10:33",
      isOwn: false,
      type: "text",
    },
    {
      id: 4,
      text: "Спасибо! Это было вчера на набережной ❤️",
      timestamp: "10:35",
      isOwn: true,
      type: "text",
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/");
      return;
    }

    const savedMessages = localStorage.getItem(`chat_${username}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages(initialMessages);
    }
  }, [navigate, username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now(),
      text: newMessage,
      timestamp: new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
      type: "text",
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem(`chat_${username}`, JSON.stringify(updatedMessages));
    setNewMessage("");

    // Имитация ответа
    setTimeout(() => {
      const responses = [
        "Согласен! 😄",
        "Интересно! Расскажи подробнее",
        "Классно! ✨",
        "А что думаешь об этом?",
        "Точно! 👍",
      ];

      const response: Message = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: false,
        type: "text",
      };

      const newMessages = [...updatedMessages, response];
      setMessages(newMessages);
      localStorage.setItem(`chat_${username}`, JSON.stringify(newMessages));
      setIsTyping(false);
    }, 1500);

    setIsTyping(true);
  };

  const sendEmoji = (emoji: string) => {
    const message: Message = {
      id: Date.now(),
      text: emoji,
      timestamp: new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
      type: "emoji",
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem(`chat_${username}`, JSON.stringify(updatedMessages));
  };

  const quickEmojis = ["❤️", "😍", "😊", "👍", "🔥", "💕", "😘", "🌹"];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate("/matches")}>
          <Icon name="ArrowLeft" size={20} />
        </Button>

        <Avatar className="w-10 h-10">
          <AvatarImage src={chatUser.avatar} />
          <AvatarFallback>{chatUser.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h2 className="font-semibold text-romance-purple">{chatUser.name}</h2>
          <p className="text-sm text-gray-500">
            {chatUser.isOnline ? (
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                онлайн
              </span>
            ) : (
              chatUser.lastSeen
            )}
          </p>
        </div>

        <Button variant="ghost" size="sm">
          <Icon name="Phone" size={18} />
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="Video" size={18} />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-xs lg:max-w-md`}>
              {!message.isOwn && (
                <div className="flex items-center gap-2 mb-1">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={chatUser.avatar} />
                    <AvatarFallback>{chatUser.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-500">{chatUser.name}</span>
                </div>
              )}

              <Card
                className={`${
                  message.isOwn ? "bg-romance-purple text-white" : "bg-white"
                }`}
              >
                <CardContent className="p-3">
                  {message.type === "emoji" ? (
                    <span className="text-2xl">{message.text}</span>
                  ) : (
                    <p className="text-sm">{message.text}</p>
                  )}
                  <p
                    className={`text-xs mt-1 ${
                      message.isOwn ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md">
              <div className="flex items-center gap-2 mb-1">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={chatUser.avatar} />
                  <AvatarFallback>{chatUser.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-500">{chatUser.name}</span>
              </div>

              <Card className="bg-white">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Emojis */}
      <div className="bg-white border-t px-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
          {quickEmojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => sendEmoji(emoji)}
              className="text-xl hover:scale-125 transition-transform p-1"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Icon name="Plus" size={18} />
          </Button>

          <div className="flex-1 flex gap-2">
            <Input
              placeholder="Написать сообщение..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className="bg-romance-purple hover:bg-romance-purple/90"
            >
              <Icon name="Send" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
