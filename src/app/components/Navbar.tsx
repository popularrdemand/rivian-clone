import Link from 'next/link';

export default function Navbar() {
  return (
    // Navbar'ı ekranın üstüne sabitleyen ve şeffaf bir arka plan veren Tailwind sınıfları
    // z-50 ile her zaman en üstte kalmasını sağlıyoruz
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-transparent text-white">
      
      {/* Sol Logo Bölümü */}
      <Link href="/" className="text-xl font-bold tracking-widest hover:opacity-80 transition duration-300">
        RIVIAN
      </Link>

      {/* Orta Navigasyon Linkleri (Geniş ekranlar için) */}
      {/* Tailwind'in hidden/md:flex sınıflarını geri getirdik (Mobil menüyü gizler) */}
      <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
        <Link href="/r1s" className="hover:text-gray-300 transition duration-300">R1S</Link>
        <Link href="/r1t" className="hover:text-gray-300 transition duration-300">R1T</Link>
        <Link href="/vehicles" className="hover:text-gray-300 transition duration-300">Araçlar</Link>
        <Link href="/adventure-network" className="hover:text-gray-300 transition duration-300">Ağ</Link>
      </div>

      {/* Sağ Menü / Butonlar */}
      <div className="flex items-center space-x-6">
        <Link href="/shop" className="text-sm font-medium hover:text-gray-300 transition duration-300 hidden sm:inline">Mağaza</Link>
        <button className="text-sm border border-white rounded-full px-4 py-1.5 hover:bg-white hover:text-black transition duration-300 font-semibold">
          Giriş Yap
        </button>
      </div>
    </nav>
  );
}