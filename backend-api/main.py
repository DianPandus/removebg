import uvicorn
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware # Penting untuk menghubungkan ke Next.js
from rembg import remove
from io import BytesIO

app = FastAPI()

# Konfigurasi CORS (Cross-Origin Resource Sharing)
# Ini mengizinkan aplikasi Next.js (yang berjalan di domain berbeda) untuk mengakses API ini.
origins = [
    "http://localhost:3000", # Alamat default Next.js saat development
    # "https://alamat-website-anda.com" # Tambahkan ini saat sudah di-deploy
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/remove-background/")
async def remove_background(file: UploadFile = File(...)):
    # Baca konten file yang diunggah
    input_image_bytes = await file.read()

    # Proses penghapusan background menggunakan rembg
    output_image_bytes = remove(input_image_bytes)

    # Buat file-like object di memori untuk output
    output_io = BytesIO(output_image_bytes)
    output_io.seek(0) # Pindahkan kursor ke awal file

    # Kirim kembali sebagai file gambar
    return StreamingResponse(output_io, media_type="image/png")

# Untuk menjalankan server: uvicorn main:app --reload