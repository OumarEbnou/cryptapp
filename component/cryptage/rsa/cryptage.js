import React, { useRef, useState } from 'react'
import RSA from '../../../helper/rsa2/rsa'
import rsaInstance from '../../../helper/rsa2/rsainst'

function Cryptage({rsa}) {
    const [msg,setMsg]=useState()
    const txt=useRef()

    function crypter(event) {
        event.preventDefault()
        const msg=txt.current.value
        setMsg(rsa.encrypt(msg))
    }
  return (
    <div className="container " >
        <span class="d-block p-2 bg-info text-white">Cryptage</span>

        <div className="row">
            <div className="col-12">
                <form className="d-flex">
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