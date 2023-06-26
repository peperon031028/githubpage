console.log("main.js!!");

//==========
// p5.jsを使ってみよう
// 		公式サイト: https://p5js.org/
//		Get Started: https://p5js.org/get-started/
//		References: https://p5js.org/reference/


function draw(){


  

    for(let i = 0; i < 1; i++) {
        let a = random(1,3);
        let b = random(1,3);
        let c = random(1,3);
        let d = random(1,3);
        randomBall(a,b,c,d)
        console.log(a,b,c,d)
    }
    noLoop()
}

	console.log("Ready!!");

  /**
 * p5.js連続して実行される関数
 */


function randomBall(a,b,c,d){
    var ball = document.getElementById("ball")
    ,bh = ball.offsetHeight
    ,bw = ball.offsetWidth
    ,left = ( window.innerWidth / a ) - ( bw / b )
    ,top = -ball.offsetHeight
    ,ground = ( window.innerHeight / c ) - ( bh / d );
    ball.style.left = left + "px";
    ball.style.top = top + "px";
  
    var y = top
,b = ground
,v = -20
,R = 0.9;
function gravity() {
y+= ++v;
if( y >= b ) {
y = b;
v*= -R;
if ( !~~v ) {
clearInterval(g)
}
}
document.getElementById("ball").style.top = y + "px";
}
var g = setInterval(gravity, 10);

y+= ++v;
}
