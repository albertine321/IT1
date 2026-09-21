const cards = document.querySelectorAll('.memory-card') //velger alle elementene som har memory-card som class og legger den i "cards" variabelen.

let hasFlippedCard = false; 
let lockBoard = false;
let firstCard, secondCard;

function flipCard() { //funksjonen vender kortet man klikker på
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip') //this blir brukt som et nøkkelord og spesifiserer at det er akkurat det kortet du har klikket på som skal vendes. F.eks kan this være kort nr.3 eller nr.12. classList er en liste med bare ett element. 

    if(!hasFlippedCard){ //hvis ingen kort blir flippet blir hasFlippedCard true og flippedCard blir det kortet som er trykket.
        hasFlippedCard = true;
        firstCard = this;
    return; // må skrive notater til
}

secondCard = this;

checkForMatch()

}

function checkForMatch() {
    if (firstCard.dataset.meme === secondCard.dataset.meme) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();

    }, 1500);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard)); //går gjennom hvert kort i cards-lista og da legger til en "click" som kjører flipCard().

//toggle sjekker på classList om elementet har klassen flip fra før. Hvis nei → legg til flip. Elementet blir da <div class="memory-card flip"></div> Hvis ja → fjern flip. Elementet blir tilbake til <div class="memory-card"></div>. Det gjør at kortet kan vendes både fram og tilbake.