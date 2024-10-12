import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => navigate('/home'), 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div data-aos="flip-up" className="container">
      <img src="/tm logo.png" alt="TM Logo" id='tmlogo' className="w-[250px] h-[250px] relative bottom-10" />
      <h1 className="text-center" id="worship">WORSHIP</h1>
      <img src="/music icon.png" id='music_icon' alt="Music Icon" className="w-[100px] h-[150px] relative left-[8vh]" />
    </div>
  );
}

export default Intro;
