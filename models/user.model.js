const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        // required: 'This field is required'
    },
    lastname: {
        type: String,
        // required: 'This field is required'
    },
    email: {
        type: String,
        // required: 'This field is required'
    },
    password: {
        type: String,
        // required: 'This field is required'
    },
    phonenumber: {
        type: Number
    },
    country: {
        type: String,
    },
    userPhoto: {
        type: String
    },
    description: {
        type: String
    },
    projects: {
        type: Array
    }
});

mongoose.model('users', userSchema);
