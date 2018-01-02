const router = require('express').Router();
const auth = require('../controllers/auth');
const projects = require('../controllers/projects');
const secureRoute = require('../lib/secureRoute');

router.route('/projects')
  .get(projects.index)
  .get(projects.show);

router.route('/projects/:id')
  .put(secureRoute, projects.edit)
  .delete(secureRoute, projects.delete);
  
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
