import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="home flex items-center justify-center w-screen h-screen bg-white">
    <div data-aos="zoom-in" >
      <h1 className="text-4xl text-black font-bold">HOME</h1>
    </div>
    </div>
  );
}

export default Home;
