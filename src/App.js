
import './App.css';
import { useEffect, useState } from "react";
import edamam from './badge.png'
import MyOptionsComponent from './MyOptions';

function App() {
  const MY_ID = "c7adf8c0";
  const MY_KEY = "b1d50e832a66cd1a64694436a988e652";

  const [mySearch, setMySearch] = useState('');
  const [myOptions, setMyOptions] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('mango');

  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyOptions(data.hits);
    // console.log(data.hits);
  }
  fetchData();
  }, [wordSubmitted]);

  const myOptionSearch = (e) => {
    setMySearch(e.target.value);
    // console.log(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className='App'>
      <div className='box'>
        <h1>Find your healthy food</h1>
      </div>
      
      <div className='box'>       
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search . . .' onChange={myOptionSearch} value={mySearch}>
          </input>
        </form>        
      </div>
      
    {myOptions.map((element, index) => (
      <MyOptionsComponent key={index}
      label={element.recipe.label}
      cuisineType={element.recipe.cuisineType}
      CAquantity={element.recipe.totalNutrients.CA.quantity}
      CHOLEquantity={element.recipe.totalNutrients.CHOLE.quantity}
      FATquantity={element.recipe.totalNutrients.FAT.quantity}
      NAquantity={element.recipe.totalNutrients.NA.quantity}
      SUGARquantity={element.recipe.totalNutrients.SUGAR.quantity}
      VITCquantity={element.recipe.totalNutrients.VITC.quantity}
      VITDquantity={element.recipe.totalNutrients.VITD.quantity}
      ZNquantity={element.recipe.totalNutrients.ZN.quantity}      
      image={element.recipe.image}
      ingredientLines={element.recipe.ingredientLines}
      calories={element.recipe.calories}  />
    ))}

      <div>
          <a  href='https://www.edamam.com/' target="_blank" rel="noreferrer">
          <img className='edamam' src={ edamam } alt="logo" />          
        </a>
      </div>

    </div>
  );
}

export default App;
