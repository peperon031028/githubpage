console.log("main.js!!");

let counter = 1; //カウンター
let interId = -1 //インターバルID

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	$("#my_counter").text(counter);

	//定期実行
	/*setInterval(() => {
		console.log("実行中です")
		counter += 1; //カウンターに+1
		console.log(counter);
		$("#my_counter").text(counter);
	}, 100);*/

	//TODO1 クリックで開始、クリックで停止、そして、クリックで開始...

	if(clearInterval(interId)){
		$("#my_btn").click(()=>{
		interId = setInterval(() => {
			//console.log("実行中です")
			counter += 1; //カウンターに+1
			//console.log(counter);
			$("#my_counter").text(counter);
		}, 100);
		console.log("IDは",interId)
	})
	}

	//--------------------------------	

	//TODO2 ボタン　"Start" -> "stop" -> "start"
	$("#my_btn2").click(()=>{
		clearInterval(interId);
	})

	//---------------------------

	//TODO3 初期化する
	$("#my_btn3").click(()=>{
		clearInterval(interId);

		interId = setInterval(() => {
			//console.log("実行中です")
			counter = 1; //カウンターを1
			//console.log(counter);
			$("#my_counter").text(counter);
		}, 100);

		 //counter = 1;
	})

	//----------------------------------


	$("#my_btn").click(()=>{
		//もしIDがマイナスだったら
		if(interId < 0){
			//定期実行
			interId = setInterval(() => {
				//console.log("実行中です")
				counter += 1; //カウンターに+1
				//console.log(counter);
				$("#my_counter").text(counter);
			}, 100);
			console.log("IDは",interId)
			$("#my_btn").text("start")
		}else{
			//定期実行停止
			clearInterval(interId);
			interId = -1 //初期化
			$("#my_btn").text("start");
		}		
	})

});
