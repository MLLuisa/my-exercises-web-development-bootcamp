"use strict";

function workWithMovies() {
    const movies = [
        "Titanic", "Ghostbusters", "Avengers"
    ];
    movies[3] = "Doctor Strange";
    movies[3] = "Captain america";
    movies[1] = "Star Wars";
    return movies;
}

console.log(workWithMovies());
