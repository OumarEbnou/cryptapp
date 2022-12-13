import React, { useRef, useState } from 'react'
import AES from '../../../helper/DES/aes';


function DecryptageAES() {
    const [msg,setMsg]=useState()
    const t1=useRef()
    const txt=useRef()

    function decrypter(event) {
        event.preventDefault()
        const key=t1.current.value
        const msg=txt.current.value
        const crypt = new AES.Crypto(key)
        setMsg(crypt.decrypt(msg))
    }
  return (
    <div className="container " >
        <span class="d-block p-2 bg-primary text-white">Décryptage</span>

        <div className="row">
            <div className="col-12">
                <form className="d-flex">
                    <input ref={t1} className="form-control " type="text" placeholder="cle" />
                    <input ref={txt} className="form-control " type="textarea" placeholder="Message" />
                    <button onClick={decrypter} className="btn btn-outline-success" type="submit">Decrypter</button>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <span className="badge bg-secondary">Message Decrypté: </span><br/>
                {msg? msg:''}
            </div>
        </div>
    </div>
  )
}

export default DecryptageAES