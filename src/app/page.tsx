import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider'; // Yeni Slider bileşenimizi içeri aktarıyoruz

export default function Home() {
  return (
    <main className="min-h-screen"> 
      
      <Navbar /> 
      
      {/* HeroSlider tüm Hero ve Performance bölümlerini yönetir */}
      <HeroSlider /> 
      
    </main>
  );
}