// SongList.js

import React from 'react';
import './css/content.css';

interface SongListProps {
  maxHeight?: string; // Allow maxHeight to be a string
}

const songs = [
  { title: 'Good Good Father', artist: 'Chris Tomlin', duration: '2:30', img: 'path/to/image1.jpg' },
  { title: 'How Great is Our God', artist: 'Chris Tomlin', duration: '3:20', img: 'path/to/image2.jpg' },
  { title: 'Way Maker', artist: 'Sinach', duration: '4:05', img: 'path/to/image3.jpg' },
  { title: 'Oceans', artist: 'Hillsong United', duration: '3:55', img: 'path/to/image4.jpg' },
  { title: '10,000 Reasons', artist: 'Matt Redman', duration: '4:40', img: 'path/to/image5.jpg' },
  { title: 'Reckless Love', artist: 'Cory Asbury', duration: '5:15', img: 'path/to/image6.jpg' },
  { title: 'Amazing Grace', artist: 'Chris Tomlin', duration: '3:30', img: 'path/to/image7.jpg' },
  { title: 'What A Beautiful Name', artist: 'Hillsong Worship', duration: '4:00', img: 'path/to/image8.jpg' },
];

const SongList: React.FC<SongListProps> = ({ maxHeight }) => {
  return (
    <div className="song-list-container">
      <h2 className="song-list-title">Worship Songs</h2>
      <div className={`song-list ${maxHeight ? 'max-height' : ''}`} style={{ maxHeight: maxHeight, overflowY: 'auto' }}>
        {songs.map((song) => (
          <div key={song.title} className="song-item">
            <div className="song-info">
              <div 
                className="song-icon" 
                style={{ backgroundImage: `url(${song.img})` }} 
              ></div>
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
};

export default SongList;
