console.log("Up and running. Don't give up!");

//Enter name
var playerName = prompt("Welcome to Gold Theft Trap. Please enter your name.");
var playerChoice;
var computerChoice;
//logging player choice

var playerIsChoosing = function() {
    playerChoice = prompt("Make your choice: Gold, Theft or Trap");
    console.log(playerName, "You chose", playerChoice);
    computerIsChoosing();
    compareResultGold();
    compareResultTheft();
    compareResultTrap();
};

var restartEverything = function () {
    player.gold = 1;
    computer.gold = 1;
}

document.querySelector("#butt").addEventListener('click', playerIsChoosing);
document.querySelector("#restart").addEventListener('click', restartEverything);

//global variables, creating player and computer objects

var player = {
    name: playerName,
    gold: 1,
    finalEndState: null,

};

var computer = {
    gold: 1,
    finalEndState: null,
};
// }

//computer chooses

var computerIsChoosing = function () {
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "Gold";
    console.log("The computer chooses", computerChoice)
    } else if (computerChoice <= 0.67) {
        computerChoice = "Theft";
    console.log("The computer chooses", computerChoice)
    } else {
        computerChoice = "Trap";
    console.log("The computer chooses", computerChoice);
    }
};

//compare function
var compareResultGold = function () {
    if (playerChoice === "Gold" && computerChoice === "Gold") {
        console.log("Both players get 1 Gold");
        player.gold ++;
        computer.gold ++;
            console.log(playerName, "has", player.gold, "gold");
            console.log("computer has", computer.gold, "gold");
    } else if (playerChoice === "Gold" && computerChoice === "Theft") {
        console.log(playerName, "lost all your gold to the computer");
            var computerTheftWin = computer.gold + player.gold;
            console.log("Computer won, ending the game with", computerTheftWin, "gold.");
    } else if (playerChoice === "Gold" && computerChoice === "Trap") {
        console.log(playerName, "gain 1 Gold");
        player.gold ++;
            console.log(playerName, "has", player.gold, "gold");
            console.log("computer has", computer.gold, "gold.");
        // if (gameStage === 0) {
        //     // console.log("computer has" + computer.gold + " gold.");
        // } else if (gameStage !== 0) {
        // }
    }
};

var compareResultTheft = function() {
    if (playerChoice === "Theft" && computerChoice === "Gold") {
        var playerTheftWin = player.gold + computer.gold;
        console.log(playerName, "stole all the computer's gold, and has a total of", playerTheftWin, "gold.");
    } else if (playerChoice === "Theft" && computerChoice === "Theft") {
        console.log("Both players tried to steal, ending up with no gains.");
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");
    } else if (playerChoice === "Theft" && computerChoice === "Trap") {
        console.log("Computer won, ending the game with", computer.gold, "gold.");
    }
};

var compareResultTrap = function () {
    // gameStage++;
    if (playerChoice === "Trap" && computerChoice === "Gold") {
        console.log("Computer gained one gold", playerName, "got nothing.");
        computer.gold ++;
        console.log("computer has", computer.gold, "gold");
        console.log(playerName, "has", player.gold, "gold");
    } else if (playerChoice === "Trap" && computerChoice === "Theft") {
        console.log(playerName, "called the computer's bluff, winning instantly with a total of", player.gold, "gold.");
    } else if (playerChoice === "Trap" && computerChoice === "Trap") {
        console.log("Both players tried to trap each other. Both made no gains.")
        console.log("computer has", computer.gold, "gold");
        console.log(playerName, "has", player.gold, "gold");
    }
};

//run compare results