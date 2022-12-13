import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import CryptageAes from '../../component/cryptage/des/cryptage'
import DecryptageAES from '../../component/cryptage/des/decryptage'
import GenerateAESKey from '../../component/cryptage/des/generate'
import Cryptage from '../../component/cryptage/rsa/cryptage'
import Decryptage from '../../component/cryptage/rsa/decryptage'
import Gbpk from '../../component/cryptage/rsa/gbpk'
import Generate from '../../component/cryptage/rsa/generate'
import Messageri from '../../component/messagerie/messageri'

function InterfaceUser() {
    const router =useRouter()
    const idf= router.query.id

  return (
    <Fragment>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
    <div className='border border-primary' style={{width: '100%'}}>

      <div className="row ">
          <div className="col-6 border-end">
            <span class="d-block p-2 bg-success text-white">RSA</span>

              <Cryptage/>
              <Decryptage/>
          </div>
          <div className="col-6 border-end">
            <span class="d-block p-2 bg-success text-white">DES</span>
            <GenerateAESKey/>
            <CryptageAes/>
            <DecryptageAES/>
            <Messageri user={idf}/>
          </div>

      </div>
    </div>
  </Fragment>
  )
}

export default InterfaceUser