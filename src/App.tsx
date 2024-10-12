import './App.css';

const title = {
    img: '/tm logo.png',
    img2: '/music icon.png'

};

function App() {
  return (
    <div className='container'>
       <img 
        src={title.img}  
        className='w-[250px] h-[250] relative bottom-10'
        id='tmlogo'
       />  
      <h1 className='' id='worship'>WORSHIP</h1>
      <img
        src= {title.img2}
        className='w-[100px] h-[150px] relative left-[8vh]'
        id='music_icon'
      />
    </div>
    );
}

export default App;
