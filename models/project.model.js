const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectId: {
        type: Number
    },
    projectName: {
        type: String,
        required: 'This field is required'
    },
    image: {
        type: String
    },
    projectLocation: {
        type: String,
        required: 'This field is required'
    },
    professionalsNeeded: {
        type: Array
    },
    projectArea: {
        type: String,
        required: 'This field is required'
    },
    projectShortDescription: {
        type: String,
        required: 'This field is required'
    },
    projectDescription: {
        type: String
    }
});

mongoose.model('projects', projectSchema);