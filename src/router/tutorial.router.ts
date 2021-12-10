import express from 'express';
const router = express.Router();

const tutorial = require('../service/tutorial.service');

// Create tutorial
router.post('/api/tutorial', tutorial.create);

// Retrieve all tutorials
router.get('/api/tutorial', tutorial.findAll);

// Retrieve tutorial by id
router.get('/api/tutorial/:id', tutorial.findOne);

// Update tutorial by id
router.put('/api/tutorial/:id', tutorial.update);

// Delete tutorial by id
router.delete('/api/tutorial/:id', tutorial.delete);

export = router;
