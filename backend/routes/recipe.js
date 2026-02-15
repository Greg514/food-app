const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {getRecipe,getRecipes,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe")


router.get("/recipe", (getRecipes));
router.get("/recipe/:id",getRecipe);
router.post("/recipe", upload.single("file"), addRecipe);
router.put("/recipe/:id", upload.single("file"), editRecipe);
router.delete("/recipe/:id",deleteRecipe);



module.exports = router;
