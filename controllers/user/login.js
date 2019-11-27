const mongoose = require('mongoose');
const jwt =  require('jsonwebtoken');

const userModel = mongoose.model('users');
const tokenModel = mongoose.model('tokens');

const authHelper = require('../../utilities/authHelper');
const authConfig = require('../../config/auth').jwt;

const hashPass = require('../../utilities/passwordHash');
const saltHashPassword = hashPass.saltHashPassword;

// FUNCTION FOR Login function
function CreateTokens (userId) {
  const accessToken =  authHelper.generateAccessToken(userId)
  const refreshToken =  authHelper.generateRefreshToken()
  console.log('accessToken ' + accessToken);
  console.log('refreshToken ' + refreshToken.token);

  authHelper.saveToDbRefreshToken(refreshToken.id, userId)

  return { accessToken, refreshToken: refreshToken.token };
}

const Login = async (req, res) => {
    try {
      const email = req.body.email;
      const password = saltHashPassword(req.body.password);
      
      await userModel.findOne({ email, password })
        .then(async (user) => {
          if (user) {
            const tokens = CreateTokens(user._id)
            
            return res.status(200).json({ 
                                          message: "Logged in...",
                                          accessToken: tokens.accessToken, 
                                          refreshToken: tokens.refreshToken  
                                        });
                                      } else {
            return res.status(400).send({ message: "Wrong email or password"})
          }
        });
      } catch (e) {
      return res.status(500).send(e);
    }
  }
  
// FUNCTION FOR RefreshToken and Logout functions
function GetRefreshTokenId(req, res) {
  const { refreshToken } = req.body;
  let payload;
  try {
    payload = jwt.verify(refreshToken, authConfig.secret);
    if (payload.type !== 'refresh') {
      res.status(400).json({ message: 'Invalid token!' });
      return false;
    }
    return payload.id;
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Token expired!' });
      return false;
    } else if (e instanceof jwt.JsonWebTokenError) {
      res.status(400).json({ message: 'Invalid token!' });
      return false; 
    }
  }
}

const RefreshTokens = async (req, res) => {
  const { refreshToken } = req.body;
  let payload;
  try {
    payload = jwt.verify(refreshToken, authConfig.secret);
    if (payload.type !== 'refresh') {
      res.status(400).json({ message: 'Invalid token!' });
      return;
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      return res.status(400).json({ message: 'Token expired!' });
    } else if (e instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: 'Invalid token!' });
    }
  }
  
  const refreshTokenId = await GetRefreshTokenId(req, res)
  
  if (refreshTokenId !== false) {
    tokenModel.findOne({ tokenId: payload.id }, (err, data) => {
      
      if (data === null) {
        res.send(400).json({ message: 'Token does not exist!'})
      } else {
        const tokens = CreateTokens(data.userId);
          
        return res.status(200).json({ 
                                      message: "Tokens updated...",
                                      accessToken: tokens.accessToken, 
                                      refreshToken: tokens.refreshToken  
                                    });
      }
    })
  }
}

const Logout = async (req, res) => {
  const refreshTokenId = await GetRefreshTokenId(req, res)
  if (refreshTokenId !== false) {
    try {
      await tokenModel.findOneAndRemove({ tokenId: refreshTokenId })
      return res.status(200).send({ message: 'You have successfully logged out...' });
    } catch (e) {
      return res.status(500).send({ message: 'Something went wrong ', error: e });
    }
  }
}

module.exports = {
  Login,
  RefreshTokens,
  Logout
}
