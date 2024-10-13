// Home.js
import { useEffect } from 'react';
import Sidebar from './sidebar'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex items-center justify-center w-full h-screen bg-white"> {/* Adjust margin-left to sidebar width */}
        <div data-aos="zoom-in">
        </div>
      </main>
    </div>
  );
}

export default Home;
