console.log("main.js!!");

/**
 * 基本情報技術者アルゴリズム対策
 * 練習: 03
 * デバッガでのトレースで動きを確かめること
*/
//全体のコードをGistで報告する
let isleap = (y)=>{
    console.log("isleap:", y);
    let leap = false

    if(y % 400 == 0){
        leap = true
    }
    else if(y % 4　== 0){
        if(y % 100 != 0){
            leap = true
        }
        else{
            leap = false
        }
    }
    
    else{
        leap = false
    }

    if(leap == false){
        return "うるう年ではない"
    }
    else{
        return "うるう年である"
    }
}

console.log("Result", isleap(2024))
console.log("Result", isleap(2023))
console.log("Result", isleap(2022))
console.log("Result", isleap(2021))
console.log("Result", isleap(2020))