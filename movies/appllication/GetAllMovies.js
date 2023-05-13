import { pool } from '../../db/mysql.js';
import { Movie } from '../domain/Movie.js'

export class GetAllMovies {

    async getAll(){
        console.log('Entré')
        const [movies] = await pool.query('SELECT * FROM movies');
        console.log(movies);
        return movies.map((movie) => { 
            
        return new Movie(
            movie.id,
            movie.name,
            movie.duration,
            movie.ruta,
            movie.description,
            movie.director
        )
        });

    }
}


/*
export const getAllMovies = async (req, res) => {
    const [movie] = await pool.query('SELECT * FROM movie');
    console.log(movie);
    return new Movie(movie.name, movie.description, movie.duration, movie.ruta, movie.director);
}
*/