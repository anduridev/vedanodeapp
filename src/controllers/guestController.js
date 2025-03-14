const prisma = require('../models/prisma'); // Prisma instance
const guestSchema = require('../schema/guestSchema');

// Create a new guest
exports.createGuest = async (req, res) => {
  try {
    // Validate request body
    const { error, value } = guestSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Create guest
    const guest = await prisma.guest.create({ data: value });
    res.status(201).json(guest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read all guests
exports.getAllGuests = async (req, res) => {
  try {
    const guests = await prisma.guest.findMany({include:{division:true}});
    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific guest by ID
exports.getGuestById = async (req, res) => {
  try {
    const { id } = req.params;
    const guest = await prisma.guest.findUnique({ where: { id } });
    if (!guest) return res.status(404).json({ message: 'Guest not found' });
    res.status(200).json(guest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a guest
exports.updateGuest = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = guestSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Update guest
    const updatedGuest = await prisma.guest.update({
      where: { id },
      data: value,
    });
    res.status(200).json(updatedGuest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Disable (soft delete) a guest
exports.disableGuest = async (req, res) => {
  try {
    const { id } = req.params;

    // Set a "disabled" flag or any custom logic for soft delete
    const disabledGuest = await prisma.guest.update({
      where: { id },
      data: { disabled: true }, // Assuming `disabled` is a field in your schema
    });

    res.status(200).json(disabledGuest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a guest (hard delete)
exports.deleteGuest = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete guest
    await prisma.guest.delete({ where: { id } });
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
