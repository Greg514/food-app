const express = require("express");
const router = express.Router();
const {getRecipe,getRecipes,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe")


router.get("/recipe", (getRecipes));
router.get("/recipe/:id",getRecipe);
router.post("/recipe",addRecipe);
router.put("/recipe/:id",editRecipe);
router.delete("/recipe/:id",deleteRecipe);



module.exports = router;
