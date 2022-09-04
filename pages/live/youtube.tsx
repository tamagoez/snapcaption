import Head from 'next/head'
import {speechrecognition} from '../../libs/wsapi'
// import {MdOutlinePlaylistPlay} from 'react-icons/md'

export default function YouTubeCC() {
  let lang = 'ja'
  if (typeof window !== 'undefined') {lang = sessionStorage.getItem('cc-lang')!}
  speechrecognition(lang);
  return (<>
      <Head>
        <title>YouTube - SnapCaption</title>
        <meta name="description" content="Generated YouTube caption rapidly!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p id='status'>待機中</p><button onClick={speechrecognition(lang)}>reload</button>
      <div><span id="result_text" className="font-bold text-3xl text-slate-700" /><span id="interim" className='text-3xl text-slate-500' /></div>
    </>)
}
