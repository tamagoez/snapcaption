import Head from 'next/head'
import {speechrecognition} from '../../libs/wsapi'
// import Link from 'next/link'
// import {MdOutlinePlaylistPlay} from 'react-icons/md'
import { useRef, useEffect } from 'react'

export default function MicCC() {
  let lang = 'ja'
  let popupstatus = 'false'
  const scrollBottomRef = useRef<null | HTMLDivElement>(null);
  if (typeof window !== 'undefined') {lang = sessionStorage.getItem('cc-lang')!; popupstatus = sessionStorage.getItem("popup")!}
  speechrecognition(lang);
  useEffect(() => {
      const intervalId = setInterval(() => {
      if (scrollBottomRef.current != null) {
      scrollBottomRef.current?.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });}
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
    
  }, []);
  return (<>
      <Head>
        <title>YouTube - SnapCaption</title>
        <meta name="description" content="Generated YouTube caption rapidly!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {popupstatus === "true" ? "" : <button className="btn btn-ghost" onClick={() => window.open('/live/mic', null, 'width=1000,height=200,toolbar=no,menubar=no,scrollbars=yes')}>popup</button>}
      <span>ステータス: <span id='status'>待機中</span></span>
      <div><span id="result_text" className="font-bold text-3xl text-slate-700" /><span id="interim" className='text-3xl text-slate-500' /><div ref={scrollBottomRef}/></div>
    </>)
}
