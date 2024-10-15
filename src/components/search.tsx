import './css/content.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Search() {
  return (
    <div className="search flex items-center bg-[#D9D9D9] rounded-[20px] shadow-md h-10 relative pl-[20px] left-[20px] top-[2vh]">
      <i className="bi bi-search" style={{ color: 'black' }}></i>

      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-black placeholder-black-300 focus:outline-none flex-grow h-full pl-[20px]"
      />
    </div>
  );
}

export default Search;
