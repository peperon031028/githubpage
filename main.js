console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);// JSONオブジェクトに変換
			console.log(arr);// データ確認
			console.log(arr[0] ["publishingOffice"]) ;　// 気象庁
			console.log(arr[0] ["reportDatetime"]) ;　// 発令された日時
			console.log(arr[0] ["timeSeries"] [0]) ;　// ０番目のデータ
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [0] ["area"] ["name"]) ;　// 東京地方
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [0] ["waves"] ["0"]) ;　// 0.5メートル
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [0] ["weathers"] ["0"]) ;　// 晴れ　時々　曇り
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [0] ["winds"] ["0"]) ;　// 南西の風
			
			// 伊豆諸島北部
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [1] ["area"] ["name"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [1] ["waves"] ["0"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [1] ["weathers"] ["0"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [1] ["winds"] ["0"]) ;　

			// 伊豆諸島南部
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [2] ["area"] ["name"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [2] ["waves"] ["0"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [2] ["weathers"] ["0"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [2] ["winds"] ["0"]) ;　

			// 小笠原諸島
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [3] ["area"] ["name"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [3] ["waves"] ["0"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [3] ["weathers"] ["0"]) ;　
			console.log(arr[0] ["timeSeries"] [0] ["areas"] [3] ["winds"] ["0"]) ;　

			//東京地方の今日の天気をhtmlでjQueryを使って表示する

			//タグの中身を書き換える
			$("#tenki1").click (() => {
				$("#my_id").text("書き換えてあります");
			$("#my_id3").text("雨");
			$("#my_id4").text("のち曇り");
			});
			

			$("#tenki2").click (() => {
				console.log("東京１１月１０日")
				console.log("晴れ")
				console.log("16℃")
				console.log("降水確率：１０％")
				console.log("湿度６０％")
				console.log("風速:0m/s")
			});


			//東京地方の今日の天気のアイコンをjQueryを使って表示する
			
		});
	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});