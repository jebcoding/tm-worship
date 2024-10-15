import { useEffect } from 'react';
import Sidebar from './sidebar';
import Search from './search';
import Main from './main';
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
      <main className="flex-1 relative">
        <Search />
        {/* If Main needs to be inside the main area */}
        <Main />
      </main>
    </div>
  );
}

export default Home;
