// app/components/Navbar.tsx
import Link from "next/link";
import { Sparkles } from "lucide-react"; // ikon keren, install dulu: npm install lucide-react

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between p-4 text-white">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="text-violet-500" />
          HapusBG
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/remove-bg"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Remove BG
          </Link>
          <Link
            href="/gallery"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}
