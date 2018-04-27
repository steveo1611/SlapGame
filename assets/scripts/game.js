var health = 100
var name1 = "wacky"
var hits = 0


function slap(){
    health--
    hits++
    // alert(health)
    update()
}

function punch(){
    health -= 5
    hits += 1
 //   alert(health)
    update()
}

function kick(){
    health -= 10
    hits += 1
    // alert(health)
    update()
}

function update(){
    // @ts-ignore
    document.getElementById('healthNum').innerText = health
    // @ts-ignore
    document.getElementById('hithNum').innerText = hits
    document.getElementById('nameID').innerText = name1
}



update()