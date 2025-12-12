import { generateMetadata } from "./[locale]/metadata";
import { Inter } from "next/font/google";
import { ConstructionIcon, Home } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";
import NavbarForError from "./components/client/NavbarForError";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export { generateMetadata };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
      <NavbarForError />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center mt-32">
        <div className="bg-orange-100 p-6 rounded-full mb-6">
          <ConstructionIcon className="w-16 h-16 text-orange-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-gray-600 max-w-md mb-8">
          Maaf, halaman yang Anda cari tidak tersedia atau sedang dalam proses pembaruan. Silakan kembali ke beranda.
        </p>

        <Link
          href={`/id`}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <Home className="w-5 h-5" />
          Kembali ke Beranda
        </Link>
      </main>

      <Footer />
    </div>
  );
}
