// роуты для контактов

const express = require('express');
const { createContact, deleteContact, getAll, searchContacts, toFavorite } = require('../controllers/contact-controller');

const router = express.Router();
const jsonParser = express.json();

router.post('/contact', jsonParser, createContact);
router.delete('/contact/:id_contact', jsonParser, deleteContact);
router.get('/contact', jsonParser, getAll);
router.get('/contacts/search/', jsonParser, searchContacts);
router.put('/contact/:id_contact', jsonParser, toFavorite);

module.exports = router;