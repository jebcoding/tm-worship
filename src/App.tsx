import './App.css';

const title = {
    img: '/tm logo.png',

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
   
    </div>
    );
}

export default App;
