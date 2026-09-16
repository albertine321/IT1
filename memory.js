const container = document.getElementById("container");

let element = document.createElement("div");
element.id = "box"

let cards = []

for (let i = 1; i < 8; i++) {
    cards.push(i)
    cards.push(i)
}

let kortListe = []

cards.forEach(element => {
    let tmp = {
        value: element,
        flipped: false,
        scored: false,
    }
    kortliste.push(tmp)
});

console.log(kortListe)
let currentPair = []


kortListe.forEach(elem => {
    let kort = document.createElement("div")
    console.log(elem)
    kort.id = "box"
    kort.addEventListener('click', (event) => {
        console.log(elem.value)
        elem.flipped = true
        console.log(kortListe)
    })
container.appendChild(kort)
})
