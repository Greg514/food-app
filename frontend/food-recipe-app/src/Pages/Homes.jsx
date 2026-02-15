import React from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import food from "../assets/food.jpg";
import RecipeItem from "../components/RecipeItem";
import { useState } from "react";

export default function Homes() {
  const navigate = useNavigate();
  const recipes = useLoaderData(); 
  const [recipeSearch,setRecipeSearch] =useState("");
console.log(recipes)
const recipesFound = recipes.filter((r)=>{
  return r.title.includes(recipeSearch)});
  
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>Discover delicious recipes or share your own!</h5>

          <button onClick={() => navigate("add-recipe")}>
            Share your Recipe
          </button><br />
        <input onChange={(e)=>{
          const value = e.target.value ;
          
          setRecipeSearch(value)
        }} type="text"  name="searchRecipe"/>
        </div>

        <div className="right">
          <img className="pic" src={food} width="600" height="600" alt="food" />
        </div>
      </section>

      <div className="recipe">
        {recipesFound.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipesFound.map((recipe) => (
            <RecipeItem key={recipe._id} item={recipe} />
          ))
          
        )}
      </div>
    </>
  );
}
