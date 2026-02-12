import React from 'react'
import food from "../assets/food.jpg"
import RecipeItem from "../components/RecipeItem"; // adjust path if needed



export default function Homes() {
  return (
    <>
   
    <section className="home">
        <div className="left">
            <h1 >Food Recipe</h1>
            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero quas illo, quos suscipit totam tenetur? Laudantium nobis quaerat assumenda id, veniam dolor ut voluptas facilis odio? Alias, ut et?</h5>
            <button>Share your Recipe</button>
        </div>
        <div className="right">
            <img src={food}width="600px" height="600px" alt="" />
        </div>
    </section>
    <div className="bg">
     

    </div>

    <div className="recipe">
        <RecipeItem/>
    </div>
    </>
  )
}
