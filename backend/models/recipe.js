const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    ingredients:{
        type:String,
        require:true,
    },
    instructions:{
        type:String,
        require:true,
    },
    time:{
        type:String,
        require:true,
    },coverImage:{
        type:String,

    }
},{timestamps:true})

module.exports = mongoose.model("Recipes",recipeSchema)