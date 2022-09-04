import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SnapCaption</title>
        <meta name="description" content="Generated caption rapidly!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="hero min-h-screen">
   <img src="https://placeimg.com/1000/800/arch" className='h-screen w-full' />
  <div className="hero-overlay bg-opacity-70" />
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">SnapCaption</h1>
      <p className="mb-5">Caption your YouTube Stream, voice and so on!</p>
      <button className="btn btn-primary hover:animate-pulse"><Link href="/new">Start New Caption</Link></button>
    </div>
  </div>
  </div>
    </>
  )
}

export default Home
