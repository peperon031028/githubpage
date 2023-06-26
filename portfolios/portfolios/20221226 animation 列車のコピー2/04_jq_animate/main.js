console.log("main.js!!");

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
if ('SpeechRecognition' in window) {
  console.log("ユーザのブラウザは音声合成に対応しています。")
} else {
  console.log("ユーザのブラウザは音声合成に対応していません。")
}

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  console.log(event);
}
recognition.start();