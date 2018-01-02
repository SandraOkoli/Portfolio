const Promise = require('bluebird');
const jwt = Promise.promisifyAll(require('jsonwebtoken'));
const { secret } = require('../config/environment');
const Admin = require('../models/admin');

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.unauthorized();

  const token = req.headers.authorization.replace('Bearer ', '');

  jwt.verifyAsync(token, secret)
    .then((payload) => {
      return Admin.findById(payload.adminId);
    })
    .then((admin) => {
      if(!admin) return res.unauthorized();
      req.currentUser = admin;
      return next();
    })
    .catch(next);
}

module.exports = secureRoute;
