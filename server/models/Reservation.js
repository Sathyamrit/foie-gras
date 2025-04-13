const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  guests: String,
  occasion: String,
  specialRequests: String
});

module.exports = mongoose.model('Reservation', reservationSchema, 'table reservations');
