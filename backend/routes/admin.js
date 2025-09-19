const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const { getUsers, getAllNotes, deleteNoteAdmin } = require('../controllers/adminController');

router.get('/users', protect, admin, getUsers);
router.get('/notes', protect, admin, getAllNotes);
router.delete('/notes/:id', protect, admin, deleteNoteAdmin);

module.exports = router;
