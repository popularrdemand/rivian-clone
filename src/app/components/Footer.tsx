export default function Footer() {
  return (
    // Footer'ı koyu gri yapıyoruz ve içindeki yazıları beyaz
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ana Navigasyon Sütunları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Sütun 1: Araçlar */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Araçlar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/r1s" className="hover:text-white transition duration-300">R1S</a></li>
              <li><a href="/r1t" className="hover:text-white transition duration-300">R1T</a></li>
              <li><a href="/r2" className="hover:text-white transition duration-300">R2 (Gelecek)</a></li>
            </ul>
          </div>
          
          {/* Sütun 2: Şirket */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Şirket</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/hakkimizda" className="hover:text-white transition duration-300">Hakkımızda</a></li>
              <li><a href="/kariyer" className="hover:text-white transition duration-300">Kariyer</a></li>
              <li><a href="/yatirimci" className="hover:text-white transition duration-300">Yatırımcı İlişkileri</a></li>
            </ul>
          </div>
          
          {/* Sütun 3: Destek */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destek</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/yardim" className="hover:text-white transition duration-300">Yardım Merkezi</a></li>
              <li><a href="/servis" className="hover:text-white transition duration-300">Servis</a></li>
              <li><a href="/garanti" className="hover:text-white transition duration-300">Garanti</a></li>
            </ul>
          </div>
          
          {/* Sütun 4: Bize Ulaşın */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bize Ulaşın</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="mailto:info@rivian.com" className="hover:text-white transition duration-300">info@rivian.com</a></li>
              <li>Sosyal Medya Linkleri (Şimdilik yer tutucu)</li>
            </ul>
          </div>
        </div>
        
        {/* Alt Çizgi (Telif Hakkı ve Hukuk) */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} RIVIAN CLONE. Tüm Hakları Saklıdır.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="/gizlilik" className="hover:text-white transition duration-300">Gizlilik</a>
            <a href="/kosullar" className="hover:text-white transition duration-300">Kullanım Koşulları</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}