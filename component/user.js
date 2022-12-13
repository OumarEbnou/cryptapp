import Link from 'next/link'
import React from 'react'

function User({name,img,userId}) {
  return (
             <div className="col-lg-6">

                  <div className="card" style={{width: '18rem',marginLeft: '200px',marginTop:'200px'}}>
                    <Link href= {`/userInterface/${userId}`} >
                       <img src={img} alt="avatar" className="card-img-top"/>
                    </Link>
                    <div className="card-body">
                      <p className="card-text">{name}</p>
                    </div>
                  </div>
            </div>
  )
}

export default User