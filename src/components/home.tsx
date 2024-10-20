import Sidebar from './sidebar'
import Search from './search'
import 'aos/dist/aos.css'
import './css/content.css'
import Tab from './tab'
import Artists from './artists'
import SongList from './songlist';

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative">
        <Search />
        <div className="main absolute rounded-[10px] left-[20px] shadow-md ">
          <Tab />
          <Artists />
          <SongList maxHeight="280px" /> 
        </div>
      </main>
    </div>
  );
}

export default Home;
