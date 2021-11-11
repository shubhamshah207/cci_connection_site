const express = require('express');
const controller = require('./../controllers/connectionController');

const router = express.Router();

// get request /connections: send all connections to the user
router.get('/',controller.index);

// get /connections/new: send html form for creating a new connection.
router.get('/new', controller.new);

//post /connections: create a new connection 
router.post('/', controller.create);

// Get /connections/:id send details of connection identified by id
router.get('/:id', controller.show);

//Get /connections/:id/edit send the html form for editing an existing connection.
router.get('/:id/edit', controller.edit);

//Put /connections/:id update the connections identified by id
router.put('/:id', controller.update);

//delete /connections/:id, delete the connection identified by id
router.delete('/:id', controller.delete);

module.exports = router;