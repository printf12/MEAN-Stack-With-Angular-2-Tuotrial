const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://rakan:rakan@ds157538.mlab.com:57538/audatex', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'audatex' // Database name
}