//DEFINE ALL ELEMENTS IN THE DOM
//buttons
const comenzar = document.querySelector("#picture");
const feedBtn = document.querySelector("#feed");
const walkBtn = document.querySelector("#walk");
const cureBtn = document.querySelector("#cure");
const trainBtn = document.querySelector("#train");
const playBtn = document.querySelector("#play");

//indicators
const hungerIndicator = document.querySelector("#hunger");
const bladderIndicator  = document.querySelector("#bladder");
const boredomIndicator  = document.querySelector("#boredom");
const healthIndicator  = document.querySelector("#health");
const skillIndicator  = document.querySelector("#skill");

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
      picture.style['animation-iteration-count'] = "infinite"
      hungerIndicator.innerText = 10;
      bladderIndicator.innerText = 0;
      boredomIndicator.innerText = 0;
      healthIndicator.innerText = 10;
      skillIndicator.innerText = 0;
    }
  }
}

comenzar.addEventListener("click", startFunction);
