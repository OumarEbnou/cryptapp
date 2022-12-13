import Head from 'next/head'
import React, { Fragment } from 'react'
import Messageri from '../../../component/messagerie/messageri'

function Msgeri() {
  return (
    <Fragment>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <Messageri/>
    </Fragment>

  )
}

export default Msgeri