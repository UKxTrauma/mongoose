const TvShow = require("./tvShowModel");

exports.createTvShow = async (tvShowObject) => {
    try {
        await TvShow.create(tvShowObject)

    } catch (error) {
        console.log("Error within creatTvShow\n\n"+error)
    }
}

exports.listTvShows = async () => {
    try {
        return await TvShow.find({})
    } catch (error) {
        console.log("Error within listTvShows\n\n"+error)
    }
}

exports.deleteTvShow = async (tvShowObject) => {
    try {
        return await TvShow.deleteOne(tvShowObject)
    } catch (error) {
        console.log("Error within deleteTvShow\n\n"+error)
    }
}

exports.deleteTvShows = async () => {
    try {
        return await TvShow.deleteMany({})
    } catch (error) {
        console.log("Error within deleteTvShows\n\n"+error)
    }
}

exports.updateTvShow = async (tvShowObject, updateTvShowObject) => {
    try {
        return await TvShow.updateOne(tvShowObject, updateTvShowObject)
    } catch (error) {
        console.log("Error within updateTvShow\n\n"+error)
    }
}

exports.findTvShowsCast = async (actorObject) => {
    try {
        return await TvShow.find(actorObject)
    } catch (error) {
        console.log("Error within findTvShowsCast\n\n"+error)
    }
}

exports.findTvShowsTitle = async (titleObject) => {
    try {
        return await TvShow.findOne(titleObject)
    } catch (error) {
        console.log("Error within findTvShowsTitle\n\n"+error)
    }
}