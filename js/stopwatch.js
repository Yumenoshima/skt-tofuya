(function(){
    'use strict';

    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var speedup = document.getElementById('speedup');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    start.addEventListener('click',function(){
        state.textContent = this.textContent
    });

    stop.addEventListener('click',function(){
        state.textContent = this.textContent
    });

    reset.addEventListener('click',function(){
        state.textContent = this.textContent
    });

    speedup.addEventListener('click',function(){
        state.textContent = this.textContent
    });

})();