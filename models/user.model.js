const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    password: {
        type: String,
        required: 'This field is required'
    },
    phonenumber: {
        type: Number
    },
    country: {
        type: String,
    },
    userImage: {
        type: String
    },
    description: {
        type: String
    },
    startups: {
        type: Array
    }
});

mongoose.model('users', userSchema);
