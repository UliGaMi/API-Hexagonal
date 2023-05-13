import {Router} from 'express';
import { MoviesController } from '../movies/infrastructure/MoviesController.js';
import { GetAllMovies } from '../movies/appllication/GetAllMovies.js';

const router = Router();
const getAllMovies = new GetAllMovies();
const moviesController = new MoviesController(getAllMovies);

router.get('/movies', moviesController.controllerGetAll);


export default router;