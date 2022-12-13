import React, { useRef, useState } from 'react'
import RSA from '../../../helper/rsa2/rsa'

function Gbpk() {
    const [cles,setCles]=useState([])
    const t1=useRef()

    var rsa = new RSA()

    function generePrimaryKey(e) {
        e.preventDefault()
        const tv=t1.current.value
        const cle1=rsa.generatePrimeNumber(tv)
        const cle2=rsa.generatePrimeNumber(tv)
        setCles([cle1,cle2])

    }
  return (
    <div className="container " >
        <div className="row">
            <div className="col-12">
                <form className="d-flex">
                    <input ref={t1} className="form-control" type="number" placeholder="Taille de cles" />
                    <button onClick={generePrimaryKey} className="btn btn-outline-success" type="submit">Genere deux grand generePrimaryKey</button>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <ul className="list-group list-group-items-success" >
                    <li style={{fontSize: "1,5rem",width: '100%'}} className="list-group-item overflow-visible">
                        <span className="badge bg-secondary">1ere grand nombre premier: </span>{cles[0]? cles[0]:''}<br/>
                    </li>
                    <li style={{fontSize: "1,5rem",width: '100%'}} className="list-group-item">
                        <span className="badge bg-secondary">2eme grand nombre premier: </span>{cles[0]? cles[1]:''}<br/>
                    </li>
                </ul>

                <p style={{fontSize: "0.7rem"}}></p>
            </div>
        </div>
    </div>

  )
}

export default Gbpk