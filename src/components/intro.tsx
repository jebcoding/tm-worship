import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';


function Intro() {
  const navigate = useNavigate();
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => setShowSecondScreen(true), 2000);
    const nextPage = setTimeout(() => navigate('/home'), 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(nextPage);
    };
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
        <div data-aos="flip-up" className="container">
        <div data-aos="fade-right" className="container">
          <h1 className="text-center text-4xl">Let the Worship Begin!</h1>
        </div>
        </div>
      )}
    </div>
  );
}

export default Intro;
