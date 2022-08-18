
import './App.css';
import { useEffect, useState } from "react";
import video from './food2.mp4';
import image from './play.png';
import image2 from './reset.png';
import MyOptionsComponent from './MyOptions';

function App() {
  const MY_ID = "c7adf8c0";
  const MY_KEY = "b1d50e832a66cd1a64694436a988e652";

  const [mySearch, setMySearch] = useState('');
  const [myOptions, setMyOptions] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('mint');

  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyOptions(data.hits);
    console.log(data.hits);
  }
  fetchData();
  }, [wordSubmitted]);

  const myOptionSearch = (e) => {
    setMySearch(e.target.value);
    console.log(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className='App'>
      <div className='box'>
        <video autoPlay muted loop >
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Diet</h1>
      </div>
      <div className='box one'>
        <button className='main'>
          <img src={image2} className='icons' alt="reset"/>
        </button>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search . . .' onChange={myOptionSearch} value={mySearch}>
          </input>
        </form>
        <button className='main'>
          <img src={image} className='icons' alt="start"/>
        </button>
        
      </div>

      
    {myOptions.map((element, index) => (
      <MyOptionsComponent key={index}
      label={element.recipe.label}
      cuisineType={element.recipe.cuisineType}
      CAquantity={element.recipe.totalNutrients.CA.quantity}
      CHOLEquantity={element.recipe.totalNutrients.CHOLE.quantity}
      totalNutrients={element.recipe.totalNutrients}
      image={element.recipe.image}
      ingredientLines={element.recipe.ingredientLines}
      calories={element.recipe.calories}  />
    ))}







    </div>
  );
}

export default App;
