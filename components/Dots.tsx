export default function Dots({ total, active }: { total: number; active: number }) {
  return (
    <div className="mt-auto flex justify-center gap-1.5 pb-14" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-3 rounded-full transition-colors ${i === active ? "bg-brand" : "bg-brand-soft"}`}
        />
      ))}
    </div>
  );
}
