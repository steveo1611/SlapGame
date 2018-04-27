// var health = 100
// var name1 = "wacky"
// var hits = 0


var endTarget = new Target('Wacky', 100)

var items = {
    shield:new Item('Shield',0.3, "This is an awesome shield!"),
    fist: new Item('fist of thunder', 10, 'will give +10 damage'),
    rock: new Item('Rock', 3, 'just a simple but hard rock')
}


function slap(){
   // debugger
    endTarget.health--
    endTarget.hits++
    // alert(health)
    update()
}

function punch(){
    endTarget.health -= 5
    endTarget.hits += 1
 //   alert(health)
    update()
}

function kick(){
    endTarget.health -= 10
    endTarget.hits += 1
    // alert(health)
    update()
}

function update(){
    // @ts-ignore
    document.getElementById('healthNum').innerText = endTarget.health
    // @ts-ignore
    document.getElementById('hithNum').innerText = endTarget.hits
    document.getElementById('nameID').innerText = endTarget.name
}

function giveItemToTarget() {
    //bug bug: hard coded shield for now
    //BUG BUG: this could cause some issues later: KEEP EYE ON!!!!
       endTarget.items.push(items.shield)
       //bug bug: temp entry
    //endTarget.items.push(items.rock)
       //endTarget.items.push(items.fist)

    }
    
function addMods(){
    var modTotal = 0
    for (let i = 0; i < endTarget.items.length; i++) {
        return modTotal += endTarget.items[i].modifier  
    }

}

//Constructs
function Target (name, health){
    this.name = name;
    this.health = health;
    this.hits = 0; 
    this.items= []
}

function Item(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}


//giveItemToTarget()
//addMods()

update()