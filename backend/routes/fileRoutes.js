const express = require('express');
const router = express.Router();
const { uploadImage, getImages } = require('../controllers/fileController');
const multer = require('multer');
const path = require('path');

// Set up Multer storage for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}${ext}`);
    }
});

const upload = multer({ storage: storage }).single('image');

// POST route for uploading image
router.post('/upload', upload, uploadImage);

// GET route for fetching images
router.get('/', getImages);

module.exports = router;


