console.log("main.js!!");

$('#unit').change(function() {
	var r = $('option:selected').val();
	
	console.log(r);
})
    
$("#btn").click(() => {
	doAnimation("#result",  "animate__backInUp");
	var r = $('option:selected').val();

	if(r == 1){
		
		$("#result").text($("#price").val() / $("#num").val() + "円" )
		console.log("1円単位")

		//一円を指定すると１円単位で計算する
	}
	else if(r == 10){
		$("#result").text($("#price").val() / 10 / $("#num").val() + "円")
		console.log("10円単位")

		//10円を指定すると１0円単位で計算する
	}
	else if(r == 100){
		$("#result").text($("#price").val() / 100 / $("#num").val() + "円")
		console.log("100円単位")

		//100円を指定すると１00円単位で計算する
	}
	else if(r == 1000){
		$("#result").text($("#price").val() / 1000 / $("#num").val() + "円")
		console.log("1000円単位")

		//1000円を指定すると1000円単位で計算する
	}

});

