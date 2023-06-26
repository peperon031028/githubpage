console.log("main.js!!");

const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

$(document).ready(()=>{
	console.log("Ready!!");

	// Axios
	const option = {responseType: "blob"};
	axios.get(URL, option).then(res=>{
		// 通信が成功した場合
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);
		});
	}).catch(err=>{
		// 通信が失敗した場合
		console.log(err);
	});
});