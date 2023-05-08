console.log("main.js!!");

/**
 * 基本情報技術者アルゴリズム対策
 * 練習: 09
 * デバッガでのトレースで動きを確かめること
*/

let fizzbuzz = () =>{
    let i = 1
    let n = 100
    while(i <= n){
        if(i % 3 === 0){
            console.log("Fizz")
            if(i % 5 === 0){
                console.log("Buzz")
            }
        }
        else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
        
        i = i + 1
    }
}

console.log("Result;", fizzbuzz(100))