import { useEffect } from 'react'
import Sidebar from './sidebar'
import Search from './search'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css'
import Tab from './tab'
import Artists from './artists'
import SongList from './songlist';

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative">
        <Search />
        <div className="main absolute rounded-[10px] left-[20px] top-10 shadow-md ">
          <Tab />
          <Artists />
          <SongList maxHeight="150px" /> {/* Shows fewer songs */}
        </div>
      </main>
    </div>
  );
}

export default Home;
