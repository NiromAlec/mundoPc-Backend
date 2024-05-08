const express = require('express');
const movies = require('./movies.json');

const app = express();

app.disable('x-powered-by'); // Deshabilita el header X-Powered-By: Express

app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'});
})


app.get('/movies', (req, res) => {
    const {genre} = req.query;
    if (genre) {
        const moviesByGenre = movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
        return res.json(moviesByGenre);
    } else {
        return res.json(movies);
    }
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    const movie = movies.find(movie => movie.id === id);
    if (movie) {
        return res.json(movie);
    } else {
        return res.status(404).json({message: 'Película no encontrada'});
    }
})

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
})