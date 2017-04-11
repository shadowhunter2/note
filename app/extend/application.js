const crypto = require('crypto');

module.exports = {
  encry(str) {
    const hash = crypto.createHash('sha256');
    hash.update(str + this.config.keys);

    return hash.digest('hex')
  },
};