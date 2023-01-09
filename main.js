console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");
	
	//Windowsに対応させる
	SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
if ('SpeechRecognition' in window) {
  console.log("ユーザのブラウザは音声合成に対応しています。")
} else {
  console.log("ユーザのブラウザは音声合成に対応していません。")
}

//返される結果の中身を確かめる
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  console.log(event);
}
recognition.start();
});