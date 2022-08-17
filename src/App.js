
import './App.css';
import { useEffect } from "react";

function App() {
  const MY_ID = "c7adf8c0";
  const MY_KEY = "b1d50e832a66cd1a64694436a988e652";

  useEffect(async () => {
    // const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=cooking`);
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data);
  })


  return (
    <div>
      <h1>Diet</h1>
      
    </div>
  );
}

export default App;
