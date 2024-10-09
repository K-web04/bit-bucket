// const express = require('express');
// const path = require('path');  
// const mongoose = require('mongoose');
// const cors = require('cors');  
// const fileRoutes = require('./routes/fileRoutes');
// const app = express();
// const port = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/mern_image_upload', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Enable CORS
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(express.json());
// app.use('/api/files', fileRoutes);

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Enable CORS using environment variable
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use('/api/files', fileRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

