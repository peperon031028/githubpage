console.log("main.js!!");




$("#btn").click(() => {	

	$(document).ready(function() {
	
	
		  //左側inputの入力値を取得（numA）
		  var numA = parseInt($("#num").val());
		  console.log(numA)
		  Number(numA)

		  var numB = parseInt($("#num2").val());
		  console.log(numB)
		  Number(numB)

		  var numC = parseInt($("#num3").val());
		  console.log(numC)
		  Number(numC)

		  numD = Math.round(numA * numB / numC);
		  Number(numD)
		
		  console.log(numD)

		  $("#list1").text("ガソリン代は" + numD + "円");
		  $("#list2").text("ガソリン価格をリッター" + numA + "円として計算すると、燃費リッター" + numB + "kmの車で" + numC + "走った時のガソリン代は" + numD + "円です。");
		  
	
	})
	
	});