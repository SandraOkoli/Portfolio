const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true},
  description: { type: String, required: true, trim: true},
  image: { type: String, required: true, trim: true},
  technology: { type: String, required: true, trim: true},
  category: { type: String, requires: true, trim: true}
});

module.exports = mongoose.model('Project', projectSchema);
