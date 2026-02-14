
import React from "react";
import "./App.css";
import Homes from "./pages/Homes";
import AddFoodRecipe from "./pages/AddFoodRecipe";
import MainNavigation from "./components/MainNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";


const getAllRecipes = async () => {
  try {
    const response = await axios.get("http://localhost:5000/recipe");
  
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return []; 
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        index: true,
        element: <Homes />,
        loader: getAllRecipes,
    
        errorElement: <div style={{ padding: "20px" }}>Failed to load recipes.</div>,
      },
      { path: "add-recipe", element: <AddFoodRecipe /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
