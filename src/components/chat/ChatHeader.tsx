interface ChatHeaderProps {
  personas: string[];
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function ChatHeader({ personas, theme, onToggleTheme }: ChatHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--header)] px-5 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
        <div>
          <h1 className="text-base font-semibold">PersonaLab</h1>
          <p className="text-xs text-[var(--muted)]">Minimal persona chat</p>
        </div>

        <div className="flex items-center gap-2">
          <select className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]">
            {personas.map((persona) => (
              <option key={persona}>{persona}</option>
            ))}
          </select>

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--hover)]"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
