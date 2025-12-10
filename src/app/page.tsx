import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen"> 
      
      <Navbar /> 
      <HeroSlider /> 
      <div className="h-screen bg-gray-500 flex items-center justify-center">
        <h2 className="text-3xl text-white">Kaydırma Alanı (Test)</h2>
      </div>
      <div className="h-screen bg-gray-600 flex items-center justify-center">
        <h2 className="text-3xl text-white">Daha Fazla İçerik</h2>
      </div>
      <Footer />
      
    </main>
  );
}