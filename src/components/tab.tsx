import { useState } from "react"
import './css/content.css'


function Tab() {
    
const [activeTab, setTab] = useState('tplaylist');
  return (
    <div className='tabs flex justify-around w-full bg-[#434141] rounded-t-[20px] '>
        <button 
            onClick={() => setTab('tplaylist')}
                className={`but px-4 text-[2vh] rounded-lg ${activeTab === 'tplaylist' ? 'text-blue-200' : ''}`}
        >
            Timothy Class Playlist
        </button>
        <hr className="custom-hr" />

        <button 
            onClick={() => setTab('worship')}
                className={`but px-4  text-[2vh] rounded-lg ${activeTab === 'worship' ? 'text-blue-200' : ''}`}
        >
            Worship Songs
        </button>
    
    </div>
  )
}

export default Tab