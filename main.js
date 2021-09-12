let hour=0;         /*時間*/
let min=0;          /*分*/
let sec=0;          /*秒*/
let msec=0;         /*10分の１秒*/
let msecNumber=0;   /*10分の１秒の表記*/
let secNumber=0;    /*秒の表記*/
let minNumber=0;    /*分の表記*/
let hourNumber=0;   /*時間の表記*/
let measurement;    /*タイマー名*/

/*スタートボタン*/
function countStart(){
   measurement=setInterval("countUp()",100); /*計測開始*/
   document.getElementById("start").disabled=true;
   document.getElementById("stop").disabled=false;
   document.getElementById("reset").disabled=false;
}

/*ストップボタン*/
function countStop(){
   clearInterval(measurement)
   document.getElementById("start").disabled=false;
   document.getElementById("stop").disabled=true;
   document.getElementById("reset").disabled=false;
}

/*リセットボタン*/
function countreset(){
   msecNumber=0;
   secNumber=0;
   minNumber=0;
   hourNumber=0;
   document.getElementById("timer").innerHTML=hourNumber+"<span>:</span>"+minNumber+"<span>:</span>"+secNumber+"<span>:</span>"+msecNumber;
   
   clearInterval(measurement);
   document.getElementById("start").disabled=false;
   document.getElementById("stop").disabled=true;
   document.getElementById("reset").disabled=true;
}

/*カウント機能*/
function countUp() {
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    msecNumber = msec;
    secNumber = sec;
    minNumber = min;
    hourNumber = hour;
    
    document.getElementById("timer").innerHTML=hourNumber+"<span>:</span>"+minNumber+"<span>:</span>"+secNumber+"<span>:</span>"+msecNumber;
}
