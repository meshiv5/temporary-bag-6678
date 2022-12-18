const {Schema, model} = require("mongoose");

const MovieSchema = new Schema({
  id: String,
  title: String,
  tags: [String],
  languages: [String],
  category: [String],
  type: String,
  list: String,
  cover: String,
});

const MovieModel = model("movie", MovieSchema);

module.exports = MovieModel;
