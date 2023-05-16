export class Movie {
    constructor(
      id,
      title,
      duration,
      repositoryServerLink,
      synopsis,
      director,
      release,
      genre,
      classification,
      production,
      rate
    ) {
      this.id = id;
      this.title = title;
      this.duration = duration;
      this.repositoryServerLink = repositoryServerLink;
      this.synopsis = synopsis;
      this.director = director;
      this.release = release;
      this.genre = genre;
      this.classification = classification;
      this.production = production;
      this.rate = rate;
    }
  }
  