import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userData: any) => void;
}

const AuthDialog = ({ isOpen, onClose, onSuccess }: AuthDialogProps) => {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация успешной авторизации
    const userData = {
      id: Date.now(),
      email: formData.email,
      name: formData.name || formData.email.split("@")[0],
      isNewUser: mode === "register",
    };
    localStorage.setItem("currentUser", JSON.stringify(userData));
    onSuccess(userData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-romance-purple">
            {mode === "login" ? "Вход" : "Регистрация"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Ваше имя"
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Пароль"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-romance-purple hover:bg-romance-purple/90"
          >
            <Icon name="Heart" size={16} className="mr-2" />
            {mode === "login" ? "Войти" : "Создать профиль"}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-romance-purple hover:underline"
          >
            {mode === "login"
              ? "Нет аккаунта? Зарегистрироваться"
              : "Уже есть аккаунт? Войти"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
