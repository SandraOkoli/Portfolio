const router = require('express').Router();
const auth = require('../controllers/auth');
// const projects = require('../controllers/projects');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
