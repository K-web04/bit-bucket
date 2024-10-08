const path = require('path');
const Image = require('../models/Image');  // Import Image model
const { uploadToFtp } = require('../ftp/ftpclient');

// Upload image and store its path in the database
const uploadImage = async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Validate the file type
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.jfif'];
    const fileExt = path.extname(file.originalname).toLowerCase();

    if (!validExtensions.includes(fileExt)) {
        return res.status(400).json({ message: 'Invalid file type. Only JPG, PNG, GIF, and JFIF are allowed.' });
    }

    // Use the original file name and extension
    const filePath = path.join(__dirname, '../uploads', file.filename);

    try {
        // Upload to FTP
        await uploadToFtp(filePath, file.filename);

        // Store the image information in the database
        const imageUrl = `/uploads/${file.filename}`;
        const newImage = new Image({
            originalName: file.originalname,
            url: imageUrl,  // Store the image URL
        });

        // Save to MongoDB
        await newImage.save();

        res.json({
            message: 'File uploaded successfully',
            image: {
                id: newImage._id,
                originalName: newImage.originalName,
                url: newImage.url,
            }
        });
    } catch (error) {
        console.error('Error uploading to FTP:', error);
        return res.status(500).json({ message: 'Error uploading to FTP', error });
    }
};

// Get all images from the database
const getImages = async (req, res) => {
    try {
        const images = await Image.find();  // Fetch all images from MongoDB

        if (images.length === 0) {
            return res.status(404).json({ message: 'No images found.' });
        }

        const formattedImages = images.map(image => ({
            id: image._id,
            originalName: image.originalName,
            url: image.url,
        }));

        res.status(200).json(formattedImages);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).send('Error fetching images.');
    }
};

module.exports = { uploadImage, getImages };
