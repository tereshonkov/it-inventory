import { useState } from "react";
import LoginPage from "@/pages/login/ui/LoginPage";
import DashboardPage from "@/pages/dashboard/ui/DashboardPage";

type Screen = "login" | "dashboard";

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");

  return screen === "login"
    ? <LoginPage onLogin={() => setScreen("dashboard")} />
    : <DashboardPage />;
}
