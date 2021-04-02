const { AsyncNedb } = require('nedb-async');

const codes = new AsyncNedb({ filename: './store/codes.db', autoload: true });
codes.asyncEnsureIndex({ fieldName: 'nitro', unique: true }).catch(e => e);

module.exports = {
  codes
};
