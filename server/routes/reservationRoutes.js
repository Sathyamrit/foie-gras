const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const CompletedReservation = require('../models/CompletedReservation');

// Get all reservations
router.get('/', async (req, res) => {
  try {
    // .sort({ date: 1, time: 1 });
    const reservations = await Reservation.find()
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new reservation
router.post('/', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: 'Reservation saved!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete reservation
router.delete('/:id', async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted reservation' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mark as completed
router.put('/complete/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Not found' });

    const completed = new CompletedReservation(reservation.toObject());
    await completed.save();
    await Reservation.findByIdAndDelete(req.params.id);

    res.json({ message: 'Reservation marked as completed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
