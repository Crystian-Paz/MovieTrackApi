import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    getRockMusic,
    getElectronicMusic,
    getSoundtrackMusic,
    getClassicalMusic,
    getTraditionalMusic,
    getJazzMusic,
    getIndieRockMusic,
    getFolkMusic,
    getAmbientMusic,
    getMPBMusic,
    getSambaMusic,
    getBossaNovaMusic,
    getAllMusics,
    getMusicsByFilm
} from '../Controllers/ControllerMusics.js'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const musicsRouter = express.Router();

// Rotas para músicas
musicsRouter.get('/musics', getAllMusics);
musicsRouter.get('/film/:film', getMusicsByFilm);
musicsRouter.get('/rock', getRockMusic);
musicsRouter.get('/electronic', getElectronicMusic);
musicsRouter.get('/soundtrack', getSoundtrackMusic);
musicsRouter.get('/classical', getClassicalMusic);
musicsRouter.get('/traditional', getTraditionalMusic);
musicsRouter.get('/jazz', getJazzMusic);
musicsRouter.get('/indie-rock', getIndieRockMusic);
musicsRouter.get('/folk', getFolkMusic);
musicsRouter.get('/ambient', getAmbientMusic);
musicsRouter.get('/mpb', getMPBMusic);
musicsRouter.get('/samba', getSambaMusic);
musicsRouter.get('/bossa-nova', getBossaNovaMusic);

export default musicsRouter;
