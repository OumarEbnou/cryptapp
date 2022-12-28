import React, { useState } from 'react';
import axios from 'axios';

const Crypto = () => {
  const [image, setImage] = useState(null);
  const [key, setKey] = useState(null);
  const [iv, setIv] = useState(null);
  const [encryptedImage, setEncryptedImage] = useState(null);
  const [decryptedImage, setDecryptedImage] = useState(null);

  const handleEncrypt = () => {
    // Send a POST request to the /api/crypto endpoint with the image, key, iv, and type parameters
    axios.post('/api/crypto', {
      image,
      key,
      iv,
      type: 'encrypt',
    }).then((response) => {
      // Update the encryptedImage state with the encrypted image data
      setEncryptedImage(response.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleDecrypt = () => {
    // Send a POST request to the /api/crypto endpoint with the image, key, iv, and type parameters
    axios.post('/api/crypto', {
      image: encryptedImage,
      key,
      iv,
      type: 'decrypt',
    }).then((response) => {
      // Update the decryptedImage state with the decrypted image data
      setDecryptedImage(response.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <input type="file" onChange={(event) => setImage(event.target.files[0])} />
      <input type="text" onChange={(event) => setKey(event.target.value)} />
      <input type="text" onChange={(event) => setIv(event.target.value)} />
      <button type="button" onClick={handleEncrypt}>Encrypt</button>
      <button type="button" onClick={handleDecrypt}>Decrypt</button>
      {encryptedImage && <img src={encryptedImage} alt="Encrypted image" />}
      {decryptedImage && <img src={decryptedImage} alt="Decrypted image" />}
    </div>
  );
};

export default Crypto;
