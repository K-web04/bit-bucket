// const ftp = require('basic-ftp');
// const path = require('path');

// // Function to upload a file to the FTP server
// const uploadToFtp = async (filePath, fileName) => {
//     const client = new ftp.Client();
//     client.ftp.verbose = true;

//     try {
//         await client.access({
//             host: '103.81.159.114',  // Your FTP server address
//             user: 'dev_ftp_user',
//             password: '.m@%N42K3IHA',
//             secure: false
//         });

//         // Upload the file to the FTP server
//         await client.uploadFrom(filePath, path.join('/uploads', fileName));
//         return { path: `/uploads/${fileName}` };
//     } catch (error) {
//         console.error('FTP Error:', error);
//         throw error;
//     } finally {
//         client.close();
//     }
// };

// module.exports = { uploadToFtp };



const ftp = require('basic-ftp');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to upload a file to the FTP server
const uploadToFtp = async (filePath, fileName) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access({
            host: process.env.FTP_HOST,  // FTP server address from env
            user: process.env.FTP_USER,  // FTP username from env
            password: process.env.FTP_PASSWORD,  // FTP password from env
            secure: false
        });

        // Upload the file to the FTP server
        await client.uploadFrom(filePath, path.join(process.env.FTP_UPLOAD_PATH, fileName));
        return { path: `${process.env.FTP_UPLOAD_PATH}/${fileName}` };
    } catch (error) {
        console.error('FTP Error:', error);
        throw error;
    } finally {
        client.close();
    }
};

module.exports = { uploadToFtp };
