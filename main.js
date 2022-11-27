console.log("main.js!!");

let snd1 = null //サウンド１
let snd2 = null //サウンド２
let snd3 = null //サウンド３
let snd4 = null //サウンド４
let snd5 = null //サウンド５
let snd6 = null //サウンド６
let snd7 = null //サウンド７
let snd8 = null //サウンド８
let snd9 = null //サウンド９


// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	//サウンド１オブジェクトを作る
	snd1 = new Howl({
		src:["./sounds/taiko1.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd1)

	snd2 = new Howl({
		src:["./sounds/taiko2.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd2)

	snd3 = new Howl({
		src:["./sounds/taiko3.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd3)

	snd4 = new Howl({
		src:["./sounds/don.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd4)

	snd5 = new Howl({
		src:["./sounds/doramu.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd5)

	snd6 = new Howl({
		src:["./sounds/roru.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd6)

	snd7 = new Howl({
		src:["./sounds/piano.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd7)

	snd8 = new Howl({
		src:["./sounds/suzu.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd8)

	snd9 = new Howl({
		src:["./sounds/tyan.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd9)

	$("#snd1").click(() => {
		snd1.play()
	})

	$("#snd2").click(() => {
		snd2.play()
	})
	
	$("#snd3").click(() => {
		snd3.play()
	})

	$("#snd4").click(() => {
		snd4.play()
	})

	$("#snd5").click(() => {
		snd5.play()
	})

	$("#snd6").click(() => {
		snd6.play()
	})

	$("#snd7").click(() => {
		snd7.play()
	})

	$("#snd8").click(() => {
		snd8.play()
	})

	$("#snd9").click(() => {
		snd9.play()
	})

});