console.log("main.js!!");

let counter = 1; //カウンター
let interId = -1 //インターバルID

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	$("#my_counter").text(counter);
	//--------------------------------	

	//TODO2 ボタン　"Start" -> "stop" -> "start"
	$("#my_btn2").click(()=>{
		clearInterval(interId);
	})

	//---------------------------

	//TODO3 初期化する
	$("#my_btn3").click(()=>{
		clearInterval(interId);

　　　　　counter = 1;

		$("#my_counter").text(counter);


		 //counter = 1;
	})

	//----------------------------------
//１足す
$("#my_btn1").click(()=>{

	interId = setInterval(() => {
		//console.log("実行中です")
		counter += 1; //カウンターに+1
		//console.log(counter);
		$("#my_counter").text(counter);
	}, 100);
	
})

	//2倍にする
	$("#my_btn4").click(()=>{

		interId = setInterval(() => {
			//console.log("実行中です")
			counter *= 2; //カウンターに+1
			//console.log(counter);
			$("#my_counter").text(counter);
		}, 100);
		
	})

   //2で割る
	$("#my_btn5").click(()=>{

		interId = setInterval(() => {
			//console.log("実行中です")
			counter *= 5; 
			//console.log(counter);
			$("#my_counter").text(counter);
		}, 100);
		
	})

});
