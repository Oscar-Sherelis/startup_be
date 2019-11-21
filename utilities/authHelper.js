const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const { secret, tokens } = require('../config/auth').jwt;
const mongoose = require('mongoose');

const tokenModel = mongoose.model('tokens');

const generateAccessToken = (userId) => {
    const payload = {
        userId: String(userId),
        type: tokens.access.type,
    }
    const options = { expiresIn: tokens.access.expiresIn };
 
    return jwt.sign(payload, secret, options);
};

const generateRefreshToken = () => {
    const payload = {
        id: uuid(),
        type: tokens.refresh.type,
    };
    const options = { expiresIn: tokens.refresh.expiresIn };

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options),
    };
};

const saveToDbRefreshToken = (tokenId, userId) => {
    tokenModel.findOne({ userId }, async (err, data) => {
        if(!err){
            if(data){
                data.tokenId = tokenId
                await data.save()
                return { message: 'refresh token was updated!'};
            } else {
                tokenModel.create({ tokenId, userId })
                return { message: 'refresh token was created!'};
            }
        } else {
            return err;
        }
    })
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    saveToDbRefreshToken,
}