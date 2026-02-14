const express = require("express");
const router = express.Router();

const {
  getRecipe,
  getRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  upload,
} = require("../controller/recipe");

// GET all recipes
router.get("/", getRecipes);

// GET single recipe
router.get("/:id", getRecipe);

// CREATE recipe (with image upload)
router.post("/", upload.single("file"), addRecipe);

// UPDATE recipe
router.put("/:id", editRecipe);

// DELETE recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
