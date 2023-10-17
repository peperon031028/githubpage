//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を使用
    strokeWidth: 0,
    duration: 1000,
    trailWidth: 0,
    text:{//テキストの形状を直接指定
        style:{ //天地中央に配置
            position:'absolute',
            left:'50%',
            top:'50%',
            padding:'0',
            margin:'0',
            transform:'translate(-50%,-50%)',
            'font-size':'1.2rem',
            color:'#fff',

        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
    
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します。1.0なら100%まで描画します。
    //アニメーションが終わったら#splashエリアをフェードアウト
    $("#splash").delay(500).fadeOut(800);

})