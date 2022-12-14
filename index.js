

function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector("img.dice-1").setAttribute("src", `img/dice-${randomNumber1}.png`); // img .dice-1 != img.dice-1
    document.querySelector("img.dice-2").setAttribute("src", `img/dice-${randomNumber2}.png`);
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1.title").innerHTML = "🏆 Player 1 Wins"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1.title").innerHTML = "Player 2 Wins 🏆"
    } else {
        document.querySelector("h1.title").innerHTML = "Draw"
    }
}


