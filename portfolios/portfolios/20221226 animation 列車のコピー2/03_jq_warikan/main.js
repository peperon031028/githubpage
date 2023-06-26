console.log("main.js!!");


$(document).ready(()=>{
	console.log("Ready!!");

  $("#button1").click(()=>{
    console.log("ボタン1がクリックされました。");
    let start = Date.now(); // 開始時間を覚える
    console.log(start) //動いているか確認用
    let timer = setInterval(function() {

      // 開始からの経過時間は？
      let timePassed = Date.now() - start;
    
      if (timePassed >= 5000) {
        clearInterval(timer); // 2秒後にアニメーションが終了
        console.log("停止します。")　//動いている確認
        return;
      }
    
      // timePassed 時点のアニメーションを描画
      draw(timePassed);
    
    }, 20);
    
    // timePassed は 0 から 2000 まで進む
    // なので、left は 0px から 400px になります
    function draw(timePassed) {
      train.style.left = timePassed / 5 + 'px';
    }
  });
  
  
});


