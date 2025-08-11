let timerdisplay=document.querySelector('.timecounter');
let startBtn = document.getElementById('startbtn');
let resetBtn = document.getElementById('resetbtn');
let stopBtn = document.getElementById('stopbtn');

let msec=0;
let secs=0;
let mins=0;

let timerId=null;
//for startbtn
startBtn.addEventListener('click',function(){
   if (timerId !== null) {
    clearInterval(timerId);
   }
    timerId= setInterval(startTimer,10);
});

//for stopbtn
stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
   
});

//for resetbtn
resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML =`00 : 00 : 00`;
});

//here is a function call lof mins,secs,msec
function startTimer(){
    msec++;
    if (msec==100) {
        msec=0;
        secs++;
        if (secs==60) {
            secs=0;
            mins++;
        } 
    }

let mscsString;
    if (msec < 10) {
        mscsString = `0${msec}`;
    } else{
    mscsString = msec;
    }

let secsString;
    if (secs < 10) {
        secsString = `0${secs}`;
    } else{
    secsString = secs;
    }

let minsString;
    if (mins < 10) {
        minsString = `0${mins}`;
    } else{
    minsString = mins;
    }

//final run code 
    timerdisplay.innerHTML =`${minsString} : ${secsString} : ${mscsString}`;
}