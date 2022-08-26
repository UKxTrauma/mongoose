require("./db/connection");
const mongoose = require("mongoose")
const yargs = require("yargs")
const { createMovie, listMovies, deleteMovie, deleteMovies, updateMovie, findMoviesCast, findMoviesTitle } = require("./movie/movieFunctions")
const { createTvShow, listTvShows, deleteTvShow, deleteTvShows, updateTvShow, findTvShowsCast, findTvShowsTitle } = require("./tvShow/tvShowFunctions")

const app = async (yargsObject) => {
    try {
        if (yargsObject.add && yargsObject.movies) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await listMovies())
        } 
        else if (yargsObject.list && yargsObject.movies) {
            let list = await listMovies()
            console.log("Movies within this database:\n\n"+list)
            //
        } 
        else if (yargsObject.delete && yargsObj.movies){
            await deleteMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log("Movie deleted!\nUpdated list of Movies:\n\n"+await listMovies())
        }
        else if (yargsObject.deleteAll && yargsObj.movies) {
            await deleteMovies()
            console.log("All Movies deleted!")
        }
        else if (yargsObject.update && yargsObject.movies) {
            await updateMovie(
                {title: yargsObject.title, actor: yargsObject.actor},
                {title: yargsObject.newTitle, actor: yargsObject.newActor}                
            )
            console.log("Movie list updated!\nUpdated list of Movies:\n\n"+await listMovies())
        }
        else if ((yargsObject.find && yargsObject.actor && yargsObject.movies)) {
            let findActor = await findMoviesCast({actor: yargsObject.actor})
            console.log(await findActor)
        }
        else if ((yargsObject.find && yargsObject.title && yargsObject.movies)) {
            let findMovie = await findMoviesTitle({title: yargsObject.title})
            console.log(await findMovie)
        }
        else if (yargsObject.add && yargsObject.tvShows) {
            await createTvShow ({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listTvShows())
        }
        else if (yargsObject.list && yargsObject.tvShows) {
            let listTv = await listTvShows()
            console.log("TV Shows within this database:\n\n"+listTv)
        }
        else if (yargsObject.delete && yargsObject.tvShows) {
            await deleteTvShow({ title: yargsObject.title, actor: yargsObject.actor })
            console.log("Deleted TV Show.\nCurrent list of TV Shows:\n\n"+await listTvShows())
        }
        else if (yargsObject.deleteAll && yargsObject.tvShows) {
            await deleteTvShows()
            console.log("All TV Shows deleted!")
        }
        else if (yargsObject.update && yargsObject.tvShows) {
            await updateTvShow({ title: yargsObject.title, actor: yargsObject.actor }, { title: yargsObject.newTitle, actor: yargsObject.newActor })
            console.log("TV Shows have been updated:\n\n"+await listTvShows())
        }
        else if ((yargsObject.find && yargsObject.actor && yargsObject.tvShows)) {
            let findTvCast = await findTvShowsCast({actor: yargsObject.actor})
            console.log(await findTvCast)
        }
        else if ((yargsObject.find && yargsObject.title && yargsObject.tvShows)) {
            let findTvShow = await findTvShowsTitle({title: yargsObject.title})
            console.log(await findTvShow)
        }
        else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
}

app(yargs.argv)