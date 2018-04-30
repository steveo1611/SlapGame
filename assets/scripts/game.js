// Version:1.5

// OLD: creates Target details: uses a constructor to setup all the targets attrubutes.
//var endTarget = new Character('Wacky', 100)
// vars for target and attacker
var endTarget = {}

var attacker = {}

//setup the var globally to list items that can be used to "enhance" attacks
var items = {}

    

// function for the first "type of attack" button: initially "slap"
// also updates the health and the hit totals
function attack1() {
    endTarget.health -= (addMods() + (Math.floor((Math.random()*10)+1)))
    //endTarget.health -= (addMods() + 1)
    endTarget.hits += 1
    checkIfWin()
    update()
}

// function for the first "type of attack" button: initially "punch"
// also updates the health and the hit totals
function attack2() {
    addMods()
    endTarget.health -= (addMods() + (Math.floor((Math.random()*10)+1)))
    //endTarget.health -= (addMods() + 5)
    endTarget.hits += 1
    checkIfWin()
    update()
}

// function for the third "type of attack" button: initially "kick"
// also updates the health and the hit totals
function attack3() {
    endTarget.health -= (addMods() + (Math.floor((Math.random()*10)+1)))
    //endTarget.health -= (addMods() + 10)
    endTarget.hits += 1
    checkIfWin()
    update()
}


// function to handle the actions when submit button pressed: attacker name input (left side)
function attackName(event) {
    event.preventDefault()
    attacker = new Character(event.target.atname.value, 100)
    document.getElementById("name-input").style.display = "none"
    document.getElementById("type-of-attack").style.display = "initial"
    document.getElementById("at1").innerText = (event.target.item1.value)
    document.getElementById("at2").innerText = (event.target.item2.value)
    document.getElementById("at3").innerText = (event.target.item3.value)
    update()
}
// function to handle the actions when submit button pushed for modifiers (same functions as above but for target )
function targetName(event) {
    event.preventDefault()
    endTarget = new Character(event.target.modname.value, 100)
     items = {
        mod1: new Item(event.target.moditem1.value, Math.floor((Math.random()*10)+1), "This is item1!"),
        mod2: new Item(event.target.moditem2.value, Math.floor((Math.random()*10)+1), 'This is item2'),
        mod3: new Item(event.target.moditem3.value, Math.floor((Math.random()*10)+1), 'This is item3')
    }
    document.getElementById("mod-input").style.display = "none"
    document.getElementById("type-of-mods").style.display = "initial"
    document.getElementById("mod-1").innerText = (event.target.moditem1.value)
    document.getElementById("mod-2").innerText = (event.target.moditem2.value)
    document.getElementById("mod-3").innerText = (event.target.moditem3.value)
    update()
}

//function to check if attacker has won yet.
function checkIfWin() {
    if (endTarget.health <= 0) {
        endTarget.health = 0
        win()
    }
}

//function for winning
function win() {
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
function reset() {
    endTarget = new Character('Wacky', 100)  //bug bug: when I update this on line 4 I will need to fix this also 
    //BUG BUG need to add entry for attacker
    document.getElementById('win').innerText = ''
    document.getElementById('tar-pic').src = 'assets/images/wackedOut.jpg'
    document.getElementById("name-input").style.display = "initial";
    document.getElementById("type-of-attack").style.display = "none";
    document.getElementById("atnameid").innerText = "Attacker's name"
    document.getElementById("item1id").innerText = 'Slap'
    document.getElementById("item2id").innerText = 'Punch'
    document.getElementById("item3id").innerText = 'Kick'
    document.getElementById("mod-input").style.display = "initial"
    document.getElementById("type-of-mods").style.display = "none"
    document.getElementById('nameID').innerText = ""
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