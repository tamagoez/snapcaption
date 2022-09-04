import { useRef, useEffect } from 'react'
import {speechrecognition} from '../../libs/wsapi'

export default function Liveframe(){
      let lang = 'ja'
  if (typeof window !== 'undefined') {lang = sessionStorage.getItem('cc-lang')!;}
      const scrollBottomRef = useRef<null | HTMLDivElement>(null);
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
  speechrecognition(lang);
    return (
        <div><p className="fixed top-0 right-0 text-neutral/60">ステータス: <span id='status'>待機中</span></p><span id="result_text" className="font-bold text-3xl text-neutral" /><span id="interim" className='text-3xl text-neutral/40 brightness-20' /><div ref={scrollBottomRef}/></div>
    )
}