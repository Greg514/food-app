import React from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import food from "../assets/food.jpg";
import RecipeItem from "../components/RecipeItem";

export default function Homes() {
  const navigate = useNavigate();
  const recipes = useLoaderData(); // data from loader

  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>Discover delicious recipes or share your own!</h5>

          <button onClick={() => navigate("add-recipe")}>
            Share your Recipe
          </button>
        </div>

        <div className="right">
          <img className="pic" src={food} width="600" height="600" alt="food" />
        </div>
      </section>

      <div className="recipe">
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeItem key={recipe._id} recipe={recipe} />
          ))
        )}
      </div>
    </>
  );
}
