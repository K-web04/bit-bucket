const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    originalName: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Image', imageSchema);
