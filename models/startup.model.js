const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    startupName: {
        type: String,
        required: 'This field is required'
    },
    startupPhoto: {
        type: String
    },
    startupLocation: {
        type: String,
        required: 'This field is required'
    },
    professionalsNeeded: {
        type: Array
    },
    startupArea: {
        type: String,
        required: 'This field is required'
    },
    startupShortDescription: {
        type: String,
        required: 'This field is required'
    },
    startupDescription: {
        type: String
    }
});

mongoose.model('startups', startupSchema);