//buttons
const comenzar = document.querySelector("#picture");
const feedBtn = document.querySelector("#feed");
const walkBtn = document.querySelector("#walk");
const cureBtn = document.querySelector("#cure");
const trainBtn = document.querySelector("#train");
const sleepBtn = document.querySelector("#sleep");
const playBtn = document.querySelector("#play");

//indicators
const hungerIndicator = document.querySelector("#hunger-indicator");
const bladderIndicator  = document.querySelector("#bladder-indicator");
const boredomIndicator  = document.querySelector("#boredom-indicator");
const healthIndicator  = document.querySelector("#health-indicator");
const skillIndicator  = document.querySelector("#skill-indicator");

//game settings
let petName = ""
const maxHunger = 300;
const maxBladder = 300;
const maxBoredom = 300;
const maxHealth = 300;
const maxSkill = 300;

let day = 20;

//functions
function startFunction () {
  if(petName === ""){
    petName = prompt('Name your pet', 'Name');
    document.getElementById("picture").src="images/puppy1.png";
    const petNameTag = document.createElement("h4");
    petNameTag.setAttribute('id','petnameh4');
    petNameTag.innerText = petName;
    petNameTag.style['font-size'] = 60 + "px";
    petNameTag.style['line-height'] = 0 + "px";
    petNameTag.style['position'] = "relative";
    petNameTag.style['top'] = -100 + "px";
    petNameTag.style['top'] = -100 + "px";
    petNameTag.style['font-family'] = 'Lakki Reddy', cursive;
    petNameTag.style['text-transform'] = "uppercase";
    document.querySelector("#image").appendChild(petNameTag)
  }
}
comenzar.addEventListener("click", startFunction);


/*
function miTamagotchi() {
  this.hunger = maxHunger;
  this.bladder = maxBladder;
  this.boredom = maxBoredom;
  this.health = maxHealth
  this.skill = maxSkill;
}


let tmgch = new Tamagotchi();
let sleepHpCount;
let hungerHpCount;
let playHpCount;
let score = 0;
core();
let coreUpdate = setInterval(core, 100 * day);


//Main function of tamagotchi
function core() {
  //console.log(tmgch);
  hungerIndicator  = (tmgch.hunger / maxHunger * 100).toFixed(2);
  sleepIndicator = (tmgch.sleep / maxSleep * 100).toFixed(2);
  playIndicator = (tmgch.play / maxPlay * 100).toFixed(2);

*/
