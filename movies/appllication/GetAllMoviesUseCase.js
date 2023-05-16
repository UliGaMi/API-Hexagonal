import { pool } from "../../db/mysql.js";
import { Movie } from "../domain/Movie.js";

export class GetAllMovies {
  async getAll() {
    console.log("Entré a GetAllMovies getAll");
    const [movies] = await pool.query("SELECT * FROM movies");
    console.log(movies);
    return movies.map((movie) => {
      return new Movie(
        movie.id,
        movie.title,
        movie.duration,
        movie.repositoryServerLink,
        movie.synopsis,
        movie.director,
        movie.release,
        movie.genre,
        movie.classification,
        movie.production,
        movie.rate
      );
    });
  }
}
