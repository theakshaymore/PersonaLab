export type Theme = "light" | "dark";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatHeaderProps {
  personas: string[];
  theme: Theme;
  onToggleTheme: () => void;
}
