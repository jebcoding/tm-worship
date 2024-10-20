import Sidebar from './sidebar';
import Search from './search';
import './css/content.css'
import Tab from './tab';

const artistData = [
  { name: 'Artist 1', img: 'path/to/image1.jpg' },
  { name: 'Artist 2', img: 'path/to/image2.jpg' },
  { name: 'Artist 3', img: 'path/to/image3.jpg' },
  { name: 'Artist 4', img: 'path/to/image4.jpg' },
  { name: 'Artist 5', img: 'path/to/image5.jpg' },
  { name: 'Artist 6', img: 'path/to/image6.jpg' },
  { name: 'Artist 7', img: 'path/to/image7.jpg' },
  { name: 'Artist 8', img: 'path/to/image8.jpg' },
  { name: 'Artist 9', img: 'path/to/image9.jpg' },
  { name: 'Artist 10', img: 'path/to/image10.jpg' },
  { name: 'Artist 11', img: 'path/to/image11.jpg' },
  { name: 'Artist 12', img: 'path/to/image12.jpg' },
  { name: 'Artist 13', img: 'path/to/image13.jpg' },
  { name: 'Artist 14', img: 'path/to/image14.jpg' },
  { name: 'Artist 15', img: 'path/to/image15.jpg' },
  { name: 'Artist 16', img: 'path/to/image16.jpg' },
  { name: 'Artist 17', img: 'path/to/image17.jpg' },
  { name: 'Artist 18', img: 'path/to/image18.jpg' },
  { name: 'Artist 19', img: 'path/to/image19.jpg' },
  { name: 'Artist 20', img: 'path/to/image20.jpg' },
];

function ArtistsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative ">
        <Search />
        <div className="main absolute rounded-[10px] left-[20px] top-[5vh] shadow-md ">
          <Tab />
          <h2 className="text-xl font-semibold text-black px-4 py-4">Artists</h2>
          <div className="overflow-y-auto h-[60vh]"> {/* Set a fixed height and enable vertical scrolling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {artistData.map((artist, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 bg-cover bg-black bg-center rounded-full overflow-hidden"
                    style={{ backgroundImage: `url(${artist.img})` }}
                  ></div>
                  <div className="mt-2 text-center text-black">{artist.name}</div>
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
