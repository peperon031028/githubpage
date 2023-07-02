console.log("main.js!!");

$("document").ready(()=>{
	console.log("Ready!!");

	//==========
	// 干支データ取得API
	// 使い方

	// 1, カレンダーを作る
	makeCarendar();// カレンダーを作る
	// 2, 取得したい西暦を引数に渡す
	let data = getCalendar(2020);// カレンダーからその年のデータを取得する
	console.log(data);
	// 3, HTMLに表示する
	// TODO: for文を使ってHTMLにテーブルを表示
	for(let i=2000; i<2024; i++){
		let data = getCalendar(i);
		console.log(data);
	}
});

//==========
// Calendar API

const ETOS = [
	{"name": "辰", "yomi": "たつ", "src": "./images/eto_tatu.png"},
	{"name": "巳", "yomi": "み", "src": "./images/eto_mi.png"},
	{"name": "午", "yomi": "うま", "src": "./images/eto_uma.png"},
	{"name": "未", "yomi": "ひつじ", "src": "./images/eto_hituji.png"},
	{"name": "申", "yomi": "さる", "src": "./images/eto_saru.png"},
	{"name": "酉", "yomi": "とり", "src": "./images/eto_tori.png"},
	{"name": "戌", "yomi": "いぬ", "src": "./images/eto_inu.png"},
	{"name": "亥", "yomi": "い", "src": "./images/eto_i.png"},
	{"name": "子", "yomi": "ね", "src": "./images/eto_ne.png"},
	{"name": "丑", "yomi": "うし", "src": "./images/eto_ushi.png"},
	{"name": "虎", "yomi": "とら", "src": "./images/eto_tora.png"},
	{"name": "兎", "yomi": "う", "src": "./images/eto_u.png"}
];

const WAREKIS = [
	{"name": "明治", "yomi": "めいじ", "from": 1868, "to": 1911},
	{"name": "大正", "yomi": "たいしょう", "from": 1912, "to": 1925},
	{"name": "昭和", "yomi": "しょうわ", "from": 1926, "to": 1988},
	{"name": "平成", "yomi": "へいせい", "from": 1989, "to": 2018},
	{"name": "令和", "yomi": "れいわ", "from": 2019, "to": 9999}
]

const calendar = {};// カレンダーのデータを格納するオブジェクト

function makeCarendar(){

	const fullYear = new Date().getFullYear();
	let counter = 0;// Counter
	for(let w=0; w<WAREKIS.length; w++){
		let yearFrom = WAREKIS[w].from;
		let yearTo = WAREKIS[w].to;
		if(fullYear < yearTo) yearTo = fullYear;
		let off = 1;// 平成/令和1,2,3...
		for(let y=yearFrom; y<=yearTo; y++){
			const year = y;
			const wareki = WAREKIS[w];
			const age = fullYear - y;
			const eto = ETOS[counter%12];
			//console.log(year, wareki.name, off, age, eto.name);
			calendar[year] = {
				"year": year, "wareki": wareki.name, 
				"off": off, "age": age, "eto": eto 
			}
			off++;
			counter++;
		}
	}
}

function getCalendar(y){
	return calendar[y];
}