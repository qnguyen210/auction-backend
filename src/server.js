const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect to MongoDB database 
connectDB();

// simple test route
app.get('/', (req, res) => {
  res.json({ message: 'Auction API is running' });
});
// 👉 auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
