//条件を満たすかを判断する
let birthyear = parseInt(prompt("生年を入力:"));
console.log(birthyear >= 2000);

//比較演算子
//console.log(birthyear >= 2000);

//論理演算子で複数の指揮から条件を作る
let birthyear2 = parseInt(prompt("生年を入力:"));
console.log(1989 <= birthyear2 && birthyear2 <= 2019);

//論理演算子（OR)
let birthyear3 = parseInt(prompt("生年を入力:"));
let currentyear =2015;
console.log (birthyear3 < 0 || currentyear < birthyear3);

//じゃないとき(!)
let birthyear4 = parseInt(prompt("生年を入力:"));
let currentyear2 =2015;
console.log(!(birthyear4 < 0 || currentyear2 < birthyear4));

//if
let birthyear5 = parseInt(prompt("生年を西暦で入力"))
if(2019 <= birthyear5){
    console.log("令和");
}
console.log("判定終了");
