import { Router } from "express";
import { MoviesController } from "../movies/infrastructure/MoviesController.js";
import { GetAllMovies } from "../movies/appllication/GetAllMoviesUseCase.js";
import { PostMovie } from "../movies/appllication/PostMovieUseCase.js";

const router = Router();
const getAllMovies = new GetAllMovies();
const postMovie = new PostMovie();
const moviesController = new MoviesController(getAllMovies, postMovie);

router.get('/movies', (req, res) => moviesController.controllerGetAll(req, res));
router.post('/movies', (req, res) => moviesController.controllerCreate(req, res));


export default router;

