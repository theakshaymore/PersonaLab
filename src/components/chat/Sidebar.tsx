const historyItems = [
  "React learning plan",
  "Next.js route handlers",
  "RAG pipeline notes",
  "Supabase pgvector setup",
  "Persona prompt ideas",
  "LangChain retriever flow",
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-[var(--border)] bg-[var(--surface)] px-3 py-4 md:flex md:flex-col">
      <div className="mb-4 px-2">
        <h2 className="text-sm font-semibold">PersonaLab</h2>
        <p className="mt-1 text-xs text-[var(--muted)]">Recent chats</p>
      </div>

      <button className="mb-4 rounded-xl border border-[var(--border)] px-3 py-2 text-left text-sm transition hover:bg-[var(--hover)]">
        New chat
      </button>

      <nav className="space-y-1">
        {historyItems.map((item, index) => (
          <button
            key={item}
            className={
              index === 0
                ? "w-full truncate rounded-lg bg-[var(--hover)] px-3 py-2 text-left text-sm"
                : "w-full truncate rounded-lg px-3 py-2 text-left text-sm text-[var(--muted)] transition hover:bg-[var(--hover)] hover:text-[var(--foreground)]"
            }
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-[var(--border)] p-3 text-xs text-[var(--muted)]">
        Dummy history for now. Later this comes from saved conversations.
      </div>
    </aside>
  );
}
