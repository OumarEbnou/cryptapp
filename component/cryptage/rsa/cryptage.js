import React, { useRef, useState } from 'react'
import RSA from '../../../helper/rsa2/rsa'

function Cryptage() {
    const [msg,setMsg]=useState()
    const t1=useRef()
    const t2=useRef()
    const txt=useRef()



    function crypter(event) {
        event.preventDefault()
        const e=t1.current.value
        const n=t2.current.value
        var rsa = new RSA( {publicKey: e+','+n})

        const msg=txt.current.value
        setMsg(rsa.encrypt(msg))
    }
  return (
    <div className="container " >
        <span class="d-block p-2 bg-info text-white">Cryptage</span>

        <div className="row">
            <div className="col-12">
                <form className="d-flex">
                    <input ref={t1} className="form-control " type="text" placeholder="cle public e" />
                    <input ref={t2} className="form-control " type="text" placeholder="cle public n" />
                    <input ref={txt} className="form-control " type="textarea" placeholder="Message" />
                    <button onClick={crypter} className="btn btn-outline-success" type="submit">Crypter</button>
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

export default Cryptage