const songs = [
  { title: 'Good Good Father', artist: 'Chris Tomlin', duration: '2:30' },
  { title: 'How Great is Our God', artist: 'Chris Tomlin', duration: '3:20' },
  { title: 'Way Maker', artist: 'Sinach', duration: '4:05' },
  { title: 'Oceans', artist: 'Hillsong United', duration: '3:55' },
  { title: '10,000 Reasons', artist: 'Matt Redman', duration: '4:40' },
  { title: 'Reckless Love', artist: 'Cory Asbury', duration: '5:15' },
  { title: 'Amazing Grace', artist: 'Chris Tomlin', duration: '3:30' },
  { title: 'What A Beautiful Name', artist: 'Hillsong Worship', duration: '4:00' },
];

export default function SongList({ maxHeight }) {
  return (
    <div className="song-list-container">
      <h2 className="song-list-title">Worship Songs</h2>

      {/* Scrollable song list container */}
      <div className={`song-list ${maxHeight ? 'max-height' : ''}`}>
        {songs.map((song, index) => (
          <div key={index} className="song-item">
            <div className="song-info">
              <div className="song-icon"></div>
              <div className="song-details">
                <p className="song-title">{song.title}</p>
                <p className="song-artist">{song.artist}</p>
              </div>
            </div>
            <p className="song-duration">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
