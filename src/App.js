 
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
  

 
    <hr className="footer"/>
  <div className="creator">
   <h5 className="made">Made by Julia Rakityanska, 2022</h5>
 </div>
 <div>
 <a href="https://www.edamam.com/" target="_blank"> <h5 className='edamam'> Powered by Edamam</h5></a>
 
 </div>
 <div className="social"> 
    <a href="https://ra411.glitch.me/" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"></path>
    </svg>
  </a> 

    <a href="tel:+14373457135" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" className="bi bi-telephone-fill m-2" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
      </svg>
  </a>
   
    <a href="mailto:juliarakitianska@gmail.com" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" className="bi bi-envelope-fill m-2" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
      </svg>
        
  </a>
    </div>
    </div>
  
    
  
  );
 

 
 

}

export default App;
