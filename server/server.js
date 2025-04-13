const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/reservations', reservationRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
  