import { useEffect } from 'react'
import Sidebar from './sidebar'
import Search from './search'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css'
import Tab from './tab'

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative">
        <Search />
        <div className='main relative rounded-[10px] left-[20px] top-10 shadow-md   '>
          <Tab />
        </div>
        
      </main>
    </div>
  );
}

export default Home;
