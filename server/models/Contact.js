const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});
module.exports = mongoose.model('ContactMessage', contactSchema, 'contact messages');