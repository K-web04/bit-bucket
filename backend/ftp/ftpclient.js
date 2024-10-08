const ftp = require('basic-ftp');
const path = require('path');

// Function to upload a file to the FTP server
const uploadToFtp = async (filePath, fileName) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access({
            host: '103.81.159.114',  // Your FTP server address
            user: 'dev_ftp_user',
            password: '.m@%N42K3IHA',
            secure: false
        });

        // Upload the file to the FTP server
        await client.uploadFrom(filePath, path.join('/uploads', fileName));
        return { path: `/uploads/${fileName}` };
    } catch (error) {
        console.error('FTP Error:', error);
        throw error;
    } finally {
        client.close();
    }
};

module.exports = { uploadToFtp };
