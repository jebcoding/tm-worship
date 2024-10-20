import './css/content.css';
import { useRef } from 'react';

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
      <h2 className="text-lg font-semibold mb-3 text-black px-3">Artist</h2>

      <div className="artists-wrapper">
        <button className="arrow arrow-left" onClick={scrollLeft}>
          &larr;
        </button>

        <div className="artist-container" ref={containerRef}>
          {[...Array(20)].map((_, index) => (
            <div key={index} className="artist-item"></div>
          ))}
        </div>

        <button className="arrow arrow-right" onClick={scrollRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
}
