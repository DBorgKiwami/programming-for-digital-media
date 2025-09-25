console.log("Hello");
var playerScore = 0;
let listOfGames = ["Hollow Knight: Silksong", "Clair Obscur: Expedition 33", "Blue Prince", "Borderlands 4", "Abiotic Factor"];
let arbitraryNumber = 50;
console.log("Arbitrary Number: " + arbitraryNumber);
arbitraryNumber *= 5;
console.log("Arbitrary Number, but i multiplied it by 5: " + arbitraryNumber);
console.log("Some video games i enjoy " + listOfGames);
console.log(listOfGames[1]);
console.log(listOfGames[2]);

function collectPoint(){
    console.log("Score Increased")
    playerScore += 1;
}

function displayScore(){
    if (playerScore % 2 == 1){
        console.log("Score = " + playerScore)
    }
    else{
        console.log("Score, but its Even = " + playerScore)
    }
}
displayScore()
collectPoint()
displayScore()