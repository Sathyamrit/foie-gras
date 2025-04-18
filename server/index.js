const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://foie-gras-client.vercel.app', // Your frontend on Vercel
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.post('/api/reservations', (req, res) => {
  // Your form data comes in req.body
  console.log('Reservation received:', req.body);

  // You can add MongoDB logic here if needed
  res.status(200).json({ message: 'Reservation received' });
});

// Export handler for Vercel
module.exports = serverless(app);
