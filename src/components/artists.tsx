import './css/content.css';
import { useRef } from 'react';

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
                style={{ backgroundImage: `url(${artist.img})` }}
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
