

const Review=require("../models/Review.model")

 const Movie =require("../models/movie.model")

 const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

 const getMovies = async (req, res) => {
  try {
    const query = {};
    if (req.query.genre) query.genre = req.query.genre;
    const movies = await Movie.find(query);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

 const getMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    const reviews = await Review.find({ movie: movie._id }).populate("user", "name email");
    res.json({ movie, reviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports={addMovie,getMovies,getMovieDetails}