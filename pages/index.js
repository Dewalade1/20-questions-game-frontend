import Head from 'next/head'
import Image from 'next/image'

import Init from './Components/init'
import Layout from './layouts/layout'

export default function Home() {

  return (
    <Layout >
    <div>
      <Init />
      </div>
    </Layout>
  )
}
