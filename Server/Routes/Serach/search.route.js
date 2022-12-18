const express = require("express");
const MovieModel = require("../../Models/movies.model");

const app = express.Router();

app.get("/search", async (req, res) => {
  const {query, page = 1,lag,genres,content} = req.query;
  try {

    if(genres){
      const movies = await MovieModel.find(
        {
          tags: {$regex: genres, $options: "i"},
        })
        .skip((page - 1) * 15)
        .limit(15);
      return res.status(200).send(movies);
    }
    if(content){
      const movies = await MovieModel.find(
        {
          tags: {$regex: content, $options: "i"},
        })
        .skip((page - 1) * 15)
        .limit(15);
      return res.status(200).send(movies);
    }
    if(lag){
      const movies = await MovieModel.find(
        {
          tags: {$regex: lag, $options: "i"},
        })
        .skip((page - 1) * 15)
        .limit(15);
      return res.status(200).send(movies);
    }
    const movies = await MovieModel.find({tags: {$regex: query, $options: "i"}})
      .skip((page - 1) * 15)
      .limit(15);
    return res.status(200).send(movies);
  } catch (e) {
    return res.status(404).send({mag:e.message});
  }
});

module.exports = app;
