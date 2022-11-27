console.log("main.js!!");

const ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const ACCESS_TOKEN = "mapbox";



// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	// 緯度経度データ
	const nichibi = [35.383938980172594, 136.60834026856318]; //にちび
	const oogaki = [35.36675123324879, 136.6178258973979];　//大垣　
	const Hawaii = [19.571253360686654, -155.96236690114216];//ハワイ
	const London = [51.50865180157388, -0.12634837477805755];//ロンドン

	// マップを作る
	let map = L.map("mapid").setView(nichibi, 16);

	// マップの設定
	L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution: ATTRIBUTION,// 著作権表記
		accessToken: ACCESS_TOKEN,// アクセストークン
		id: "mapbox/streets-v11",// マップの種類
	}).addTo(map);

	L.marker(oogaki).addTo(map).bindPopup("大垣駅").openPopup();
	L.marker(nichibi).addTo(map).bindPopup("日本総合ビジネス専門学校").openPopup();
	L.marker(Hawaii).addTo(map).bindPopup("ハワイ").openPopup();
	L.marker(London).addTo(map).bindPopup("ロンドン").openPopup();
});