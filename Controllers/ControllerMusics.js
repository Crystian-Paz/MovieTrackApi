import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para ler o arquivo JSON
const readMusicData = () => {
    const filePath = path.join(__dirname, '../Repositories/musics.json');
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

// Função genérica para buscar músicas por gênero
const getMusicByGenre = (genre) => {
    const musicData = readMusicData();
    return musicData.filter(music => music.genero === genre);
};

// Funções específicas para cada gênero
const getRockMusic = (req, res) => {
    const result = getMusicByGenre('Rock');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getElectronicMusic = (req, res) => {
    const result = getMusicByGenre('Electronic');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getSoundtrackMusic = (req, res) => {
    const result = getMusicByGenre('Soundtrack');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getClassicalMusic = (req, res) => {
    const result = getMusicByGenre('Classical');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getTraditionalMusic = (req, res) => {
    const result = getMusicByGenre('Traditional');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getJazzMusic = (req, res) => {
    const result = getMusicByGenre('Jazz');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getIndieRockMusic = (req, res) => {
    const result = getMusicByGenre('Indie Rock');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getFolkMusic = (req, res) => {
    const result = getMusicByGenre('Folk');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getAmbientMusic = (req, res) => {
    const result = getMusicByGenre('Ambient');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getMPBMusic = (req, res) => {
    const result = getMusicByGenre('MPB');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getSambaMusic = (req, res) => {
    const result = getMusicByGenre('Samba');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

const getBossaNovaMusic = (req, res) => {
    const result = getMusicByGenre('Bossa Nova');
    result.length > 0 ? res.json(result) : res.status(404).json({ message: "Nenhuma música encontrada para este gênero." });
};

// Lista todas as músicas
const getAllMusics = (req, res) => {
    try {
        const musics = readMusicData();
        res.status(200).json(musics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lista músicas por filme
const getMusicsByFilm = (req, res) => {
    try {
        const film = req.params.film;
        const musicData = readMusicData();
        const musics = musicData.filter(music => music.musicFilm === film);
        res.status(200).json(musics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
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
};
