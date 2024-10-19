import Sidebar from './sidebar'
import Search from './search'
import './css/content.css'
import Tab from './tab'
import Artists from './artists'


function artists_page() {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1 relative">
      <Search />
      <div className='main absolute rounded-[10px] left-[20px] top-10 shadow-md   '>
        <Tab /><br />
        <Artists /> 

      </div>

    </main>
  </div>
  )
}

export default artists_page