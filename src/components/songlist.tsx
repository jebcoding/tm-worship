const songs = [
    { title: 'Good Good Father', artist: 'Chris Tomlin', duration: '2:30' },
    { title: 'Good Good Father', artist: 'Chris Tomlin', duration: '2:30' },
    
];
  
  export default function SongList() {
    return (
      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-3 text-black px-3">Worship Songs</h2>
        <div className="space-y-3">
          {songs.map((song, index) => (
            <div key={index} className="flex items-center justify-between px-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-black">{song.title}</p>
                  <p className="text-sm text-black">{song.artist}</p>
                </div>
              </div>
              <p className="text-gray-500 mr-20">{song.duration}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  