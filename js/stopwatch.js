(function(){
    'use strict';

    var timer = document.getElementById('timer');
    var state = document.getElementById('state');
    var start = document.getElementById('start');
    var speedup = document.getElementById('speedup');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var picture = document.getElementById('picture');

    var startTime = 0;
    var elapsedTime = 0;
    var elapsedTimeOld = 0;
    var elapsedTimeOnStop = 0;
    var speedupTime = 0;

    const REFRESH_RATE = 1000 / 60; //60 FPS!!

    window.setInterval(() => {
        // state == start
        if (state.textContent === start.textContent) {
            elapsedTime = Date.now() - startTime + elapsedTimeOnStop + speedupTime;
        }

        // state == speedup
        if (state.textContent === speedup.textContent) {
            elapsedTimeOld = elapsedTime;
            elapsedTime = Date.now() - startTime + elapsedTimeOnStop + speedupTime;
            speedupTime = speedupTime + elapsedTime - elapsedTimeOld
        }
        //set timer text
        timer.textContent = (elapsedTime / 1000).toFixed(3)

    }, REFRESH_RATE);

    start.addEventListener('click',function(){
        //set state text
        state.textContent = this.textContent;
        //set start time
        startTime = Date.now();

        //set picture
        picture.src = "img/lm/2.png";
    });

    stop.addEventListener('click',function(){
        //skip if not in START or SPEED UP state
        if(state.textContent === "START" || state.textContent === "SPEED UP"){
            //set state text
            state.textContent = this.textContent;
            //get elapsed time on stop
            elapsedTimeOnStop = elapsedTime;
            //set picture
            picture.src = "img/lm/3.png";
        }
    });

    reset.addEventListener('click',function(){
        //set state text
        state.textContent = this.textContent;
        //set timer text
        elapsedTime = 0;
        elapsedTimeOnStop = 0;
        speedupTime = 0;
        //set picture
        picture.src = "img/lm/4.png";
    });

    speedup.addEventListener('click',function(){
        //skip if not in START state
        if(state.textContent === "START") {
            //set state text
            state.textContent = this.textContent;
            //set picture
            picture.src = "img/lm/5.png";
        }
    });
})();