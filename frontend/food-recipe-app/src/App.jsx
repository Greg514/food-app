import React from "react";
import "./App.css";
import Homes from "./Pages/Homes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import axios from "axios";




const getAllRecipes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/recipe");
    return response.data; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return []; 
  }
};

const router = createBrowserRouter([ 
  
    {path:"/",element:<MainNavigation/>,children:[
      {path:"/",element: <Homes />,loader:getAllRecipes
  }
    ]}
    
]);

export default function App() {
  return (
    <>
    <NavBar/><br />
      <RouterProvider router={router} />
      <Footer/>
    
     </>
  );
}