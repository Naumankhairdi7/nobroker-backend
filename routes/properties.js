const express = require('express');
const router = express.Router();
const { addProperty, getProperties } = require('../controllers/propertyController');

router.post('/', addProperty); // Add new property
router.get('/', getProperties); // Get all properties (with filters)

module.exports = router;
