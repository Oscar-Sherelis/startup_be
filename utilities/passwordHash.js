const crypto = require("crypto");

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
const sha512 = (password, salt) => {
    let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    let value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

const saltHashPassword = (password) => {
    //let salt = genRandomString(16); /** Gives us salt of length 16 */
    let passwordData = sha512(password, 'secret');
    return passwordData.passwordHash;
  }

module.exports = {
     saltHashPassword
    }
