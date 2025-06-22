const express = require('express');
const controller = require('../controllers/librosController');
const router = express.Router();

router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.post('/', controller.agregarLibro);
router.put('/:id', controller.actualizarLibro);
router.delete('/:id', controller.borrarLibro);

module.exports = router;