console.log("main.js!!");


var Price = 0; // 初期値は0 この設定がないとチェックなしの０が取得できない

console.log(Price)
//////////////////////////////////////////////////////
// ▼▼▼ 各グループでのチェックボックス値を取得
// Aグループ






    $("#btn").click(() => {	

$(document).ready(function() {

	// $('#aGroup').change(function () {
	// 	if ($('#aGroup .radioBtn').is(':checked')) {
	// 		var PriceVal = $('#aGroup .radio:checked').val(); // チェックした値を取得
	// 		if (PriceVal == "10") { // 値によって金額を設定
	// 			Price = 0.1; // グルーバル変数でないと外から参照できない
	// 			console.log(Price)
	// 		} else if (PriceVal == "8") {
	// 			Price = 0.08;
			// }else{
			// 	$("#first").focusout(function() {
			// 		var inputNumber = $("#first").val();
			// 	  })
			// }
	// 	} 
	// 	console.log(Price)
	// });
	const str1 = $('input:radio[name="interests"]:checked').val();
		console.log(str1)
		if (str1 == 10){
			Price = 0.1;
			console.log(Price)
		}else if(str1 == 8){
			Price = 0.08;
			console.log(Price)
		}else if(str1 == 0){

			$(function(){
				$("#first").keyup(function(){
				 Price = parseInt($("#first").val());
				 Price = Price / 100 ;
				 console.log(Price)
				});
			   });
		}


	  //左側inputの入力値を取得（numA）
	  var numA = parseInt($("#num").val());
	  numB = parseInt(numA * Price);
	  numC = numA + numB
	  Number(numC)

	  $("#list1").text(numB);
	  $("#list2").text(numC);
	  console.log(numA);  

})

});