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
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D85B0B" fillOpacity="1" d="M0,32L40,48C80,64,160,96,240,122.7C320,149,400,171,480,154.7C560,139,640,85,720,64C800,43,880,53,960,85.3C1040,117,1120,171,1200,197.3C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

    </div>

    <div className="recipe">
        <RecipeItem/>
    </div>
    </>
  )
}
