
import Sidebar from './sidebar'
import Search from './search'
import 'aos/dist/aos.css'
import '../App.css'
import Tab from './tab'
import SongList from './songlist'


function worship_page() {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1 relative">
      <Search />
      <div className='main relative rounded-[10px] left-[20px] top-10 shadow-md   '>
        <Tab /><br /><br />
        <SongList /> 

      </div>

    </main>
  </div>
  )
}

export default worship_page