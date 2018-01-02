const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Admin = require('../models/admin');

//Create token to authenticate admin user
function register(req, res, next) {
  Admin
    .create(req.body)
    .then(admin => {
      const token = jwt.sign({adminId: admin._id}, secret, { expiresIn: '1hr'});

      return res.json({ message: `Welcome ${admin.username}`, token});
    })
    .catch(next);
}

function login(req, res, next) {
  Admin
    .findOne({ email: req.body.email })
    .then((admin) => {
      if(!admin.validatePassword(req.body.password))
        return res.status(401).json({ message: 'Unauthorised' });

      const token = jwt.sign({ adminId: admin._id}, secret, { expiresIn: '1hr'});

      return res.json({ message: `Welcome back ${admin.username}`, token});
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
