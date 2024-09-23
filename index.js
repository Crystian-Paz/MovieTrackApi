import express from 'express';
import filmsRouter from './Routes/filmsRouter.js';
import musicsRouter from './Routes/musicsRouter.js';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors({
    origin: 'http://localhost:5173' // Substitua pela origem do seu frontend
}));

app.use(express.json());
app.use(filmsRouter);
app.use(musicsRouter);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } else {
        next();
    }
});

// Rotas principais
app.get('/', (req, res) => {
    res.send('Servidor está funcionando! /n');
});

// Tratamento de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
