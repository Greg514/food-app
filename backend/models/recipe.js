const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    ingredients:{
        type:Array,
        require:true,
    },
    instructions:{
        type:String,
        require:true,
    },
    time:{
        type:String,
        require:true,
    },
    file:{
        type:Buffer,

    }
},{timestamps:true})

module.exports = mongoose.model("Recipes",recipeSchema)