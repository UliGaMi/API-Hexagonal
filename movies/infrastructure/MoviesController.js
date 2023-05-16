export class MoviesController {
  constructor(getAllMovies, postMovie) {
    this.getAllMovies = getAllMovies;
    this.postMovie = postMovie;
  }

  async controllerGetAll(req, res, next) {
    console.log("Hola in controllerGetAll");
    const movies = await this.getAllMovies.getAll();
    res.status(200).json(movies);
  }

  async controllerCreate(req, res) {
    
      const movieData = req.body;
      const movie = await this.postMovie.post(movieData); 
      res.status(201).json(movie);
   
  }
}
