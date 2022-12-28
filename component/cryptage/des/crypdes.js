import EncryptDecrypt from './file'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Mydecrypt from './decryptfiledes';
import Mycrypt from './cryptfiledes';

function Crypdes() {
    const [iv, setIV] = useState('');
    const [key, setKey] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('/api/generate-iv-key');
            setIV(response.data.iv);
            setKey(response.data.key);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);

  return (
    <div>
        <EncryptDecrypt kay={key} iv={iv}/>
        <Mycrypt kay={key} iv={iv} />

        < Mydecrypt/>

  </div>

  )
}

export default Crypdes