import React, { useState } from 'react'
import Cryptage from './textcrypt'
import DecPrivatePage from './filedecrypt'
import Decryptage from './textdecrypt'
import PrivatePage from './filecrypt'


const imageformat=['png','gif','jpg','jpeg','svg','bmp','ico','webp','jfif']
const txtformat=['txt','html','css','js']
const applicationformat=['json','pdf','doc','docx','xls','xlsx','ppt','pptx']
const audioformat=['mp3','wav','aac','ogg' ,'flac','m4a','m4b']


function Cryptographie({algo}) {
    const [filee,setFileUrl]=useState([])
    const [type,setType]=useState(null)
    const [text, setText] = useState('');
    function showFile(file,type,fileName){
      var filUrl = URL.createObjectURL(file);
      console.log(filUrl);
      fileName=fileName.substr(0,fileName.lastIndexOf('.'))
      console.log(fileName);
      if (txtformat.includes(type)) {
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
        <PrivatePage algo={algo} showFile={showFile} />

        </div>
        <div className="col-4">
            {type && <a href={filee[1]} className="stretched-link text-danger" download={filee[2]+"result"} > <i>click for Download file : </i>{filee[2]+"result"}<br/></a> }
            {imageformat.includes(type) &&  <img src={filee[1]} style={{width: '400px'}} alt="" />}
            {txtformat.includes(type) && <pre>{text}</pre>}
            {audioformat.includes(type) && (
              <audio controls src={filee[1]}>
                Your browser does not support the audio element.
              </audio>
            )}
        </div>
        <div className="col-4">
        <DecPrivatePage algo={algo} showFile={showFile} />

        </div>
      </div>
      <div className="row">
        <h1></h1>
      </div>
    <div className="row">
      <Cryptage algo={algo} />
        <Decryptage algo={algo} />
    </div>

    </div>
  )
}

export default Cryptographie
