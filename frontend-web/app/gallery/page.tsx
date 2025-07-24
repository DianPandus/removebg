// app/gallery/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedImages = JSON.parse(
      localStorage.getItem("bgRemovedGallery") || "[]"
    );
    setGalleryImages(storedImages);
    setIsLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Galeri Hasil</h1>

        {isLoading && (
          <p className="text-center text-gray-400">Memuat galeri...</p>
        )}

        {!isLoading && galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((imgSrc, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg bg-gray-900 border border-gray-700 shadow-lg transition-transform transform hover:-translate-y-1"
              >
                {/* --- PERUBAHAN DIMULAI DI SINI --- */}

                {/* 1. Wadah dengan Aspek Rasio Tetap (1:1) */}
                <div className="aspect-square w-full">
                  <img
                    src={imgSrc}
                    alt={`Hasil edit ${index + 1}`}
                    // 2. Gambar mengisi wadah & dipotong agar pas (object-cover)
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* 3. Tombol download yang muncul saat hover */}
                <div className="p-2">
                  <a
                    href={imgSrc}
                    download={`gallery-image-${index + 1}.png`}
                    className="block text-center w-full bg-violet-600 text-white text-sm font-bold py-2 px-2 rounded-md hover:bg-violet-700 "
                  >
                    Download
                  </a>
                </div>

                {/* --- PERUBAHAN SELESAI --- */}
              </div>
            ))}
          </div>
        ) : (
          !isLoading && (
            <p className="text-center text-gray-400 mt-16">
              Galeri Anda masih kosong.
            </p>
          )
        )}
      </div>
    </div>
  );
}
