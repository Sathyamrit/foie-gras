const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Route files
const reservationRoutes = require('./routes/reservationRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Middleware
app.use(cors(
  {
    origin: ['http://localhost:3000','https://foie-gras-client.vercel.app'],  // Frontend URL
    methods: ['GET', 'POST'],
    credentials: true
  }
));
app.use(express.json());

// Use route modules
app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);

// Test route for base URL
// app.get('/', (req, res) => {
//   res.send('🚀 Server is running! API is working.');
// });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


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
  
// Default
const PORT = process.env.PORT || 5000;