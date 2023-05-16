import { pool } from "../../db/mysql.js";
import { Movie } from "../domain/Movie.js";

export class PostMovie {
  async post(movieData) {
    const { title, duration, repositoryServerLink, synopsis, director, release, genre, classification, production, rate } = movieData;
    console.log('🤒🤕😶‍🌫️ --------------------------------------------------------------------------------------🤒🤕😶‍🌫️')
    console.log('🤒🤕😶‍🌫️ ~~ file: PostMovieUseCase.js:7 ~~ PostMovie ~~ post ~~ movieData:', movieData)
    console.log('🤒🤕😶‍🌫️ --------------------------------------------------------------------------------------🤒🤕😶‍🌫️')

    try {
      const result = await pool.query('INSERT INTO movies (title, duration, repositoryServerLink, synopsis, director, `release`, genre, classification, production, rate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [title, duration, repositoryServerLink, synopsis, director, release, genre, classification, production, rate]);
      console.log(result);

      if(!result){
        console.log("How Knows");
      }
    }catch (err) {
        console.error(err);
        throw new Error('Failed to create the movie: Movie was not saved to the database');
      }
  }
}
