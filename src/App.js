
import './App.css';
import { useEffect } from "react";
import video from './food2.mp4';
import image from './play.png';
import image2 from './reset.png';

function App() {
  const MY_ID = "c7adf8c0";
  const MY_KEY = "b1d50e832a66cd1a64694436a988e652";

  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data);
  }
  fetchData();
  }, []);


  return (
    <div className='App'>
      <div className='box'>
        <video autoPlay muted loop >
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Diet</h1>
      </div>
      <div className='box one'>
        <button>
          <img src={image2} className='icons' alt="reset"/>
        </button>
        <form>
          <input></input>
        </form>
        <button>
          <img src={image} className='icons' alt="start"/>
        </button>
        
      </div>

      








    </div>
  );
}

export default App;
