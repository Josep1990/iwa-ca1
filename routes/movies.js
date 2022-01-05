require("dotenv").config();  //load all the env varialbes on the serve
const express = require("express"),
    router = express.Router(),
    Movie = require("../models/movie"),
    axios = require('axios');


//get movies from api and render as html using ejs template management    
router.get("/", function (req, res) {
    let movies;

    function loadMovie(err, allMovies) {

        axios.get(process.env.POPULAR_MOVIES)
            .then(response => {             
                res.render("movies/index", { movies: response.data.results });
            })
            .catch(error => {
                console.log(error);
            });
    }

    loadMovie();
});

module.exports = router;