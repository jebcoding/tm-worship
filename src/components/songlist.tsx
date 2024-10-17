const songs = [
    { title: 'Good Good Father', artist: 'Chris Tomlin', duration: '2:30' },
    { title: 'Good Good Father', artist: 'Chris Tomlin', duration: '2:30' },
  ];
  
  export default function SongList() {
    return (
      <div className="mt-5 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-black">
          Worship Songs
        </h2>
        <div className="space-y-3">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-3 sm:p-4"
            >
              <div className="flex items-center w-full space-x-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-medium text-black truncate">
                    {song.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">{song.artist}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 ml-3 sm: relative top-3 right-6">
                {song.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  