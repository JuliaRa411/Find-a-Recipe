 
import './App.css';
import {useEffect, useState} from "react"
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
 
 
 

function App() {

const MY_ID ="33ecfc0e";
const MY_KEY ="6eab3c1c7795adb4cd71641ef8214e8f";

const [mySearch, setMySearch] = useState("")
const [myRecipe, setMyRecipe] = useState([])
const [wordSubmited, setWordSubmited] = useState("salmon")
 useEffect(async() =>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmited}&app_id=33ecfc0e&app_key=6eab3c1c7795adb4cd71641ef8214e8f`) ;
  const data = await response.json();
  console.log(data.hits)
  setMyRecipe(data.hits)
 
 },[wordSubmited])


const myRecipeSearch = (e) =>{
console.log(e.target.value)
setMySearch(e.target.value)
}
 const finalSearch =(e) =>{
   e.preventDefault();
   setWordSubmited(mySearch)
 }

  return (
  <div className="App" >
  <div className="container">
  <video autoPlay muted loop>
  <source src={video} type="video/mp4" />
  </video>

  <h1>Find a Recipe</h1>
   </div>
 
  <div className="container">
  <form onSubmit={finalSearch}>
  <input className='search' placeholder='Search' onChange={myRecipeSearch} value ={mySearch}> 
  </input>
</form>
</div>

<div className="container">
<button onClick={finalSearch}> <img src="https://img.icons8.com/color/48/000000/fry.png" />  
</button>
 </div>

<div className='container'> 
 
{myRecipe.map( (element,index) => (
 <MyRecipesComponent  key={index}
 label ={element.recipe.label} 
 image ={element.recipe.image}
  calories ={element.recipe.calories}
  cuisineType ={element.recipe.cuisineType}
  ingredients ={element.recipe.ingredientLines}
  caloriesAll = {element.recipe.calories}
  mealType ={element.recipe.mealType}
  fat ={element.recipe.digest[0].total}
  protein ={element.recipe.digest[2].total}
  Carbs ={element.recipe.digest[1].total}
  vitaminC = {element.recipe.digest[12].total}
  vitaminA = {element.recipe.digest[11].total}
  VitaminB6 = {element.recipe.digest[16].total} 
  VitaminK = {element.recipe.digest[23].total}
  totalWeight ={element.recipe.totalWeight}
  /> 
  ))}
  </div>
  
  </div>
  
  );
  

}

export default App;
