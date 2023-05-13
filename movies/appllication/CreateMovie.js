// import {pool} from '../adapters/db.js';

// export const  createMovie = async (req, res) => {
//     const {name,  correo} = req.body;
//     try{
//     const profesores = await pool.query(`insert into profesores (nombre, carrera, correo) values ("${nombre}", "${carrera}", "${correo}");`);
//     res.send('Succesfull post');
//     }
//     catch{
//         res.send('Error')
//     }
// }