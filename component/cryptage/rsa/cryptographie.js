import React, { useState } from 'react'
import Cryptage from './cryptage'
import DecPrivatePage from './decptfile'
import Decryptage from './decryptage'
import PrivatePage from './fichier'

function Cryptographie({rsa}) {
    const [filee,setFileUrl]=useState([])
    const [type,setType]=useState(null)
    const [text, setText] = useState('');
    function showFile(file,type,fileName){
      var filUrl = URL.createObjectURL(file);
      console.log("houna ok ok "+type);
      fileName=fileName.substr(0,fileName.lastIndexOf('.'))
      console.log(fileName);
      if (type=='txt') {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          setText(event.target.result);
        };
        fileReader.readAsText(file);
      }
        setFileUrl([file,filUrl,fileName])
        setType(type)
    }
  return (
    <div>
      <div className="row">
        <div className="col-4">
        <PrivatePage rsa={rsa} showFile={showFile} />

        </div>
        <div className="col-4">
            {type=='jpeg' && <a href={filee[1]} download={filee[2]+"result"} > {filee[2]}<br/> <img src={filee[1]} style={{width: '400px'}} alt="" /></a>}
            {type=='txt' && (<a href={filee[1]} download>{filee[2]+"result"}</a>)}<br/>
            {type=='txt' && <pre>{text}</pre>}
            {type=='m4a' && (
              <audio controls src={filee[1]}>
                Your browser does not support the audio element.
              </audio>
            )}
            {type=='m4a' && <a href={filee[1]} download={filee[2]+"result"}><br/>{filee[2]}</a>}
        </div>
        <div className="col-4">
        <DecPrivatePage rsa={rsa} showFile={showFile} />

        </div>
      </div>
      <div className="row">
        <h1></h1>
      </div>
    <div className="row">
      <Cryptage rsa={rsa} />
        <Decryptage rsa={rsa} />
    </div>

    </div>
  )
}

export default Cryptographie