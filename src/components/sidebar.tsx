import { Link } from 'react-router-dom';
import './css/content.css';

const Sidebar = () => {
  return (
    <nav className="navi h-screen text-white relative ">
     <a 
        href="https://www.facebook.com/TimothyClassPH?mibextid=ZbWKwL" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src="/tm logo.png"
          alt="TM Logo"
          className="cursor-pointer"
        />
      </a>
      <ul className="space-y-9 relative top-[10vh]">
        <li>
          <Link to="/home" className="hover:text-blue-400">Home</Link>
        </li>
        <li>
        <Link to="/about" className="hover:text-blue-400 transition-colors">
            <span className="block leading-tight">Worship Songs</span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-400">Artists</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
