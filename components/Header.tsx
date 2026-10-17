type Props = { title: string; onBack?: () => void; right?: React.ReactNode };

export default function Header({ title, onBack, right }: Props) {
  return (
    <header className="relative flex h-16 items-center justify-center px-5 pt-6">
      <button
        type="button"
        aria-label="Kembali"
        onClick={onBack}
        className="absolute left-5 top-1/2 -translate-y-1/4 p-1"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <h1 className="text-xl font-medium text-ink">{title}</h1>
      {right && <div className="absolute right-5 top-1/2 -translate-y-1/4">{right}</div>}
    </header>
  );
}
