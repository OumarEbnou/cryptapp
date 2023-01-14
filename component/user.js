import Link from 'next/link'
import React from 'react'
import Img1 from '../uploads/blowfish.png'

function User({name,img}) {
  return (
             <div className="col-lg-6">

                  <div className="card" style={{width: '18rem',height: '16rem',marginLeft: '200px',marginTop:'200px'}}>
                    <Link href= {`/userInterface/${name}`} >
                       <img src={img} style={{width: '18rem',height: '12rem'}} alt="avatar" className="card-img-top" />
                    </Link>
                    <div className="card-body">
                      <p className="card-text">{name}</p>
                    </div>
                  </div>
            </div>
  )
}

export default User