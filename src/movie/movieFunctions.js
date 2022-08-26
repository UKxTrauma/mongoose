const Movie = require("./movieModel");

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)

    } catch (error) {
        console.log("Error within creatMovie\n\n"+error)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.find({})
    } catch (error) {
        console.log("Error within listMovies\n\n"+error)
    }
}

exports.deleteMovie = async () => {
    try {
        return await Movie.deleteOne(movieObject)
    } catch (error) {
        console.log("Error within deleteMovie\n\n"+error)
    }
}

exports.deleteMovies = async () => {
    try {
        return await Movie.deleteMany({})
    } catch (error) {
        console.log("Error within deleteMovies\n\n"+error)
    }
}

exports.updateMovie = async (movieObject, updateMovieObject) => {
    try {
        return await Movie.updateOne(movieObject, updateMovieObject)
    } catch (error) {
        console.log("Error within updateMovie\n\n"+error)
    }
}

exports.findMoviesCast = async (actorObject) => {
    try {
        return await Movie.find(actorObject)
    } catch (error) {
        console.log("Error within findMoviesCast\n\n"+error)
    }
}

exports.findMoviesTitle = async (titleObject) => {
    try {
        return await Movie.findOne(titleObject)
    } catch (error) {
        console.log("Error within findMoviesTitle\n\n"+error)
    }
}