import React from 'react'
import { useImmerReducer } from 'use-immer'

import Head from 'next/head'
import Image from 'next/image'

import Init from './Components/init'
import Layout from './layouts/layout'

const Home = () => {

  return (
    <Layout >
      <Init />
    </Layout>
  )
}

export default Home