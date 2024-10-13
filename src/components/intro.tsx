import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function Intro() {
  const navigate = useNavigate();
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  useEffect(() => {
    // Initialize AOS once.
    AOS.init({ duration: 2000 });
    AOS.refresh(); 

    // Set a single timer to manage both the second screen and navigation.
    const timer = setTimeout(() => {
      setShowSecondScreen(true); // Show the second screen after 3s.

      // After 2s more (total 5s), navigate to '/home'.
      setTimeout(() => navigate('/home'), 5000);
    }, 4000);

    // Cleanup on unmount to prevent memory leaks.
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {!showSecondScreen ? (
        <div data-aos="flip-up" className="container">
          <img
            src="/tm logo.png"
            alt="TM Logo"
            id="tmlogo"
            className="w-[250px] h-[250px] relative bottom-10"
          />
          <h1 className="text-center" id="worship">WORSHIP</h1>
          <img
            src="/music icon.png"
            id="music_icon"
            alt="Music Icon"
            className="w-[100px] h-[150px] relative left-[8vh]"
          />
        </div>
      ) : (
    
          <h1 data-aos="fade-right" className="container text-center text-4xl">Let the Worship Begin!</h1>

      )}
    </div>
  );
}

export default Intro;
