import './css/sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Search() {
  return (
    <div className="flex w-full max-w-lg items-center bg-[#D9D9D9] rounded-[20px] shadow-md h-10 relative top-[2vh] left-[20px] pl-[20px]  ">
 <i className="bi bi-search" style={{ color: 'black' }}></i>

      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-black placeholder-black-300 focus:outline-none flex-grow h-full pl-[20px] "
      />
    </div>
  );
}

export default Search;
