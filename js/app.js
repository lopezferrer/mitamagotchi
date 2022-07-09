//DEFINE ALL ELEMENTS IN THE DOM
//buttons
const comenzar = document.querySelector("#picture");
const feedBtn = document.querySelector("#feed");
const sleepBtn = document.querySelector("#sleep");
const playBtn = document.querySelector("#play");

//indicators
const hungerIndicator = document.querySelector("#hunger");
const sleepinessIndicator  = document.querySelector("#sleepiness");
const boredomIndicator  = document.querySelector("#boredom");
const ageIndicator  = document.querySelector("#age");

//game settings
let petName = ""

//functions
function startFunction () {
  if(petName === ""){
    petName = prompt('How will you name your pet?', 'Your pet\'s name');
    if (petName === "Your pet\'s name" || petName === "" || petName === null){
      alert('You must name your pet to start');
      petName = "";
    }else{
      document.getElementById("picture").src="images/puppy1.png";
      const petNameTag = document.createElement("h4");
      petNameTag.setAttribute('id','petnameh4');
      document.querySelector("#image").appendChild(petNameTag);
      petNameTag.innerText = petName;
      petNameTag.style['font-size'] = 60 + "px";
      petNameTag.style['line-height'] = 0 + "px";
      petNameTag.style['position'] = "relative";
      petNameTag.style['top'] = -100 + "px";
      petNameTag.style['top'] = -100 + "px";
      petNameTag.style['font-family'] = "Lakki Reddy";
      petNameTag.style['cursor'] = "auto";
      picture.style['cursor'] = "auto";
      picture.style['animation'] = "dogMoving 8s";
      picture.style['animation-iteration-count'] = "infinite";
    }
  }
}

comenzar.addEventListener("click", startFunction);

//ageIndicator
let age = 0;
function incrementAge() {
  if(petName != ""){
    age = parseInt(ageIndicator.innerHTML)
    age += 1;
    ageIndicator.innerHTML = age;
    if (age > 1){
      document.getElementById("picture").src="images/puppy2.png"
      age = parseInt(ageIndicator.innerHTML)
      ageIndicator.innerHTML = age;
    }
  }
}
setInterval(incrementAge, 20000);


//hunger growth and feeding
let hunger = 0;
function incrementHunger() {
  if(petName != "" && hunger < 10){
    hunger = parseInt(hungerIndicator.innerHTML)
    hunger += 1;
    hungerIndicator.innerHTML = hunger
  }else if(petName != "" && hunger >= 9){
    hunger = parseInt(hungerIndicator.innerHTML);
  }
}
setInterval(incrementHunger, 2000);

//feeding
function feedFunction(){
  if (hungerIndicator.innerHTML > 0 && petName != ""){
    hungerIndicator.innerHTML = parseInt(hungerIndicator.innerHTML) - 1
  }

}
feedBtn.addEventListener("click", feedFunction);

//Sleepiness and sleep
let sleepiness = 0;
function incrementSleepiness() {
  if(petName != "" && sleepiness < 10){
    sleepiness = parseInt(sleepinessIndicator.innerHTML)
    sleepiness += 1;
    sleepinessIndicator.innerHTML = sleepiness
  }else if(petName != "" && sleepiness >= 9){
    sleepiness = parseInt(sleepinessIndicator.innerHTML);
  }
}
setInterval(incrementSleepiness, 6000);

//sleep
function sleepFunction(){
  if (sleepinessIndicator.innerHTML >= 5 && petName != ""){
    sleepinessIndicator.innerHTML = parseInt(sleepinessIndicator.innerHTML) - 5
  }else if (sleepinessIndicator.innerHTML < 5 && petName != ""){
    sleepinessIndicator.innerHTML = 0
  }
}
sleepBtn.addEventListener("click", sleepFunction);


//Sleepiness and sleep
let boredom = 0;
function incrementBoredom() {
  if(petName != "" && boredom < 10){
    boredom = parseInt(boredomIndicator.innerHTML)
    boredom += 1;
    boredomIndicator.innerHTML = boredom;
  }else if(petName != "" && boredom >= 9){
    boredom = parseInt(boredomIndicator.innerHTML);
  }
}
setInterval(incrementBoredom, 4000);

//sleep
function playFunction(){
  if (boredomIndicator.innerHTML >= 3 && petName != ""){
    boredomIndicator.innerHTML = parseInt(boredomIndicator.innerHTML) - 3
  }else if (boredomIndicator.innerHTML < 5 && petName != ""){
    boredomIndicator.innerHTML = 0
  }
}
playBtn.addEventListener("click", playFunction);
