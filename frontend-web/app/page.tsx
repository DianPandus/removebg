// app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hapus Latar Belakang Gambar
      </h1>
      <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text mb-8">
        Cepat & Gratis.
      </h2>
      <p className="max-w-2xl mx-auto text-gray-400 mb-12">
        Didukung oleh teknologi AI, HapusBG memungkinkan Anda menghapus
        background dari gambar apapun hanya dengan satu klik.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/remove-bg"
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
        >
          Pilih Foto
        </Link>
        <Link
          href="/gallery"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
        >
          Lihat Galeri
        </Link>
      </div>
    </div>
  );
}
