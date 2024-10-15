import { useEffect } from 'react'
import Sidebar from './sidebar'
import Search from './search'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css'

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="flex">
      <Sidebar/>
   
      <Search />

      <main className="flex items-center justify-center w-full h-screen bg-white">
        <div data-aos="zoom-in">

        </div>
      </main>
    </div>
  );
}

export default Home;
