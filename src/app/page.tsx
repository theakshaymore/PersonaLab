"use client";

import { useState, type FormEvent } from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/ChatInput";
import { MessageList } from "@/components/chat/MessageList";
import { Sidebar } from "@/components/chat/Sidebar";
import { personas } from "@/data/personas";
import type { Message } from "@/types/chats";

const defaultAssistantMessage = "Default response";

const initialMessages: Message[] = [
  {
    role: "user",
    content: "Hi",
  },
  {
    role: "assistant",
    content: defaultAssistantMessage,
  },
];


export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmedQuestion },
      { role: "assistant", content: defaultAssistantMessage },
    ]);
    setQuestion("");
  }

  return (
    <main
      data-theme={theme}
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors"
    >
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">
        <ChatHeader
          personas={personas.map((persona) => persona.name)}
          theme={theme}
          onToggleTheme={() =>
            setTheme((current) => (current === "light" ? "dark" : "light"))
          }
        />

        <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4">
          <MessageList messages={messages} />
          <ChatInput
            question={question}
            onQuestionChange={setQuestion}
            onSubmit={handleSubmit}
          />
        </section>
        </div>
      </div>
    </main>
  );
}
