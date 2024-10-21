import Sidebar from './sidebar';
import Search from './search';
import './css/content.css';
import Tab from './tab';
import SongList from './songlist';

function WorshipPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative">
        <Search />
        <div className="main absolute rounded-[10px] left-[20px] shadow-md pb-[50vh]">
          <Tab /><br /><br />
          <SongList maxHeight="450px" /> {/* Shows more songs */}
        </div>
      </main>
    </div>
  );
}

export default WorshipPage;
