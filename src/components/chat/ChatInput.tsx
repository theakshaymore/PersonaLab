import type { FormEvent } from "react";

interface ChatInputProps {
  question: string;
  onQuestionChange: (question: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ChatInput({
  question,
  onQuestionChange,
  onSubmit,
}: ChatInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="sticky bottom-0 bg-(--background) py-4"
    >
      <div className="flex items-end gap-3 rounded-2xl border border-(--border) bg-(--surface) p-2 shadow-sm">
        <input
          className="min-h-11 flex-1 bg-transparent px-3 text-sm text-(--foreground) outline-none placeholder:text-(--muted)"
          placeholder="Message PersonaLab..."
          value={question}
          onChange={(event) => onQuestionChange(event.target.value)}
        />
        <button className="rounded-xl bg-(--accent) px-4 py-2.5 text-sm font-medium text-white transition hover:bg-(--accent-hover)">
          Send
        </button>
      </div>
    </form>
  );
}
