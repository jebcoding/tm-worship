import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  return (
    <nav className="navi h-screen text-white p-5 fixed left-[5vh]">
      <img
        src="/tm logo.png"
        alt="TM Logo"
        className="h-[15vh] w-[15vh]"
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
