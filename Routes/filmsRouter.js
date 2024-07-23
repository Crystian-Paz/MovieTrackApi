import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllFilms, getFilmsByGenre, getFilmByName } from '../Controllers/ControllerFilms.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filmsRouter = express.Router();

// Rota para listar todos os filmes
filmsRouter.get('/films', getAllFilms);

// Rota para listar filmes por gênero
filmsRouter.get('/films/genre/:genre', getFilmsByGenre);

// Rota para listar um filme pelo nome
filmsRouter.get('/films/name/:name', getFilmByName);

export default filmsRouter;
