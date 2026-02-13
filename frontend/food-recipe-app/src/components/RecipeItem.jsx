
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from "../assets/food.jpg";
import {BsStopwatchFill} from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";

export default function RecipeItem() {

const allRecipes = useLoaderData()

console.log(allRecipes);

  return (

<div className="card-container">
  {allRecipes?.map((item) => (
    <div key={item._id} className="card">
      <img src={foodImg} alt={item.title} width="120px" height="100px" />
      <div className="card-body">
        <div className="title">{item.title}</div>
        <div className="icons">
          <div className="timer">
            <BsStopwatchFill />30mins</div>
          <FaHeart/>
        </div>
      </div>
    </div>
  ))}
</div>


  )
}