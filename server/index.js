const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors(
  {
    origin: '', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  }
));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Basic test route
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.post('/api/reservations', (req, res) => {
  // Logic to handle form submission goes here
  res.json({ message: 'Reservation received' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
