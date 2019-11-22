const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
const User = mongoose.model('users');


const registration = async (req, res, next) => {
    const schema = {
        firstname: Joi.string().min(2).max(255).required(),
        lastname: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).max(255).required(),
        phonenumber: Joi.string().min(8).max(16)
    };

    const { error } = Joi.validate(req.body, schema);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        // FIND AN EXISTING USER
        let user = await User.findOne({ email: req.body.email});
        if (user) return res.status(400).send("User already registered"); 
        else return next();
    }
        
};

const login = async (req, res, next) => {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).max(255).required(),
    };

    const { error } = Joi.validate(req.body, schema);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        return next();
    }
};

const validateNewProject = async (req, res, next) => {
    const schema = {
        projectName: Joi.string().min(2).max(255).required(),
        projectLocation: Joi.string().min(2).max(255).required(),
        professionalsNeeded: Joi.array().items(Joi.string()).unique(),
        projectArea: Joi.string().min(2).required(),
        projectShortDescription: Joi.string().min(2).max(150).required(),
        projectDescription: Joi.string().min(2).max(400).required(),   
        userId: req.body.userId
    };
    const { error } = Joi.validate(req.body, schema);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        return next();
    }
        
};

module.exports = {
    registration,
    login,
    validateNewProject
};