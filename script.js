let gameState = {
    funko:  0,
    funkoGeneration:  0,
    intervalLoopId: undefined,
}

const button = document.getElementById('ClickMe');
let funkoDisplay = document.getElementById('FunkoCounter');
let funkoGeneratedDisplay = document.getElementById('GeneratedFunko')
const commonButton = document.getElementById('CommonFunko');
const glitterButton = document.getElementById('GlitterFunko');
const blackLightButton = document.getElementById('BlacklightFunko');
const chaseButton = document.getElementById('ChaseFunko');
const freddyButton = document.getElementById('freddyFunko');
const startButton = document.getElementById('start-buttn')
const restartButton = document.getElementById('restart-buttn')



button.addEventListener('click', function(clickEvent){
    funkoDisplay.textContent = gameState.funko++;
    gameState.funko.textContent = gameState.funko; 
})



// Funko producer 1

function commonFunkoPurchase(){
    if(gameState.funko >= 11){
        gameState.funko -= 11;
        funkoDisplay.textContent = gameState.funko;
        gameState.funkoGeneration++;
        funkoGeneratedDisplay.textContent = gameState.funkoGeneration;
    }

}



// Funko producer 2
function glitterFunkoPurchase(){
    if(gameState.funko >= 51){
        gameState.funko -= 51;
        funkoDisplay.textContent = gameState.funko;
        gameState.funkoGeneration += 2;
        funkoGeneratedDisplay.textContent = gameState.funkoGeneration;
    }
}
// Funko producer 3
function blacklightFunkoPurchase(){
    if(gameState.funko >= 101){
        gameState.funko -= 101;
        funkoDisplay.textContent = gameState.funko;
        gameState.funkoGeneration += 5;
        funkoGeneratedDisplay.textContent = gameState.funkoGeneration;
    }
}
function chaseFunkoPurchase(){
    if(gameState.funko >= 501){
        gameState.funko -= 501;
        funkoDisplay.textContent = gameState.funko;
        gameState.funkoGeneration += 25;
        funkoGeneratedDisplay.textContent = gameState.funkoGeneration;
    }
}
function freddyFunkoPurchase(){
    if(gameState.funko >= 1001){
        gameState.funko -= 1001;
        funkoDisplay.textContent = gameState.funko;
        gameState.funkoGeneration += 75;
        funkoGeneratedDisplay.textContent = gameState.funkoGeneration;
    }
}



function passiveFunkobb(){
    gameState.funko += gameState.funkoGeneration;
    funkoDisplay.textContent = gameState.funko;


}   
function passiveGeneration(){
    setInterval(passiveFunkobb, 1000)
}

function restartGame(){
    gameState.funko = 0;
    gameState.funkoGeneration = 0;
    funkoGeneratedDisplay.textContent = gameState.funkoGeneration;
    funkoDisplay.textContent = gameState.funko;
}


commonButton.addEventListener('click', commonFunkoPurchase)
glitterButton.addEventListener('click',glitterFunkoPurchase)
blackLightButton.addEventListener('click', blacklightFunkoPurchase)
chaseButton.addEventListener('click',chaseFunkoPurchase)
freddyButton.addEventListener('click', freddyFunkoPurchase)
startButton.addEventListener('click', passiveGeneration)
restartButton.addEventListener('click', restartGame)
