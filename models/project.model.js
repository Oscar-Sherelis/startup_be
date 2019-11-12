const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    
    projectName: {
        type: String,
        // required: 'This field is required'
    },
    image: {
        type: String
    },
    projectLocation: {
        type: String,
        // required: 'This field is required'
    },
    professionalsNeeded: {
        type: Array
    },
    projectArea: {
        type: String,
        // required: 'This field is required'
    },
    projectShortDescription: {
        type: String,
        // required: 'This field is required'
    },
    projectDescription: {
        type: String
    },
    lastUpdate: {
        type: Number
    },
    timeInserted: {
        type: Number
    }
});

mongoose.model('projects', projectSchema);