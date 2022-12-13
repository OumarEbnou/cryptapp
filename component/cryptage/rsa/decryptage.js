import React, { useRef, useState } from 'react'
import RSA from '../../../helper/rsa2/rsa'

function Decryptage() {
    const [msg,setMsg]=useState()
    const t1=useRef()
    const t2=useRef()
    const txt=useRef()



    function decrypter(event) {
        event.preventDefault()
        const d=t1.current.value
        const n=t2.current.value
        var rsa = new RSA( {privateKey: d+','+n})

        const msg=txt.current.value
        setMsg(rsa.decrypt(msg))
    }
  return (
    <div className="container " >
        <span class="d-block p-2 bg-primary text-white">Décryptage</span>

        <div className="row">
            <div className="col-12">
                <form className="d-flex">
                    <input ref={t1} className="form-control " type="text" placeholder="clé privé d" />
                    <input ref={t2} className="form-control " type="text" placeholder="clé privé n" />
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