import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function EditFoodRecipe() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipeData, setRecipeData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const loadData = async (id) => {
    const response = await axios.get(`http://localhost:4000/recipe/${id}`, {
      headers: {
        authorization: "bearer " + localStorage.getItem("token"),
      },
    });

    return response;
  };
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const editingRecipeData = await loadData(id);
      setRecipeData(editingRecipeData.data);
      setIsLoading(false);console.log(recipeData);
    }

    fetchData();
  }, []);

  const onHandleChange = (e) => {
    let val =
      e.target.name === "ingredients"
        ? e.target.value.split(",")
        : e.target.value;
    setRecipeData((pre) => ({ ...pre, [e.target.name]: val }));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("time", recipeData.time);
    formData.append("ingredients", recipeData.ingredients);
    formData.append("instructions", recipeData.instructions);
    const fileInput = e.target.querySelector('input[name="file"]');
    if (fileInput.files[0]) {
      formData.append("file", fileInput.files[0]);
    }

    await axios
      .put(`http://localhost:4000/recipe/${id}`, formData, {
        headers: {
          authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => navigate("/"));
  };

  if(isLoading){
    return <div>Loading....</div>
  }
  return (
    <>
      <div className="container">
        <form
          className="form"
          onSubmit={onHandleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <div className="form-control">
            <label>Title</label>
            <input
              type="text"
              className="input"
              name="title"
              onChange={onHandleChange}
              value={recipeData.title}
            ></input>
          </div>
          <div className="form-control">
            <label>Time</label>
            <input
              type="text"
              className="input"
              name="time"
              onChange={onHandleChange}
                value={recipeData.time}
            ></input>
          </div>
          <div className="form-control">
            <label>Ingredients</label>
            <textarea
              type="text"
              className="input-textarea"
              name="ingredients"
              rows="5"
              onChange={onHandleChange}
                value={recipeData.ingredients}
            ></textarea>
          </div>
          <div className="form-control">
            <label>Instructions</label>
            <textarea
              type="text"
              className="input-textarea"
              name="instructions"
              rows="5"
              onChange={onHandleChange}
                value={recipeData.instructions}
            ></textarea>
          </div>
          <div className="form-control">
            <label>Recipe Image</label>
            <input
              type="file"
              className="input"
              name="file"
            ></input>
          </div>
          <button type="submit">Update Recipe</button>
        </form>
      </div>
    </>
  );
}
