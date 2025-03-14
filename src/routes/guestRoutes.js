const express = require('express');
const {
  createGuest,
  getAllGuests,
  getGuestById,
  updateGuest,
  disableGuest,
  deleteGuest,
} = require('../controllers/guestController');

const router = express.Router();

// Routes
router.post('/', createGuest); // Create guest
router.get('/', getAllGuests); // Get all guests
router.get('/:id', getGuestById); // Get specific guest by ID
router.put('/:id', updateGuest); // Update guest
router.patch('/:id/disable', disableGuest); // Disable guest
router.delete('/:id', deleteGuest); // Delete guest

module.exports = router; 
