function MyRecipesComponent({label, image, calories,cuisineType,ingredients}){

return( <div>  
    
        <h2> {label}</h2>
       <img src={image} className ="picture"/>
       <p> {calories.toFixed ()} calories</p>
       <ul className="list">
       {ingredients.map((ingredient, index) => (
           <li  key={index}> <img src="https://img.icons8.com/color/48/000000/checked--v4.png" className="icon"/>{ingredient}</li>
       ))} 
       </ul>
       <h4> Type of cuisine is {cuisineType}   </h4>
       <hr/>
           </div>
           
)

}

export default MyRecipesComponent;