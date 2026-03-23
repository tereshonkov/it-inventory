import { LoginForm } from "@/features/auth/ui/LoginForm";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  return <LoginForm onLogin={onLogin} />;
}
