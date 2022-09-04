import Header from '../components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function LiveCC(){
    return (
        <>
        <Header />
        <Head>
        <title>New - SnapCaption</title>
        <meta name="description" content="Generated caption rapidly!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <select className="select select-bordered w-full" onChange={(e) => sessionStorage.setItem("cc-lang", e.target.value)}>
        <option disabled selected>Caption Language</option>
        <option value="ja">日本語 (ja)</option>
        <option value="en-US">English (en-US)</option>
        <option value="en-US">English (en-UK)</option>
    </select>
          <div className="flex flex-col w-full lg:flex-row justify-center px-2">
              <Link href="/live/mic" passHref>
            <div className="grid card lg:w-96 h-144 w-full bg-base-100 shadow-xl rounded-box">
                <figure><Image src="/mic_pexels-164960.jpg" alt="Mic" width='6000' height='4000' quality={2} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mic</h2>
                    <p>Start caption from mic(Also, you can make YouTube video caption)</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">New Mic Caption</button>
                    </div>
                </div>
            </div>
            </Link>
  <div className="divider lg:divider-horizontal">OR</div> 
  <Link href="/live/youtube" passHref>
  <div className="grid card lg:w-96 h-144 w-full bg-base-100 shadow-xl rounded-box">
                <figure><img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="YouTube" /></figure>
                <div className="card-body">
                    <h2 className="card-title">YouTube</h2>
                    <p>Show YouTube frame(for smartphone)</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">New YouTube Caption</button>
                    </div>
                </div>
            </div>
            </Link>
            <div className='pb-4' />
</div>
        </>
    )
}
