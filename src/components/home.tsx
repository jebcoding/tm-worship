import { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div data-aos="fade-right" className="container">
      <h1 className="text-center text-4xl">Let the Worship Begin!</h1>
    </div>
  );
}

export default Home;
