const mongoose = require('mongoose');


const ArtpostSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipcode: Number,
    audio: String,
    lat: Number,
    long: Number,
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

