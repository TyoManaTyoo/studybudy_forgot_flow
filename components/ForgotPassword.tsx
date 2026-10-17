import Header from "./Header";
import Dots from "./Dots";

type Props = { email: string; setEmail: (v: string) => void; onNext: () => void };

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ForgotPassword({ email, setEmail, onNext }: Props) {
  const valid = isValidEmail(email);

  return (
    <>
      <Header title="Lupa Sandi" />
      <section className="flex flex-1 flex-col px-5">
  
<img
  src="/lupa-sandi.png"
  alt="Ilustrasi lupa kata sandi"
  className="mx-auto mt-10 h-44 w-auto object-contain"
/>

        <h2 className="mt-14 text-center text-xl font-semibold text-ink">Lupa Kata Sandi?</h2>
        <p className="mt-2 text-center text-[15px] leading-6 text-muted">
          Jangan khawatir! Hal seperti ini bisa terjadi. Silakan masukkan alamat email yang terkait dengan akun Anda.
        </p>

        <label htmlFor="email" className="mt-8 text-[15px] font-semibold text-ink">Email</label>
        <div className="mt-2 flex h-14 items-center rounded-2xl border border-neutral-300 px-4 focus-within:border-brand">
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@email.com"
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
          />
          {valid && (
            <svg width="22" height="22" viewBox="0 0 24 24" aria-label="Email valid">
              <circle cx="12" cy="12" r="11" fill="#111" /><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        {email && !valid && <p className="mt-1 text-xs text-red-500">Format email belum benar.</p>}

        <button
          type="button"
          disabled={!valid}
          onClick={onNext}
          className="mt-6 h-14 rounded-2xl bg-brand text-lg font-semibold text-white transition active:scale-[0.98] disabled:opacity-50"
        >
          Kirim OTP
        </button>
      </section>
      <Dots total={2} active={0} />
    </>
  );
}
