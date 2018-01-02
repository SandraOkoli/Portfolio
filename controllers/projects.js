const Project = require('../models/project');

//Index Route
function projectIndex(req, res, next) {
  Project
    .find()
    .exec()
    .then(projects => res.json(projects))
    .catch(next);
}

//Show Route
function projectShow(req, res, next) {
  Project
    .findById()
    .then((project) => {
      if(!project) return res.notFound();
      res.json(project);
    })
    .catch(next);
}
//Edit Route
function projectEdit(req, res, next) {
  Project
    .findById(req.params.id)
    .then((project) => {
      if(!project) return res.notFound();
      project = Object.assign(project, req.body);
      return project.save();
    })
    .then(project => res.json(project))
    .catch(next);
}

//Delete Route
function projectDelete(req, res, next) {
  Project
    .findById(req.params.id)
    .then((project) => {
      if(!project) return res.notFound();
      return project.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: projectIndex,
  show: projectShow,
  edit: projectEdit,
  delete: projectDelete
};
