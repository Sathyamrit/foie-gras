const mongoose = require('mongoose');

const completedReservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
  occasion: String,
  specialRequests: String
}, { timestamps: true });

module.exports = mongoose.model('CompletedReservation', completedReservationSchema);
