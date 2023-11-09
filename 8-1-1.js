console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	AOS.init();// AOSを初期化します


$('#page-top').click(function () { // #page-topクリック
    $('body,html').animate({
        scrollTop: 0 //トップページまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化 
})
});
