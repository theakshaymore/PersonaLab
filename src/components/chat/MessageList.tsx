interface Message {
  role: "user" | "assistant";
  content: string;
}

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto py-8">
      {messages.map((message, index) => (
        <div
          key={message.role + message.content + index}
          className={
            message.role === "user"
              ? "ml-auto max-w-[78%] rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm leading-6 text-white"
              : "mr-auto max-w-[78%] rounded-2xl bg-[var(--assistant)] px-4 py-3 text-sm leading-6 text-[var(--foreground)]"
          }
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}
