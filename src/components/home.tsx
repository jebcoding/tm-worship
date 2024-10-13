import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div 
      data-aos="fade-up" 
      className="home flex items-center justify-center w-screen h-screen bg-white"
    >
      <h1 className="text-4xl text-black font-bold">HOME</h1>
    </div>
  );
}

export default Home;
