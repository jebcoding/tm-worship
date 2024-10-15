import { Link } from 'react-router-dom';
import './css/sidebar.css';

const Sidebar = () => {
  return (
    <nav className="navi h-screen text-white relative ">
      <img
        src="/tm logo.png"
        alt="TM Logo"
      
      />
      <ul className="space-y-9 relative top-[10vh]">
        <li>
          <Link to="/home" className="hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">Worship Songs</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-400">Artists</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
