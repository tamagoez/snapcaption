// https://www.twilio.com/blog/speech-recognition-browser-web-speech-api-jp
// https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API
// https://monomonotech.jp/kurage/iot/webspeechapi_voice_recognition.html
export function speechrecognition(lang: string) {
    // https://stackoverflow.com/questions/38087013/angular2-web-speech-api-voice-recognition
    export interface IWindow extends Window {
      webkitSpeechRecognition: any;
    }
    if (typeof window !== "undefined") {
        const {webkitSpeechRecognition} : IWindow = <IWindow>window;
        const SpeechRecognition = (window as any).SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition(); 
    recognition.onresult = console.log; 
    recognition.lang = 'ja';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.onsoundstart = function(){
    document.getElementById('status').innerHTML = "認識中";
    };
    recognition.onnomatch = function(){
    document.getElementById('status').innerHTML = "もう一度試してください";
    };
    recognition.onerror= function(){
    document.getElementById('status').innerHTML = "エラー";
    speechrecognition(lang)
    };
    recognition.onsoundend = function(){
    document.getElementById('status').innerHTML = "停止中";
    speechrecognition(lang)
    };
    recognition.onresult = function(event){
        var results = event.results;
        for (var i = event.resultIndex; i<results.length; i++){
        if(results[i].isFinal) {
            document.getElementById('result_text').innerHTML = document.getElementById('result_text').innerHTML + results[i][0].transcript + ".<br />";
            document.getElementById('interim').innerHTML = "";
        }
        else
            document.getElementById('interim').innerHTML = results[i][0].transcript;
        }
    }
    recognition.start();
    }
}
