const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://foie-gras-client.vercel.app', // Your frontend on Vercel
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.post('/api/reservations', (req, res) => {
  console.log('Reservation received:', req.body);

  // You can add MongoDB logic here if needed
  res.status(200).json({ message: 'Reservation received' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
