setInterval(function(){
	console.log(Runner.instance_.horizon.tRex)
}, 100);


setInterval(function(){
	if (Runner.instance_.horizon.obstacles.length > 0) {
		console.log(Runner.instance_.horizon.obstacles);
	}
	// if (Runner.instance_.horizon.obstacles.length > 0){ // if obsticles exist
	// 	if (Runner.instance_.horizon.obstacles[0].xPos < Runner.instance_.currentSpeed * 25 - Runner.instance_.horizon.obstacles[0].width/2 && Runner.instance_.horizon.obstacles[0].yPos > 75){
	// 		keyUp(40);
	// 		keyDown(38);
	// 	}

	// 	if (Runner.instance_.horizon.obstacles[0].xPos < Runner.instance_.currentSpeed * 30 - Runner.instance_.horizon.obstacles[0].width/2 && Runner.instance_.horizon.obstacles[0].yPos <= 75)
	// 		keyDown(40);
	// }
}, 1000);



// Pegar os obstáculo 
// Runner.instance_.horizon.obstacles


/*

Função para acionar quando usuário apertar algum botão.
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //your code
    }
}*/
