require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/admin', require('./routes/admin')); // optional

app.get('/', (req, res) => res.send('Notes API running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
