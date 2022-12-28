import React, { useRef, useState } from 'react'

function Decryptage({rsa}) {
    const [msg,setMsg]=useState()
    const txt=useRef()
    function decrypter(event) {
        event.preventDefault()

        const msg=txt.current.value
        setMsg(rsa.decrypt(msg))
    }
  return (
    <div className="container " >
        <span class="d-block p-2 bg-primary text-white">Décryptage</span>

        <div className="row">
            <div className="col-12">
                <form className="d-flex">
                     <input ref={txt} className="form-control " type="textarea" placeholder="Message" />
                    <button onClick={decrypter} className="btn btn-outline-success" type="submit">Decrypter</button>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <span className="badge bg-secondary">Message crypté: </span><br/>
                {msg? msg:''}
            </div>
        </div>
    </div>
  )
}

export default Decryptage