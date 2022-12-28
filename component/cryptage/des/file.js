import React, { useState } from 'react';
import axios from 'axios';

const EncryptDecrypt = ({kay,iv}) => {
  const [image, setImage] = useState(null);
  const [type, setType] = useState('encrypt');
  const [result, setResult] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);


  const handleFileChange = (event) => {

    const i = event.target.files[0];

    setImage(i);
    setCreateObjectURL(URL.createObjectURL(i));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('key', kay);
    formData.append('iv', iv);
    formData.append('type', type);

    const dataa={'image': image,'key': kay,'iv': iv ,'type': type}

      // Send a POST request to the /api/crypto endpoint with the image, key, iv, and type parameters
      await axios.post('/api/dse', dataa).then((response) => {
        // Update the decryptedImage state with the decrypted image data
        var don=response.data
        console.log('====================================');
        console.log(don);
        console.log('====================================');
        //setCreateObjectURL(URL.createObjectURL(don));
        setResult(don)
      }).catch((error) => {
        console.error(error);
      });


  };

  return (
    <div>
          <img src={createObjectURL} style={{borderRadius: '4px',padding: "5px",width: "150px"}} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleFileChange} />
          <br />
          <label htmlFor="type">Type:</label>
          <select id="type" value={type} onChange={(event) => {setType(event.target.value)}}>
            <option value="encrypt">Encrypt</option>
            <option value="decrypt">Decrypt</option>
          </select>
          <br />
          <button type="submit">Submit</button>
          {createObjectURL && <a href={createObjectURL} download> my crypted image</a>}
      </form>
    </div>

  );
};

export default EncryptDecrypt;
