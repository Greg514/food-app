
import React from 'react'
import foodImg from "../assets/food.jpg";
import {BsStopwatchFill} from "react-icons/bs";
import {FaHeart} from "react-icons/fa"
import {TiDelete} from "react-icons/ti"
import axios from 'axios';
import {FaEdit} from "react-icons/fa"
import { NavLink } from 'react-router-dom';


const removeItem = async (id)=>{
  
try{
         await axios.delete(
        `${import.meta.env.VITE_API_URL}/recipe/${id}`
      
      );
    
    
    }catch (error) {
      console.log(error.response?.data?.error || "Something went wrong");
    }

}



export default function RecipeItem({item}) {
 



  return (

<div className="card-container">
  
    <div key={item._id} className="card">
      <img src={item.file ? `data:image/jpeg;base64,${(() => { const bytes = new Uint8Array(item.file.data); let binary = ""; for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]); return btoa(binary); })()}` : foodImg} alt={item.title} width="120px" height="100px" />
      <div className="card-body">
        <div className="title">{item.title}</div>
        <div className="icons">
          <div className="timer">
            <BsStopwatchFill />{item.time}</div>
          <FaHeart/>
          <TiDelete onClick={()=>removeItem(item._id)}/>
            
              <NavLink
              to={ `/edit-recipe?id=${item._id}`}
             ><FaEdit/></NavLink>
            
        </div>
      </div>
    </div>
 
</div>


  )
}