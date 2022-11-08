console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	for(let r=1; r<21; r++){
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
		elem.append("<td>" + (r * 10) + "</td>");
		elem.append("<td>" + (r * 11) + "</td>");
		elem.append("<td>" + (r * 12) + "</td>");
		elem.append("<td>" + (r * 13) + "</td>");
		elem.append("<td>" + (r * 14) + "</td>");
		elem.append("<td>" + (r * 15) + "</td>");
		elem.append("<td>" + (r * 16) + "</td>");
		elem.append("<td>" + (r * 17) + "</td>");
		elem.append("<td>" + (r * 18) + "</td>");
		elem.append("<td>" + (r * 19) + "</td>");
		elem.append("<td>" + (r * 20) + "</td>");
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
