console.log("main.js!!");




$("#btn").click(() => {	

	$(document).ready(function() {
	
	
		  //左側inputの入力値を取得（numA）
		  var numA = parseInt($("#num").val());
		  numA = numA / 100
		  var numB = parseInt($("#num2").val());
		  var numC = ((numB / (numA * numA)));
		  Number(numC)

		  if (numC < 18.5) {
			message = "低体重（やせ型）";
			message2 = "もう少し体重を増やしましょう。";
		  } else if (numC >= 18.5 && numC < 25) {
			message = "普通体重";
			message2 = "標準的な体重の範囲です。";
		  } else if (numC >= 25 && numC < 30) {
			message = "肥満(level1)";
			message2 = "肥満体重です。BMIが25を超えると、糖尿病や高血圧などの生活習慣病のリスクが2倍以上になるとされています。※ ただし必ずしも医学的に減量すべきとは限りません。";
		  } else if (numC >= 30 && numC < 35) {
			message = "肥満(level2)";
			message2 = "肥満体重です。BMIは25を超えると糖尿病や高血圧などの生活習慣病のリスクが2倍以上になり、30を超えると積極的な減量治療が必要とされています。";
		  } else if (numC >= 35 && numC < 40) {
			message = "肥満(level3)";
			message2 = "高度肥満です。今すぐ医師の診断を受けましょう。";
		  } else if (numC >= 40) {
			message = "肥満(level4)";
			message2 = "高度肥満です。今すぐ医師の診断を受けましょう。";
		  }
	
		  $("#list1").text("BMI値は" + numC + "です。");
		  $("#list2").text("診断結果：" + message);
		  $("#list3").text(message2);
		  console.log(numC);  
		  
	
	})
	
	});