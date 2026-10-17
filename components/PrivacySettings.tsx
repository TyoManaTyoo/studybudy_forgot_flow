"use client";

import { useState } from "react";
import Header from "./Header";
import Dots from "./Dots";

type Props = { onBack: () => void; onDone: () => void };

const OPTIONS = [
  "Tampilkan Nama & Jurusan",
  "Sembunyikan Nomor Handphone",
  "Sembunyikan IPK Akademik",
];

export default function PrivacySettings({ onBack, onDone }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggle = (o: string) =>
    setSelected((s) => (s.includes(o) ? s.filter((x) => x !== o) : [...s, o]));

  return (
    <>
      <Header
        title="Pengaturan Privasi"
        onBack={onBack}
        right={<button type="button" onClick={() => setOpen(true)} className="text-sm">Lewati</button>}
      />
      <section className="flex flex-1 flex-col px-6">
        <h2 className="mt-5 text-[17px] font-medium text-ink">Pilih Informasi yang ingin ditampilkan</h2>
        <ul className="mt-6 space-y-6">
          {OPTIONS.map((o) => {
            const on = selected.includes(o);
            return (
              <li key={o}>
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <input type="checkbox" checked={on} onChange={() => toggle(o)} className="peer sr-only" />
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors peer-focus-visible:outline-2 ${on ? "border-brand bg-brand" : "border-neutral-300"}`}>
                    {on && <span className="h-2 w-2 rounded-full bg-white" />}
                  </span>
                  {o}
                </label>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-auto h-12 rounded-full bg-brand text-lg text-white transition active:scale-[0.98]"
        >
          Konfirmasi
        </button>
      </section>
      <Dots total={4} active={3} />

      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 p-6">
          <div className="w-full rounded-3xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            </div>
            <h3 id="modal-title" className="mt-4 text-lg font-semibold">Pengaturan tersimpan</h3>
            <p className="mt-2 text-sm text-muted">
              {selected.length ? selected.join(", ") + "." : "Tidak ada pilihan privasi yang diubah."}
            </p>
            <button type="button" onClick={onDone} className="mt-6 h-12 w-full rounded-full bg-brand font-semibold text-white">
              Selesai
            </button>
          </div>
        </div>
      )}
    </>
  );
}
