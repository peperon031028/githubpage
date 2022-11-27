console.log("main.js!!");



// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!



	//----------------------->
	const option = {responseType: "blob"};
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);// JSONオブジェクトに変換
			console.log(arr);// データ確認
			console.log(arr[0]);// 0番目のデータ
			console.log(arr[0]["publishingOffice"]);// 気象庁
			console.log(arr[0]["reportDatetime"]);// 発令された日時
			console.log(arr[0]["timeSeries"][0]);// 0番目のデータ
			// 東京地方
			console.log(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"]);// 東京地方
			console.log(arr[0]["timeSeries"][0]["areas"][0]["weathers"][0])
			console.log(arr[0]["timeSeries"][0]);// TODO:0.5メートル
			console.log(arr[0]["timeSeries"][0]);// TODO:晴れ　時々　くもり
			console.log(arr[0]["timeSeries"][0]);// TODO:南西の風
			// TODO:伊豆諸島北部
			console.log(arr[0]["timeSeries"][0]["areas"][1]);// 伊豆諸島北部
			// TODO:伊豆諸島南部
			// TODO:小笠原諸島
			console.log(arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0])
			

			// TODO: 東京地方の今日の天気を、HTMLに表示する!!(jQuery使ってね)
			// TODO: 東京地方の今日の天気を、天気アイコンで表示する!!(jQuery使ってね)
			console.log(arr[1]["timeSeries"][1]["areas"][0]["tempsMax"][1])
			console.log(arr[1]["timeSeries"][1]["areas"][0]["tempsMin"][1])
			
			//お天気コードをとって、HTML上に対応天気マークを表示
			//昼と夜を２種類出す
			//画像ファイルでも表示せよ
			$(document).ready(()=>{

				var max = arr[1]["timeSeries"][1]["areas"][0]["tempsMax"][1]
			var min = arr[1]["timeSeries"][1]["areas"][0]["tempsMin"][1]

				$('#p1').html(`最高気温は${max}℃`);
				$('#p2').html(`最低気温は${min}℃`);

				var tnk = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0])
				console.log(tnk)

				if (tnk == 100 || tnk == 123 || tnk == 124 || tnk == 130 || tnk == 131){
					$('#aikon').html('<img src="images/太陽.png" alt="サンプル画像">');
					$('#tenki').html("晴れ");
				}
				else if (tnk == 101 || tnk == 110 || tnk == 111 || tnk == 132){
					$('#aikon').html('<img src="images/曇りのち晴れ.png" alt="サンプル画像">');
					$('#tenki').html("晴れ時々曇り");
				}
				else if (tnk == 102 || tnk == 103 || tnk == 106 || tnk == 107 || tnk == 108 || tnk == 120 || tnk == 140){
					$('#aikon').html('<img src="images/晴れのち雨.png" alt="サンプル画像">');
					$('#tenki').html("晴れ時々雨");
				}
				else if (tnk == 104 || tnk == 105 || tnk == 115 || tnk == 116 || tnk == 117 || tnk == 160 || tnk == 161 || tnk == 181){
				$('#aikon').html('<img src="images/雪と晴れ.png" alt="サンプル画像">');
				$('#tenki').html("晴れ一時雪");
				}
				else if (tnk == 112 || tnk == 113 || tnk == 114 || tnk == 118 || tnk == 119 || tnk == 122 || tnk == 125 || tnk == 126 || tnk == 127 || tnk == 128 || tnk == 129){
				$('#aikon').html('<img src="images/晴れのち雨.png" alt="サンプル画像">');
				$('#tenki').html("晴れのち雨");
				}

				//------------------------------------------
				else if (tnk == 200){
					$('#aikon').html('<img src="images/曇り.png" alt="サンプル画像">');
					$('#tenki').html("曇り");
					}
				else if (tnk == 200 || tnk == 231 ){
				$('#aikon').html('<img src="images/曇り.png" alt="サンプル画像">');
				$('#tenki').html("曇り");
				}
				else if (tnk == 201 || tnk == 209 || tnk == 223 ){
				$('#aikon').html('<img src="images/曇りのち晴れ.png" alt="サンプル画像">');
				$('#tenki').html("くもり時々晴れ");
				}
				else if (tnk == 202 || tnk == 206 || tnk == 208 || tnk == 220){
				$('#aikon').html('<img src="images/曇りのち雨.png" alt="サンプル画像">');
				$('#tenki').html("くもり一時雨");
				}
				else if (tnk == 203 || tnk == 207 || tnk == 240){
				$('#aikon').html('<img src="images/曇りのち雨.png" alt="サンプル画像">');
				$('#tenki').html("くもり時々雨");
				}
				else if (tnk == 204 || tnk == 260){
				$('#aikon').html('<img src="images/曇りのち雪.png" alt="サンプル画像">');
				$('#tenki').html("くもり一時雪");
				}
				else if (tnk == 205 || tnk == 250 || tnk == 270){
				$('#aikon').html('<img src="images/曇りのち雪.png" alt="サンプル画像">');
				$('#tenki').html("くもり時々雪");
				}
				else if (tnk == 210 || tnk == 211){
				$('#aikon').html('<img src="images/曇りのち晴れ.png" alt="サンプル画像">');
				$('#tenki').html("くもりのち晴れ");
				}
				else if (tnk == 212 || tnk == 213 ||tnk ==  214 || tnk == 218 || tnk == 219 || tnk == 221 || tnk == 222 || tnk == 224 || tnk == 225 || tnk == 226 || tnk == 227){
				$('#aikon').html('<img src="images/曇りのち雨.png" alt="サンプル画像">');
				$('#tenki').html("くもりのち雨");
				}
				else if (tnk == 215 || tnk == 216 || tnk == 217 || tnk == 228 || tnk == 229 || tnk == 230 || tnk == 281){
				$('#aikon').html('<img src="images/曇りのち雪.png" alt="サンプル画像">');
				$('#tenki').html("くもりのち雪");
				}

				//---------------------------------------
				else if (tnk == 300 || tnk == 306 || tnk == 307 || tnk == 308 || tnk == 328 || tnk == 350){
				$('#aikon').html('<img src="images/雨.png" alt="サンプル画像">');
				$('#tenki').html("雨");
				}
				else if (tnk == 301){
				$('#aikon').html('<img src="images/晴れのち雨.png" alt="サンプル画像">');
				$('#tenki').html("雨と時々晴れ");
				}
				else if (tnk == 311 || tnk == 316 || tnk == 320){
				$('#aikon').html('<img src="images/晴れのち雨.png" alt="サンプル画像">');
				$('#tenki').html("雨のち晴れ");
				}
				else if (tnk == 302){
				$('#aikon').html('<img src="images/曇りのち雨.png" alt="サンプル画像">');
				$('#tenki').html("雨一時くもり");
				}
				else if (tnk == 312 || tnk == 313 || tnk == 317 || tnk == 321){
				$('#aikon').html('<img src="images/曇りのち雨.png" alt="サンプル画像">');
				$('#tenki').html("雨のちくもり");
				}
				else if (tnk == 303 || tnk == 304 || tnk == 309 || tnk == 323 || tnk == 324 || tnk == 325 || tnk == 329){
				$('#aikon').html('<img src="images/雨のち雪.png" alt="サンプル画像">');
				$('#tenki').html("雨時々雪");
				}
				else if (tnk == 314 || tnk == 315 || tnk == 326 || tnk == 327){
				$('#aikon').html('<img src="images/雨のち雪.png" alt="サンプル画像">');
				$('#tenki').html("雨のち雪");
				}

				//------------------------------
				else if (tnk == 400 || tnk == 405 || tnk == 406 || tnk == 407 || tnk == 450 || tnk == 425){
				$('#aikon').html('<img src="images/雪.png" alt="サンプル画像">');
				$('#tenki').html("雪");
				}
				else if (tnk == 401){
				$('#aikon').html('<img src="images/雪と晴れ.png" alt="サンプル画像">');
				$('#tenki').html("雪と晴れ");
				}
				else if (tnk == 361 || tnk == 411 || tnk == 420){
				$('#aikon').html('<img src="images/雪と晴れ.png" alt="サンプル画像">');
				$('#tenki').html("雪のち晴れ");
				}
				else if (tnk == 402){
				$('#aikon').html('<img src="images/曇りのち雪.png" alt="サンプル画像">');
				$('#tenki').html("雪一時くもり");
				}
				else if (tnk == 371 || tnk == 413 || tnk == 421){
				$('#aikon').html('<img src="images/曇りのち雪.png" alt="サンプル画像">');
				$('#tenki').html("雪のちくもり");
				}
				else if (tnk == 403 || tnk == 340 || tnk == 409 || tnk == 427){
				$('#aikon').html('<img src="images/雪のち雨.png" alt="サンプル画像">');
				$('#tenki').html("雪時々雨");
				}
				else if (tnk == 414 || tnk == 422 || tnk == 423 || tnk == 424 || tnk == 426 ){
				$('#aikon').html('<img src="images/雪のち雨.png" alt="サンプル画像">');
				$('#tenki').html("雪のち雨");
				}
				else{
					$('#aikon').html('<img src="images/太陽.png" alt="サンプル画像">');
					$('#tenki').html("晴れ");
				}
				
			});
			
			//cssを使って綺麗にする

		});
	}).catch(err=>{ 
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});