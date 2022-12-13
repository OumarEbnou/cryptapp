import React, { useRef, useState } from 'react'
import AES from '../../../helper/DES/aes';
import '../../../helper/DES/aes';
function GenerateAESKey() {
    const [cles,setCles]=useState()

    function genere(e){
        e.preventDefault();

        setCles(AES.generateKey())
    }

  return (

    <div className="container mb-2">

        <div className="row">
            <div className="col-2">
                <form className="d-flex">
                    <button onClick={genere} className="btn btn-outline-success" type="submit">Génére</button>
                </form>
            </div>
            <div className="col-10">
                <ul className="list-group list-group-items-success" >
                    <li style={{fontSize: "1,5rem",width: '100%'}} className="list-group-item overflow-visible">
                        <span className="badge bg-secondary">Cle: </span>{cles? cles:""}<br/>
                    </li>
                </ul>
            </div>
        </div>

    </div>

  )
}

export default GenerateAESKey