# Convert Figma To Next.js (Modul 7)

README ini menjelaskan progres project beserta kontribusi tiap anggota kelompok.

Bagian yang saya kerjakan (**Dwi Prasetyo**): **Pemulihan Akun, Keamanan & Pengaturan Profil**, dengan halaman:

- Lupa Sandi, permintaan reset kata sandi (`components/ForgotPassword.tsx`)
- Konfirmasi OTP, verifikasi kode (`components/OtpConfirm.tsx`)
- Pengaturan Privasi, pengaturan privasi profil (`components/PrivacySettings.tsx`)

## Tautan

- **Figma Modul 5:** [Magang-Vinix7](https://www.figma.com/design/VnTyqWUezB8XrrEotqSfwJ/Magang-Vinix7?node-id=311-940&t=NiF6Y9DsXPcg1XTY-0)
- **GitHub Repository:** [isi link repo GitHub]

## Cara Menjalankan di Lokal

```bash
npm install
npm run dev   # http://localhost:3000
```

## Fitur Interaktif

- Validasi email, tombol "Kirim OTP" aktif jika email valid
- Input OTP 4 digit (auto-fokus, backspace), timer kirim ulang 00:12
- Pilihan privasi (toggle) + modal konfirmasi, tombol Lewati, tombol kembali

## Kontribusi Anggota

| No | Nama | Fokus | Halaman |
|----|------|-------|---------|
| 1 | Dzaky Alam Fawaz Murtadha | Landing Page Utama & Alur Autentikasi | index (Landing Page), login (Halaman Masuk), home (Beranda Pengguna) |
| 2 | Alfan Nur Vidianto | Alur Registrasi & Orientasi Pengguna Baru | registrasi (Pendaftaran), minat (Pemilihan Bidang Minat), profil-kamu (Data Diri Awal) |
| 3 | Dwi Prasetyo | Pemulihan Akun, Keamanan & Pengaturan Profil | lupa-sandi (Lupa Password), otp (Konfirmasi OTP), privasi (Pengaturan Privasi) |
| 4 | Natan Setyo Agung | Fitur Interaksi, Diskusi & Ruang Belajar | room-server (Daftar & Buat Room), room (Live Room), jadwal (Agenda & Jadwal) |
| 5 | Muhamad Dzulfikar Fahmi | Fitur Pencarian, Komunikasi & Pengaturan Akun | cari (Pencarian Teman & Mentor), chat (Daftar Pesan), profil (Edit Profil & Akun) |

---

## Tahapan Pengerjaan

Mengubah desain Figma Modul 5 menjadi prototipe web interaktif (Next.js + Tailwind CSS) dengan bantuan AI, melalui lima tahap.

### 1. Setup Proyek & PRD
*Inisialisasi repo Git publik dan konfigurasi awal.*

- Membuat repositori GitHub **publik** dengan nama yang jelas (`forgot-flow`).
- Inisialisasi project dengan `npx create-next-app` (App Router, TypeScript, Tailwind CSS).
- Menyiapkan `.gitignore` agar `node_modules` dan `.next` tidak ikut ter-commit.
- Commit awal dengan pesan deskriptif, misalnya `chore: init next.js project`.
- Menyusun PRD: latar belakang, tujuan, alur pengguna, kebutuhan fungsional, tech stack, serta tautan Figma dan repo.

**Luaran:** repo publik yang berjalan lokal, kerangka PRD, dan commit pertama.

### 2. Ekstraksi Desain
*Petakan hierarki simpul dan aset dari Figma.*

- Memetakan hierarki frame dan komponen: tiga layar (Lupa Sandi → Konfirmasi OTP → Pengaturan Privasi) beserta elemennya (header, input, tombol, toggle, modal, indikator langkah).
- Mencatat **token visual**: warna (brand, ink, muted), tipografi, radius, jarak, dan tinggi komponen.
- Mengekspor aset, misalnya ilustrasi `lupa-sandi.png` ke folder `public/`.
- Menentukan pembagian komponen React: `Header`, `Dots`, `ForgotPassword`, `OtpConfirm`, `PrivacySettings`.

**Luaran:** daftar token desain, aset di `public/`, dan peta komponen.

### 3. Generasi AI
*Gunakan prompt terstruktur pada tool AI pilihan.*

Prompt disusun terstruktur agar hasilnya akurat dan dapat dipertanggungjawabkan:

1. **Konteks:** project, framework, dan tujuan layar.
2. **Spesifikasi visual:** token desain dari tahap 2.
3. **Struktur komponen:** nama file dan props.
4. **Batasan:** misalnya lebar maksimum 390px, responsif, tanpa library tambahan.

Komponen dihasilkan layar demi layar, hasilnya ditinjau dan dibandingkan dengan Figma, lalu setiap prompt penting dicatat di bagian log di bawah.

**Luaran:** komponen UI awal dan log prompt.

### 4. Pasang Logika
*Implementasi interaksi stateful yang fungsional.*

- **Navigasi antar layar:** state `step` di `app/page.tsx` mengatur layar yang tampil.
- **Validasi email:** tombol "Kirim OTP" aktif hanya jika format email valid, disertai pesan error.
- **Input OTP 4 digit:** auto-fokus ke kotak berikutnya, dukungan backspace, dan timer kirim ulang 00:12.
- **Pengaturan privasi:** toggle pilihan, modal konfirmasi, tombol Lewati, dan tombol kembali.

**Luaran:** minimal 2 aksi interaktif dinamis yang berjalan tanpa crash atau runtime error.

### 5. Poles & Audit
*Uji responsivitas dan catat log perbaikan.*

- Uji tampilan di berbagai lebar layar (mobile kecil, tablet, desktop) dan pastikan tidak ada broken layout.
- Cocokkan ulang warna, tipografi, dan proporsi dengan Figma.
- Jalankan `npm run build` untuk memastikan tidak ada error.
- Perbaikan manual terhadap hasil AI (lihat tabel di bawah).
- Melengkapi README dan mengekspor PRD ke PDF.

**Luaran:** prototipe final, README lengkap, PRD dalam PDF, dan riwayat commit yang rapi (minimal 5 commit deskriptif).

| Tahap | Fokus | Luaran utama |
|---|---|---|
| 1. Setup & PRD | Repo & konfigurasi | Repo publik, kerangka PRD |
| 2. Ekstraksi Desain | Figma & aset | Token desain, aset, peta komponen |
| 3. Generasi AI | Prompt terstruktur | Komponen UI, log prompt |
| 4. Pasang Logika | State & interaksi | Prototipe interaktif |
| 5. Poles & Audit | Responsif & perbaikan | Produk final, dokumentasi lengkap |

---

## Log Prompt & Perbaikan Manual

**Tool AI yang dipakai:** Claude Sonnet 5.5

### A. Log Prompt

Prompt ditulis terstruktur: **Konteks → Spesifikasi visual → Struktur komponen → Batasan**. Layar dibuat satu per satu, tidak sekaligus.

**Prompt 1: Kerangka halaman & layout**

```
Konteks: Project Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.
Buat app/page.tsx sebagai alur 3 layar (Lupa Sandi → Konfirmasi OTP →
Pengaturan Privasi) yang diatur dengan state `step`.
Visual: kartu selebar ponsel (max 390px) di tengah layar pada desktop,
full layar pada mobile. Warna dan token mengikuti desain Figma Modul 5.
Batasan: tanpa library tambahan, komponen dipisah per file di /components.
```

**Hasil:** `app/page.tsx` dengan state `step`, plus `Header.tsx` dan `Dots.tsx`.

**Prompt 2: Layar Lupa Sandi**

```
Buat components/ForgotPassword.tsx. Isi: header "Lupa Sandi", ilustrasi,
judul "Lupa Kata Sandi?", deskripsi, input email, tombol "Kirim OTP".
Interaksi: validasi format email; tombol nonaktif jika email tidak valid;
tampilkan ikon centang saat valid dan pesan error saat format salah.
Props: email, setEmail, onNext. Tinggi input 56px, radius 16px.
```

**Hasil:** `ForgotPassword.tsx` dengan validasi regex dan tombol yang aktif/nonaktif.

**Prompt 3: Layar Konfirmasi OTP**

```
Buat components/OtpConfirm.tsx: 4 kotak input OTP dengan auto-fokus ke
kotak berikutnya saat diisi, backspace kembali ke kotak sebelumnya,
dan timer kirim ulang mulai dari 00:12. Tampilkan email tujuan OTP.
Props: email, onBack, onNext.
```

**Hasil:** `OtpConfirm.tsx` dengan 4 input, auto-fokus, backspace, dan timer.

**Prompt 4: Layar Pengaturan Privasi**

```
Buat components/PrivacySettings.tsx: daftar pilihan privasi dengan toggle,
tombol "Lewati", tombol kembali, dan modal konfirmasi sebelum menyimpan.
Props: onBack, onDone.
```

**Hasil:** `PrivacySettings.tsx` dengan toggle, modal, dan tombol Lewati.

### B. Perbaikan Manual

| No | Masalah pada hasil AI | Perbaikan manual |
|----|----------------------|------------------|
| 1 | Ilustrasi memakai tag `<img>` biasa | Diganti dengan `<Image>` dari `next/image` |
| 2 | Indentasi tag `<img>` di `ForgotPassword.tsx` berantakan | Dirapikan manual |