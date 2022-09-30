let score = 0;
let scoreGeneration = 0;
const button = document.getElementById('ClickMe');
const scoreDisplay = document.getElementById('FunkoCounter');
const commonButton = document.getElementById('CommonFunko');
const glitterButton = document.getElementById('GlitterFunko');
const blackLightButton = document.getElementById('BlacklightFunko');
const chaseButton = document.getElementById('ChaseFunko');
const freddyButton = document.getElementById('freddyFunko');


button.addEventListener('click', function(clickEvent){
    button.click();
    score++;
    scoreDisplay.innerText = score;
})