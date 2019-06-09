const mongoose = require('mongoose');


const ArtpostSchema = new mongoose.Schema({
    style: String,
    duration: String,
    longevity: String,
    description: String,
    image: String,
    // image: {
    //     type: String, required: true
    // },
    // image: {
    //     data: Buffer, contentType: String
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Artpost', ArtpostSchema)

//Created a model for the CityPost

