// Version:1

// creates Target details: uses a constructor to setup all the targets attrubutes.
var endTarget = new Character('Wacky', 100)

//var targetName = ""

var attacker = {}

//list of items that can be used to "enhance" attacks
var items = {
    shield: new Item('Shield', 0.3, "This is an awesome shield!"),
    fist: new Item('fist of thunder', 10, 'will give +10 damage'),
    rock: new Item('Rock', 3, 'just a simple but hard rock')
}

// function for the first "type of attack" button: initially "slap"
// also updates the health and the hit totals
function attack1() {
    endTarget.health -= (addMods() + 1)
    endTarget.hits += 1
    checkIfWin()
    update()
}

// function for the first "type of attack" button: initially "punch"
// also updates the health and the hit totals
function attack2() {
    addMods()
    endTarget.health -= (addMods() + 5)
    endTarget.hits += 1
    checkIfWin()
    update()
}

// function for the third "type of attack" button: initially "kick"
// also updates the health and the hit totals
function attack3() {
    endTarget.health -= (addMods() + 10)
    endTarget.hits += 1
    checkIfWin()
    update()
}

function checkIfWin(){
    if (endTarget.health <=0) {
        endTarget.health = 0
        win()
    }
}
//*********************************************
//************************************************ */
// function to handle the actions when submit button pressed: attacker name input
function attackName(event){
 //   debugger
    event.preventDefault();
    attacker = new Character(event.target.atname.value, 100)
    document.getElementById("name-input").style.visibility = "hidden"
    document.getElementById("type-of-attack").style.visibility = "visible"
    document.getElementById("at1").innerText = (event.target.item1.value)
    document.getElementById("at2").innerText = (event.target.item2.value)
    document.getElementById("at3").innerText = (event.target.item3.value)
    update()
}

function win(){
//    var winTitle = "<h1 class='wintext'> CONGRATULATIONS YOU HAVE WON!!!</h1>"
    document.getElementById('win').innerText = 'CONGRATULATIONS YOU HAVE WON!!!'
    document.getElementById('tar-pic').src = 'assets/images/wackedOut-lost.jpg'
}

//function to update the health info on web page.
function update() {
    document.getElementById('healthNum').innerText = endTarget.health
    document.getElementById('hithNum').innerText = endTarget.hits
    document.getElementById('nameID').innerText = endTarget.name
}

// function to add items to be used to modify attack numbers.
function giveItemToTarget(atItem) {
    endTarget.items.push(items[atItem])
}

// function to total up the attack modifiers
function addMods() {
    var modTotal = 0
    for (let i = 0; i < endTarget.items.length; i++) {
        let mod = endTarget.items[i];
        modTotal += mod.modifier
    }
    return modTotal

}
// function to reset game to starting defaults
function reset(){
   endTarget = new Character('Wacky', 100)  //bug bug: when I update this on line 4 I will need to fix this also 
   //BUG BUG need to add entry for attacker
   document.getElementById('win').innerText = ''
   document.getElementById('tar-pic').src = 'assets/images/wackedOut.jpg'
   document.getElementById("name-input").style.visibility = "visible";
   document.getElementById("type-of-attack").style.visibility = "hidden";
   document.getElementById("at1").innerText 
   document.getElementById("at1").innerText = 'Slap'
   document.getElementById("at2").innerText = 'Punch'
   document.getElementById("at3").innerText = 'Kick'
    update()
}

//Constructs
function Character(name, health) {
    this.name = name;
    this.health = health;
    this.hits = 0;
    this.items = []
}

function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}



update()