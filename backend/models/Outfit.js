const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }
});

module.exports = mongoose.model('Outfit', outfitSchema, 'outfits');
