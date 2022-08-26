const mongoose = require("mongoose");

const tvShowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    },
})

const TvShow = mongoose.model("NetflixTv", tvShowSchema);

module.exports = TvShow