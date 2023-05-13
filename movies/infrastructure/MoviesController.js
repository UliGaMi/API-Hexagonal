
export class MoviesController {

    constructor(getAllMovies = {}) {
      this.getAllMovies = getAllMovies;
    }
  
    async controllerGetAll(req, res) {
      try {
        console.log('Hola');
        const movies = await (this.getAllMovies).getAll();
        res.json(movies);
      } catch (error) {
        res.send('error')
      }
    }

}



  /*
    async create(req, res, next) {
      try {
        const productData = req.body;
        const product = await this.createProductUseCase.execute(productData);
        res.status(201).json(product);
      } catch (error) {
        next(error);
      }
    }
    */