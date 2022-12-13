import React, { useRef, useState } from 'react'
import generateur from '../../../helper/RSA/generateur';
import RSA from '../../../helper/rsa2/rsa'
function Generate() {
    const [err,setErr]=useState(false)
    const [cles,setCles]=useState({})
    const p1 = useRef();
    const p2 = useRef();
    var rsa = new RSA()
    function genere(e){
        e.preventDefault();

        if (!p1.current.value || !p2.current.value) {
            setErr(true)
        }
        setCles(rsa.findKey(p1.current.value ,p2.current.value))
    }

  return (

    <div className="container mb-2">
        <div className="row">
        <span class="d-block p-2 bg-warning text-dark">Entrer deux nombre premiere pour generer vos cles</span>

        </div>
        <div className="row">

            <form className="d-flex">
                <input ref={p1} className="form-control " type="text" placeholder="p1" />
                <input ref={p2} type="text" className="form-control"  placeholder="p2"/>
                <button onClick={genere} className="btn btn-outline-success" type="submit">Génére</button>
            </form>


        </div>
        <div className="row">
            <div className="col-12">
            <ul className="list-group list-group-items-success" >
                <li style={{fontSize: "1,5rem",width: '100%'}} className="list-group-item overflow-visible">
                    <span className="badge bg-secondary">cle public: </span><br/>
                    <span className="badge bg-secondary">e: </span>{cles.publicKey? cles.publicKey.e:""}<br/>
                    <span className="badge bg-secondary">n: </span>{cles.publicKey? cles.publicKey.n:""}<br/>
                </li>
                <li style={{fontSize: "1,5rem",width: '100%'}} className="list-group-item">
                    <span className="badge bg-secondary">cle prive: </span><br/>
                    <span className="badge bg-secondary">d: </span>{cles.publicKey? cles.privateKey.d:""}<br/>
                    <span className="badge bg-secondary">n: </span>{cles.publicKey? cles.privateKey.n:""}<br/>
                </li>
            </ul>
            </div>
        </div>
        <div className="row">
            {err? <div className="alert alert-danger" role="alert"> Vous avez oublier un champ</div>:""}
        </div>
    </div>

  )
}

export default Generate