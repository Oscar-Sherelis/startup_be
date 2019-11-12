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
        type: String
    },
    country: {
        type: String,
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    userPprojects: {
        type: Array
    }
});

mongoose.model('users', userSchema);
