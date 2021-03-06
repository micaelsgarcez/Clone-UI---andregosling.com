import Head from 'next/head'
import Image from 'next/image'

import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className='relative'>
        <Head>
          <title>Clone UI - andregosling.com</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='container mx-auto text-white'>
          <h1 className='text-3xl font-bold underline'>André Gosling Dias|</h1>
        </main>
      </div>
    </Layout>
  )
}
