// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ImageGallery = () => {
// //     const [images, setImages] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         const fetchImages = async () => {
// //             try {
// //                 const backendUrl = process.env.REACT_APP_BACKEND_URL;
// //                 const res = await axios.get(`${backendUrl}/api/files`);  // Get list of images
// //                 setImages(res.data);
// //             } catch (err) {
// //                 console.error('Error fetching images:', err);
// //                 setError('Error fetching images');
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchImages();
// //     }, []);

// //     if (loading) return <p>Loading images...</p>;
// //     if (error) return <p>{error}</p>;

// //     if (images.length === 0) {
// //         return <p>No images found.</p>;
// //     }

// //     return (
// //         <div className="image-gallery">
// //             {images.map((image) => (
// //                 <img
// //                     key={image.id}
// //                     src={`${process.env.REACT_APP_BACKEND_URL}${image.url}`} // Fetch images from /uploads route
// //                     alt={image.originalName}
// //                     style={{ width: '100px', height: 'auto', margin: '10px' }}
// //                 />
// //             ))}
// //         </div>
// //     );
// // };

// // export default ImageGallery;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const backendUrl = process.env.REACT_APP_BACKEND_URL;
//                 const res = await axios.get(`${backendUrl}/api/files`);  // Fetch image paths from the backend
//                 setImages(res.data);  // Store the fetched image list
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//                 setError('Error fetching images');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchImages();  // Trigger API call on component mount
//     }, []);

//     if (loading) return <p>Loading images...</p>;
//     if (error) return <p>{error}</p>;

//     if (images.length === 0) {
//         return <p>No images found.</p>;
//     }

//     return (
//         <div className="image-gallery">
//             {images.map((image) => (
//                 <img
//                     key={image.id}
//                     src={`${process.env.REACT_APP_BACKEND_URL}${image.url}`}  // Construct the full image URL here
//                     alt={image.originalName}
//                     style={{ width: '150px', height: 'auto', margin: '10px' }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const res = await axios.get('http://localhost:5000/api/files');  // Directly using the API endpoint
//                 setImages(res.data);  // Store the fetched image list
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//                 setError('Error fetching images');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchImages();  // Trigger API call on component mount
//     }, []);

//     if (loading) return <p>Loading images...</p>;
//     if (error) return <p>{error}</p>;

//     if (images.length === 0) {
//         return <p>No images found.</p>;
//     }

//     return (
//         <div className="image-gallery">
//             {images.map((image) => (
//                 <img
//                     key={image.id}
//                     src={`http://localhost:5000${image.url}`}  // Directly forming the image URL here
//                     alt={image.originalName}
//                     style={{ width: '150px', height: 'auto', margin: '10px' }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const res = await axios.get(`${process.env.REACT_APP_API_URL}`);  // Using env variable for API URL
//                 setImages(res.data);  // Store the fetched image list
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//                 setError('Error fetching images');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchImages();  // Trigger API call on component mount
//     }, []);

//     if (loading) return <p>Loading images...</p>;
//     if (error) return <p>{error}</p>;

//     if (images.length === 0) {
//         return <p>No images found.</p>;
//     }

//     return (
//         <div className="image-gallery">
//             {images.map((image) => (
//                 <img
//                     key={image.id}
//                     src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image.url}`}  // Using env variable for image base URL
//                     alt={image.originalName}
//                     style={{ width: '150px', height: 'auto', margin: '10px' }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Log the environment variables
//         console.log('API URL:', process.env.REACT_APP_API_URL);
//         console.log('Image Base URL:', process.env.REACT_APP_IMAGE_BASE_URL);

//         const fetchImages = async () => {
//             try {
//                 const res = await axios.get(`${process.env.REACT_APP_API_URL}`);  // Using env variable for API URL
//                 setImages(res.data);  // Store the fetched image list
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//                 setError('Error fetching images');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchImages();  // Trigger API call on component mount
//     }, []);

//     if (loading) return <p>Loading images...</p>;
//     if (error) return <p>{error}</p>;

//     if (images.length === 0) {
//         return <p>No images found.</p>;
//     }

//     return (
//         <div className="image-gallery">
//             {images.map((image) => (
//                 <img
//                     key={image.id}
//                     src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image.url}`}  // Using env variable for image base URL
//                     alt={image.originalName}
//                     style={{ width: '150px', height: 'auto', margin: '10px' }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         console.log('API URL:', process.env.REACT_APP_API_URL);  // Logs the API URL
//         console.log('Image Base URL:', process.env.REACT_APP_IMAGE_BASE_URL);  // Logs the base URL

//         const fetchImages = async () => {
//             try {
//                 const res = await axios.get(`${process.env.REACT_APP_API_URL}`);
//                 setImages(res.data);
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//                 setError('Error fetching images');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchImages();
//     }, []);

//     if (loading) return <p>Loading images...</p>;
//     if (error) return <p>{error}</p>;
//     if (images.length === 0) return <p>No images found.</p>;

//     return (
//         <div className="image-gallery">
//             {images.map((image) => (
//                 <img
//                     key={image.id}
//                     src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image.url}`}
//                     alt={image.originalName}
//                     style={{ width: '150px', height: 'auto', margin: '10px' }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Log the environment variables
//         console.log('API URL:', process.env.REACT_APP_API_URL);
//         console.log('Image Base URL:', process.env.REACT_APP_IMAGE_BASE_URL);

//         const fetchImages = async () => {
//             try {
//                 const res = await axios.get(`${process.env.REACT_APP_API_URL}`);
//                 setImages(res.data);
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//                 setError('Error fetching images');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchImages();
//     }, []);

//     if (loading) return <p>Loading images...</p>;
//     if (error) return <p>{error}</p>;
//     if (images.length === 0) return <p>No images found.</p>;

//     return (
//         <div className="image-gallery">
//             {images.map((image) => (
//                 <img
//                     key={image.id}
//                     src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image.url}`}
//                     alt={image.originalName}
//                     style={{ width: '150px', height: 'auto', margin: '10px' }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // const res = await axios.get('http://localhost:5000/api/files');  // Directly using the API endpoint
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/files`);
                console.log("res.data", res.data)
                setImages(res.data);  // Store the fetched image list
            } catch (err) {
                console.error('Error fetching images:', err);
                setError('Error fetching images');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();  // Trigger API call on component mount
    }, []);

    if (loading) return <p>Loading images...</p>;
    if (error) return <p>{error}</p>;

    if (images.length === 0) {
        return <p>No images found.</p>;
    }

    return (
        <div className="image-gallery">
            {images.map((image) => (
                <img
                    key={image.id}
                    // src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image.url}`} // Use environment variable for the image URL
                    src={`http://localhost:5000${image.url}`}  // Directly forming the image URL here
                    alt={image.originalName}
                    style={{ width: '150px', height: 'auto', margin: '10px' }}
                />
            ))}
        </div>
    );

    // return (
    //     <div className="image-gallery">
    //         {images.map((image) => {
    //             // Construct the full image path using the environment variable
    //             const fullImagePath = `${process.env.REACT_APP_IMAGE_BASE_URLL}${image.url}`;

    //             return (
    //                 <div key={image.id} style={{ margin: '10px' }}>
    //                     <img
    //                         src={fullImagePath}  // Using the constructed full image path
    //                         alt={image.originalName}
    //                         style={{ width: '150px', height: 'auto' }}
    //                     />
    //                     <p>{fullImagePath}</p>  {/* Display the full image path */}
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );
};

export default ImageGallery;
