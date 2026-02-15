const Recipes = require("../models/recipe");

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json(recipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body;

    if (!title || !ingredients || !instructions || !time) {
      return res.status(400).json({
        message: "Required fields can't be empty",
      });
    }

    const newRecipe = await Recipes.create({
      title,
      ingredients: typeof ingredients === "string" ? ingredients.split(",") : ingredients,
      instructions,
      time,
      file: req.file ? req.file.buffer : null,
    });

    return res.status(201).json(newRecipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body;

    const updateData = { title, ingredients, instructions, time };
    if (req.file) {
      updateData.file = req.file.buffer;
    }

    const updatedRecipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json(updatedRecipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
