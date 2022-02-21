import { useState } from "react";

function MyRecipesComponent({label, image, calories,cuisineType,ingredients,mealType, fat, protein, Carbs,vitaminC,vitaminA,VitaminB6,VitaminK,totalWeight}){
   
    const [more, setMore] = useState(false);
     const handleClick = () =>{
        setMore(!more);
    }
return( <div>  
    
        <h2> {label}</h2>
        <hr/>
       <img src={image} className ="picture"/>

       <div className="container">  
       <h3> Calories <span> {calories.toFixed ()}  </span></h3>
       <h3 > Type of cuisine is <span> {cuisineType}</span> </h3>
       <h3  > Meal type  -  <span>  {mealType}</span> </h3>
       
 


       <button onClick={()=>handleClick()} className="btn">{more?  "Less details" : "More details"} </button>
          {!more? ("")   :  (

           
         <div className="style">   
       <p>Ingredients:</p>
      
       <ul className="list">
       {ingredients.map((ingredient, index) => (
           <li  key={index}> <img src="https://img.icons8.com/color/48/000000/checked--v4.png" className="icon"/>{ingredient}</li>
       ))} 
       </ul>
       <h3> Total weight : <span> {totalWeight.toFixed()}</span>  grams</h3>
     
       <p> Nutrients:</p>
       <ul> 
       <li>Fat  - {fat.toFixed()} grams</li>
       <li> Protein - {protein.toFixed()} grams</li>
       <li> Carbs - {Carbs.toFixed()} grams</li>
       </ul>
        
        
     <p>Vitamins:</p>
     <ul>
         <li> Vitamin C - { vitaminC.toFixed() }mg</li>
         <li> Vitamin A - {vitaminA.toFixed()}mg</li>
         <li>Vitamin B6 - {VitaminB6.toFixed()} mg</li>
         <li>Vitamin K - {VitaminK.toFixed()} mg</li>
     </ul>
     </div>
    )}
     </div>
           </div>
           
)

}

export default MyRecipesComponent;