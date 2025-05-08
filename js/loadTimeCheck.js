//loadTimeCheck

let time = new Date().getTime();
window.addEventListener("DOMContentLoaded", loadDOM);
window.addEventListener("load", loadComp);

function loadDOM() {//DOM要素のみの読み込み完了時間
    console.log("HTML読み込み完了！" + ((new Date().getTime() - time) / 1000) + "秒");
}

function loadComp() {//画像や外部ファイル含むすべての読み込み完了時間
    console.log("画像も動画も全部読み込みました！" + ((new Date().getTime() - time) / 1000) + "秒");
}



