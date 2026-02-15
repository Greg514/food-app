
import React from "react";
import "./App.css";
import Homes from "./Pages/Homes";
import AddFoodRecipe from "./Pages/AddFoodRecipe";
import MainNavigation from "./components/MainNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import EditFoodRecipe from "./Pages/EditFoodRecipe";


const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/recipe`);
  
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
       { path: "edit-recipe", element: <EditFoodRecipe /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
