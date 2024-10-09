// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery'; // Adjust the path if needed

const App = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      // const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const backendUrl = process.env.REACT_APP_API_URL;
      const res = await axios.post(`${backendUrl}/files/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(res.data.message);
    } catch (err) {
      // Check if err.response exists and handle accordingly
      if (err.response) {
        // If the response exists, log the error and provide a message
        console.error(err.response.data);  // Log detailed error response
        setMessage('Error uploading image: ' + (err.response.data.message || 'Unknown error'));
      } else {
        // If there is no response, it may be a network error
        console.error('Network error:', err);  // Log the entire error object
        setMessage('Error uploading image: Network error or server not reachable');
      }
    }
  };

  /////////////////

  return (
    <div>
      <h2>Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
      <h2>Image Gallery</h2>
      <ImageGallery />
    </div>
  );
};

export default App;

