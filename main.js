console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	//テーブルを取得する
	$("#training").append("<tr><td>3</td><td>6</td><td>9</td><td>12</td></tr>"); //3の段
	$("#training").append("<tr><td>4</td><td>8</td><td>12</td><td>16</td></tr>"); //4の段

	//for文を思い出してみる(1 ~ 9まで)
	for(let r=1; r<10; r++){
		console.log("rは",r);
		for(let c=1; c<10; c++){
			console.log("cは",c);
			console.log("掛け算",r*c);
		}
	}

	//とりあえず段だけやってみる
	/*for(let r=1; r<10; r++){
		$("#training").append("<tr><td>*</td><td>*</td><td>*</td><td>*</td></tr>");
	}*/

	//エレメントを作る
	for(let r=1; r<10; r++){
		let elem = $("<tr></tr>");//trエレメントを作る
		elem.append("<td>1</td>"); //エレメントに追加
		elem.append("<td>2</td>"); //エレメントに追加
		elem.append("<td>3</td>"); //エレメントに追加
		console.log(elem);
		$("#training").append(elem);//テーブルに追加
	}



	//TODO; 上の技術を駆使して九九表を作りなさい

	for(let r=1; r<10; r++){
		let elem = $("<tr></tr>");//trエレメントを作る
		elem.append("<td>" + (r * 1) + "</td>"); //エレメントに追加
		elem.append("<td>" + (r * 2) + "</td>"); //エレメントに追加
		elem.append("<td>" + (r * 3) + "</td>");
		elem.append("<td>" + (r * 4) + "</td>");
		elem.append("<td>" + (r * 5) + "</td>");
		elem.append("<td>" + (r * 6) + "</td>");
		elem.append("<td>" + (r * 7) + "</td>");
		elem.append("<td>" + (r * 8) + "</td>");
		elem.append("<td>" + (r * 9) + "</td>");
		//elem.append("<td>3</td>"); //エレメントに追加
		console.log(elem);
		$("#target").append(elem);//テーブルに追加
	}

	let num = 2;
	let tag = "<P>" + (num * 3) + "</p>";
	console.log(tag);




	//文字連結を使う
	/*let num = 81;
	let tag = "<p>" + num + "</p>";
	console.log(tag);*/

});
