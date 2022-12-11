console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");
	
	// Geolocation APIに対応している
/*if( navigator.geolocation )
{
	// 現在位置を取得できる場合の処理
	alert( "あなたの端末では、現在位置を取得することができます。" ) ;
}

// Geolocation APIに対応していない
else
{
	// 現在位置を取得できない場合の処理
	alert( "あなたの端末では、現在位置を取得できません。" ) ;
}*/

navigator.geolocation.getCurrentPosition((position)=> {
    //緯度
    let lat = position.coords.latitude;
    //経度
    let lng = position.coords.longitude;
	//時間(ミリ秒)
	let Time = position.timestamp;
});


//緯度・経度・時間に使うドキュメントを取得しておく
let lat = document.getElementById('lat');
let lng = document.getElementById('lng');
let Time = document.getElementById('Time');
let map = document.getElementById('map');

navigator.geolocation.getCurrentPosition((position)=>{   

    let coords = position.coords;


	//htmlに出力する
    lat.textContent = coords.latitude;
    lng.textContent = coords.longitude;
	Time.textContent = position.timestamp;

    map.setAttribute('href', `https://www.google.co.jp/maps/@${coords.latitude},${coords.longitude},15z`);
});

// 現在位置を取得する
navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;

});