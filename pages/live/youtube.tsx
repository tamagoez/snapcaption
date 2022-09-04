import Head from 'next/head'
// import {MdOutlinePlaylistPlay} from 'react-icons/md'
import { useState } from 'react'

export default function YouTubeCC() {
  const [yurl, setYurl] = useState("")
  function kenter(e: any) {if (e.keyCode === 13) console.log(e.target.value); setYurl((e.target.value).split('=')?.[1]);}
  return (<>
      <Head>
        <title>YouTube - SnapCaption</title>
        <meta name="description" content="Generated YouTube caption rapidly!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div>{yurl! === "" ? <input id="yurlinput" onKeyPress={(e) => kenter(e)} type="url" placeholder="YouTube Video URL" className="input input-bordered w-full max-w-xs"  /> : <div className="sticky top-0 w-full"><iframe width="100%" height="500" src={`https://www.youtube-nocookie.com/embed/${yurl}?rel=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /></div>}</div>
       <iframe width="100%" height="10%" src="/live/liveframe" frameBorder={0} title="SnapCaption" />
    </>)
}
