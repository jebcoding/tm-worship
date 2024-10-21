import './css/content.css';
import { useRef } from 'react';
import artistData from '../source/tm-music.json';

export default function Artists() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-4">
      <h2 className="text-lg font-semibold mb-3 text-black px-3">Artists</h2>

      <div className="artists-wrapper">
        <button className="arrow arrow-left" onClick={scrollLeft}>
          &larr;
        </button>

        <div className="artist-container" ref={containerRef}>
          {artistData.map((artist, index) => (
            <div key={index} className="artist-item">
              <div 
                className="artist-circle" 
                style={{ backgroundImage: `url(${artist.profile})` }}
              ></div>
              <span className="title-name">{artist.name}</span>
            </div>
          ))}
        </div>

        <button className="arrow arrow-right" onClick={scrollRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
}
