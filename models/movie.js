const mongoose = require("mongoose");

//movie schema it would be used to save on the database
const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    original_language:{
        type: String,
        required: true
    },
    poster_path:{
        type: String,               
    },
    release_date:{
        type: Date
    },
    overview:{
        type:String
    }
})

module.exports = mongoose.model("Movie", movieSchema);