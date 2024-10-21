import Sidebar from './sidebar';
import Search from './search';
import './css/content.css'
import Tab from './tab';
import artistData from '../source/tm-music.json'

function ArtistsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative ">
        <Search />
        <div className="main absolute rounded-[10px] left-[20px] shadow-md ">
          <Tab />
          <h2 className="text-xl font-semibold text-black px-4 py-4">Artists</h2>
          <div className="overflow-y-auto h-[60vh]"> {/* Set a fixed height and enable vertical scrolling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {artistData.map((artist, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 bg-cover bg-black bg-center rounded-full overflow-hidden"
                    style={{ backgroundImage: `url(${artist.profile})` }}
                  ></div>
                  <div className="mt-2 text-center text-[2vh] text-black">{artist.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ArtistsPage;
