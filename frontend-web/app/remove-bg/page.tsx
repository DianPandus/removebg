// app/remove-bg/page.tsx
"use client"; // Pastikan 'use client' ada di paling atas

import { useState } from "react";

// Kode ini sebagian besar sama, hanya dengan penyesuaian style
export default function RemoveBgPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResultImageUrl(null);
      setError(null);
    }
  };

  // Di dalam file app/remove-bg/page.tsx

  const saveToGallery = (imageUrl: string) => {
    try {
      fetch(imageUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            let gallery = JSON.parse(
              localStorage.getItem("bgRemovedGallery") || "[]"
            );

            // Tambahkan gambar baru ke awal array
            gallery.unshift(base64data);

            // Batasi galeri hanya untuk 10 gambar
            if (gallery.length > 10) {
              gallery = gallery.slice(0, 10);
            }

            localStorage.setItem("bgRemovedGallery", JSON.stringify(gallery));
          };
          reader.readAsDataURL(blob);
        });
    } catch (e) {
      console.error("Gagal menyimpan ke galeri:", e);
    }
  };
  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    setError(null);
    setResultImageUrl(null);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/remove-background/", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Gagal menghapus background.");

      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      setResultImageUrl(imageUrl);
      saveToGallery(imageUrl); // Simpan ke galeri
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Upload & Remove</h1>
        <p className="text-gray-400 mb-8">
          Pilih gambar dari komputer Anda untuk memulai.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
            className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-700"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isLoading}
            className="mt-4 w-full bg-violet-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-violet-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Memproses..." : "Hapus Background"}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h2 className="font-semibold mb-2 text-gray-300">Gambar Asli</h2>
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="rounded-lg shadow-md mx-auto border-2 border-gray-700"
              />
            )}
          </div>
          <div className="text-center">
            <h2 className="font-semibold mb-2 text-gray-300">Hasil</h2>
            {isLoading && (
              <div className="animate-pulse bg-gray-800 h-64 rounded-lg"></div>
            )}
            {resultImageUrl && (
              <div className="flex flex-col items-center">
                <img
                  src={resultImageUrl}
                  alt="Result"
                  className="rounded-lg shadow-md mx-auto border-2 border-transparent"
                />
                <a
                  href={resultImageUrl}
                  download={`background-removed-${Date.now()}.png`}
                  className="inline-block mt-4 bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700"
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
