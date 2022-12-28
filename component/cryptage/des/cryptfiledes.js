import React, { useState } from 'react';

function Mycrypt({kay,iv}) {
  const [file, setFile] = useState(null);
  const [encryptedFile, setEncryptedFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a FormData object to send the file in the request body
    const formData = new FormData();
    formData.append('file', file);
    formData.append('key', kay);
    formData.append('iv', iv);

    // Send a POST request to the API with the file
    fetch('/api/multer', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.blob())
      .then((encryptedBlob) => {
        // Set the encrypted file in state
        setEncryptedFile(encryptedBlob);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Encrypt</button>
      {encryptedFile && (
        // Display the encrypted file in an <a> element
        <a href={URL.createObjectURL(encryptedFile)} download>
          Download encrypted file
        </a>
      )}
    </form>
  );
}

export default Mycrypt
