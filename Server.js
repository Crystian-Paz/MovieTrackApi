import express from 'express';
import filmsRouter from './Routes/filmsRouter.js';
import musicsRouter from './Routes/musicsRouter.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(filmsRouter);
app.use(musicsRouter);

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
