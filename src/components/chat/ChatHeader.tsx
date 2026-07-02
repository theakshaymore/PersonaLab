import type { ChatHeaderProps } from "@/types/chats";

export function ChatHeader({
  personas,
  theme,
  onToggleTheme,
}: ChatHeaderProps) {
  return (
    <header className="border-b border-(--border) bg-(--header) px-5 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
        <div>
          {/* <h1 className="text-base font-semibold">PersonaLab</h1>
          <p className="text-xs text-[var(--muted)]">Minimal persona chat</p> */}
          <p className="text-xs text-(--muted)"></p>
        </div>

        <div className="flex items-center gap-2">
          <select className="rounded-md border border-(--border) bg-(--surface) px-3 py-2 text-sm text-(--foreground) outline-none transition focus:border-(--accent)">
            {personas.map((persona) => (
              <option key={persona}>{persona}</option>
            ))}
          </select>

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-md border border-(--border) px-3 py-2 text-sm text-(--foreground) transition hover:bg-(--hover)"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
