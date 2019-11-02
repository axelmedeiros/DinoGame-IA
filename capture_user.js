/*

Keys JS para captura do teclado

Ref: 
https://keycode.info/

*/

// Keys
const ESCAPE = 32;
const DOWN_ARROW = 40;
const UP_ARROW = 38;

// States 
const JUMP = "Pulou";
const FORCE_DOWN = "Forçou descida";

var cont = 0;

var gameLog = [];

document.body.onkeyup = function(e){
    const activePlay = Runner.instance_.horizon.obstacles.length > 0;

    if (activePlay) {
 
        if(e.keyCode == ESCAPE || e.keyCode == UP_ARROW ){
            register(JUMP)
        }

        if (e.keyCode == DOWN_ARROW) {
            register(FORCE_DOWN);
        }
    }
 
}


function register(statusDino) {
    const context =  Runner.instance_;
    const tRexContext  = context.tRex;
    const hurdleContext = context.horizon.obstacles[0];

    const tRex = {
        xPos: tRexContext.xPos,
        yPos: tRexContext.yPos
    }

    const nextHurdle = {
        xPos: hurdleContext.xPos,
        yPos: hurdleContext.yPos,
        width: hurdleContext.width
    }

    const result = { next: nextHurdle, Rex: tRex, status: statusDino, speed: context.currentSpeed};
    gameLog.push(result);
}



// Fuction to save gameLog in json
// use:
// console.save(gameLog, "fileName.json");


(function(console){
 
    console.save = function(data, filename){
 
        if(!data) {
            console.error('Console.save: No data')
            return;
        }
 
        if(!filename) filename = 'console.json'
 
        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }
 
        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')
 
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)
