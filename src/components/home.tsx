import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div data-aos="fade-right" className="container">
      <h1 className="text-4xl ">HOME</h1>
    </div>
  );
}

export default Home;
