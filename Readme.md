# HapusBG - AI Background Remover 🖼️✨

HapusBG adalah sebuah aplikasi web sederhana yang dibuat untuk menghapus latar belakang dari gambar secara otomatis menggunakan kekuatan AI. Aplikasi ini dibangun dengan frontend Next.js dan backend Python (FastAPI).


## 🚀 Fitur Utama

- **Unggah Gambar**: Pilih file gambar (JPG, PNG) dari komputer Anda.
- **Hapus Latar Belakang Otomatis**: Backend Python dengan library `rembg` akan memproses gambar Anda.
- **Pratinjau Hasil**: Lihat perbandingan antara gambar asli dan hasil tanpa latar belakang secara berdampingan.
- **Unduh Hasil**: Simpan gambar yang sudah bersih ke perangkat Anda.
- **Galeri Lokal**: Lihat riwayat gambar yang telah Anda proses, disimpan secara lokal di browser Anda.

## 💻 Teknologi yang Digunakan

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Python, FastAPI, Rembg
- **Struktur Proyek**: Monorepo

## ⚙️ Cara Menjalankan Secara Lokal

Pastikan Anda sudah menginstall Git, Python (3.8+), dan Node.js (18+).

### 1. Clone Repositori

```bash
git clone [https://github.com/DianPandus/removebg.git](https://github.com/DianPandus/removebg.git)
cd removebg
```

### 2. Setup Backend (API Python)

Buka terminal pertama Anda di folder proyek.

```bash
# Masuk ke folder backend
cd backend-api

# Buat dan aktifkan virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1

# Install semua library yang dibutuhkan
pip install -r requirements.txt

# Jalankan server API
uvicorn main:app --reload
```

✨ Backend Anda sekarang berjalan di `http://localhost:8000`. Biarkan terminal ini tetap terbuka.

### 3. Setup Frontend (Next.js)

Buka **terminal baru** di folder proyek.

```bash
# Masuk ke folder frontend
cd frontend-web

# Install semua package yang dibutuhkan
npm install

# Jalankan server development
npm run dev
```

✨ Frontend Anda sekarang berjalan di `http://localhost:3000`. Buka alamat ini di browser Anda.

## 📝 Cara Menggunakan

1.  Buka `http://localhost:3000` di browser Anda.
2.  Klik tombol **"Mulai Mengedit Sekarang"** atau navigasi ke halaman **"Remove BG"**.
3.  Pilih gambar yang ingin Anda edit.
4.  Klik tombol **"Hapus Background"** dan tunggu proses selesai.
5.  Hasil akan muncul dan Anda bisa mengunduhnya.
6.  Kunjungi halaman **"Gallery"** untuk melihat riwayat gambar yang sudah Anda edit.
