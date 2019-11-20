const UP = 38;
const DOWN = 40;

setInterval(function(){
   const context =  Runner.instance_;
   const tRexContext  = context.tRex;
   if (context.horizon.obstacles.length) {
    const hurdleContext = context.horizon.obstacles[0];
   
    const distance = hurdleContext.xPos - tRexContext.xPos;
    
    // console.log(distance)
    if(distance > 124 ) {
        keyDown(DOWN);
    } else if (distance + hurdleContext.width < 50){
        keyDown(DOWN);
    } else {
        keyDown(UP);
    }
   }
  
}, 5);



function keyDown(codeKey){
    // Simulate a key press

    Podium = {};

    var oEvent = document.createEvent('KeyboardEvent');

    Object.defineProperty(oEvent, 'keyCode', {
        get : function() {
            return this.keyCodeVal;
        }
    });      

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, codeKey, codeKey, "", "", false, "");
    } else {
        oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, codeKey, 0);
    }

    oEvent.keyCodeVal = codeKey;

    document.body.dispatchEvent(oEvent);

}


function keyUp(codeKey) {
    // Similate a key up

    Podium = {};

    var oEvent = document.createEvent('KeyboardEvent');

    Object.defineProperty(oEvent, 'keyCode', {
        get : function() {
            return this.keyCodeVal;
        }
    });      

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keyup", true, true, document.defaultView, codeKey, codeKey, "", "", false, "");
    } else {
        oEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, codeKey, 0);
    }

    oEvent.keyCodeVal = codeKey;

    document.body.dispatchEvent(oEvent);
}