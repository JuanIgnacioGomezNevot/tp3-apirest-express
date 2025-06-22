const model = require('../models/libroModel');

exports.obtenerTodos = (req, res) => res.json(model.obtenerTodos());
exports.obtenerPorId = (req, res) => {
    const libro = model.obtenerPorId(parseInt(req.params.id));
    libro ? res.json(libro) : res.status(404).json({ error: 'Libro no encontrado' });
};
exports.agregarLibro = (req, res) => {
    const nuevoLibro = { id: Date.now(), ...req.body };
    model.agregarLibro(nuevoLibro);
    res.status(201).json(nuevoLibro);
};
exports.actualizarLibro = (req, res) => {
    model.actualizarLibro(parseInt(req.params.id), req.body);
    res.json({ mensaje: 'Libro actualizado' });
};
exports.borrarLibro = (req, res) => {
    model.borrarLibro(parseInt(req.params.id));
    res.json({ mensaje: 'Libro eliminado' });
};


exports.obtenerTodos = (req, res) => {
    let resultados = model.obtenerTodos();
    const { autor, año } = req.query;

    if (autor) {
        resultados = resultados.filter(libro =>
            libro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    if (año) {
        resultados = resultados.filter(libro => libro.año == parseInt(año));
    }

    res.json(resultados);
};
exports.obtenerPorId = (req, res) => {
    const libro = model.obtenerPorId(parseInt(req.params.id));
    libro ? res.json(libro) : res.status(404).json({ error: 'Libro no encontrado' });
};

