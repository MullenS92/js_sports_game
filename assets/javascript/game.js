( function(){

let resetSound = new Audio ("./assets/sounds/Hockey_reset.mp3")
let hitSound = new Audio ("./assets/sounds/hockey_hit.mp3")

    

    let shotCount =0
    let goalCount =0

    let teamoneShots=document.querySelector("#teamone-numshots")
    let teamoneGoal=document.querySelector("#teamone-numhits")
    let teamoneShoot=document.querySelector("#teamone-shoot")

teamoneShoot.addEventListener("click", function(){
    shotCount = shotCount +1
    teamoneShots.innerHTML = shotCount 

    let randomNum =  Math.random()
    
    if (randomNum > 0.6){
        goalCount= goalCount +1
        teamoneGoal.innerHTML = goalCount
    }
    hitSound.play()

})

let shottwoCount =0
let goaltwoCount =0

let teamtwoShots=document.querySelector("#teamtwo-numshots")
let teamtwoGoal=document.querySelector("#teamtwo-numhits")
let teamtwoShoot=document.querySelector("#teamtwo-shoot")

teamtwoShoot.addEventListener("click", function(){
shottwoCount = shottwoCount +1
teamtwoShots.innerHTML = shottwoCount 

let randomNum =  Math.random()

if (randomNum > 0.6){
    goaltwoCount= goaltwoCount +1
    teamtwoGoal.innerHTML = goaltwoCount
}
    hitSound.play()

})


let resetCount = 0
   let resetButton = document.querySelector("#reset")
   let pleaseMove = document.querySelector("#num-resets")

        resetButton.addEventListener("click",function(){
        resetCount = resetCount+1
        pleaseMove.innerHTML = resetCount

       shotCount=0
       goalCount=0
       shottwoCount=0
       goaltwoCount= 0
       teamoneShots.innerHTML=0
       teamoneGoal.innerHTML=0
       teamtwoGoal.innerHTML=0
       teamtwoShots.innerHTML=0

                resetSound.play();
   })



}())