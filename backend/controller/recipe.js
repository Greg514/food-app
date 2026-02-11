const getRecipes = (req, res) => {
  res.send("Get all recipes");
};

const getRecipe = (req, res) => {
  res.send("Get single recipe");
};

const addRecipe = (req, res) => {
  res.send("Add recipe");
};

const editRecipe = (req, res) => {
  res.send("Edit recipe");
};

const deleteRecipe = (req, res) => {
  res.send("Delete recipe");
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
