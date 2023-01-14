import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import Cryptographie from '../../component/cryptage/cryptographie'
import AESCipher from '../../helper/aes/aes'
import rsaInstance from '../../helper/rsa2/rsainst'

function InterfaceUser() {
    const router =useRouter()
    const idf= router.query.id
    var algo
    if (idf=='RSA') {
      algo = rsaInstance()
    } else {
       algo = new AESCipher();

    }

  return (
    <Fragment>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
    <div className='border border-primary' style={{width: '100%'}}>

      <div className="row ">
          <div className="col-12 border-end">
            <span class="d-block p-2 bg-success text-white">{idf}</span>
              <Cryptographie algo={algo}/>
          </div>

      </div>
    </div>
  </Fragment>
  )
}

export default InterfaceUser