const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Route files
const reservationRoutes = require('./routes/reservationRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
  {
    origin: 'https://foie-gras-client.vercel.app', // Your frontend on Vercel
    methods: ['GET', 'POST'],
    credentials: true
  }
));
app.use(express.json());

// Test route for base URL
// app.get('/', (req, res) => {
//   res.send('🚀 Server is running! API is working.');
// });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use route modules
app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🔥 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:',err));
  