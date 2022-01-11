require("dotenv").config();  //load all the env varialbes on the serve
const express = require("express"),
    router = express.Router(),
    Movie = require("../models/movie"),
    axios = require('axios');


//get movies from api and render as html using ejs template management    
router.get("/movies", function (req, res) {
    let movies;

    function loadMovie(err, allMovies) {

        axios.get(process.env.POPULAR_MOVIES)
            .then(response => {             
                res.render("movies/popular", { movies: response.data.results });
            })
            .catch(error => {
                console.log(error);
            });
    }

    loadMovie();
});

router.get("/top-rate", function (req, res) {
    let movies;

    function loadMovie(err, allMovies) {

        axios.get(process.env.TOP_RATED)
            .then(response => {             
                res.render("movies/toprated", { movies: response.data.results });
            })
            .catch(error => {
                console.log(error);
            });
    }

    loadMovie();
});

router.get("/upcoming", function (req, res) {
    let movies;

    function loadMovie(err, allMovies) {

        axios.get(process.env.UPCOMIMG)
            .then(response => {             
                res.render("movies/upcoming", { movies: response.data.results });
            })
            .catch(error => {
                console.log(error);
            });
    }

    loadMovie();
});

module.exports = router;