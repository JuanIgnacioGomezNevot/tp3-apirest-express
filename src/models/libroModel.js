const fs = require('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, '../db/libros.json');

let libros = [];

// Cargar libros desde el archivo al iniciar el servidor
const cargarLibros = () => {
    if (fs.existsSync(rutaArchivo)) {
        const data = fs.readFileSync(rutaArchivo, 'utf-8');
        libros = JSON.parse(data);
    } else {
        libros = [];
        guardarLibros();
    }
};

// Guardar libros en el archivo
const guardarLibros = () => {
    fs.writeFileSync(rutaArchivo, JSON.stringify(libros, null, 2));
};

const obtenerTodos = () => libros;

const obtenerPorId = (id) => libros.find(libro => libro.id === id);

const agregarLibro = (libro) => {
    libros.push(libro);
    guardarLibros();
};

const actualizarLibro = (id, datos) => {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        libros[index] = { ...libros[index], ...datos };
        guardarLibros();
    }
};

const borrarLibro = (id) => {
    libros = libros.filter(libro => libro.id !== id);
    guardarLibros();
};

// Cargar los libros al iniciar
cargarLibros();

module.exports = { obtenerTodos, obtenerPorId, agregarLibro, actualizarLibro, borrarLibro };
