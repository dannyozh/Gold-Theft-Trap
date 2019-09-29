console.log("Up and running. Don't give up!");

//Enter name
var playerName;
var playerChoice;
var computerChoice;

//basic win

var win = function () {
    if (player.gold === 5 || computer.gold === 0) {
        alert(playerName + "wins!");
    } else if (computer.gold === 5 || player.gold === 0) {
        alert("computer wins!");
    }
};

//logging player choice

var playerIsChoosing = function() {
    playerChoice = prompt("Make your choice: Gold, Theft or Trap");
    console.log(playerName, "You chose", playerChoice);
    computerIsChoosing();
    compareResultGold();
    compareResultTheft();
    compareResultTrap();
    win();
    // createCounter();
};

//buttons & selectors

var restartEverything = function () {
    player.gold = 1;
    computer.gold = 1;
    console.clear();
    playerIsChoosing();
};

document.getElementById("gameButtons").style.visibility = "hidden";
document.getElementById("game-box").style.visibility = "hidden";

var clearPage = function () {
    document.getElementById("start").style.display = "none";
    playerName = prompt("Welcome to Gold Theft Trap. Please enter your name.");
    document.getElementById("box-1").style.display = "none";
    document.getElementById("gameButtons").style.visibility = "visible";
    document.getElementById("game-box").style.visibility = "visible";
};

document.querySelector("#start").addEventListener('click', clearPage);
document.querySelector("#continue").addEventListener('click', playerIsChoosing);
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

//create counter using DOM
// var createCounter = function () {
// var newDiv = document.createElement('div');
// newDiv.className = "counter";
// newDiv.id = "score-counter";

// var newDivText = document.createTextNode("score is" + player.gold);

// newDiv.appendChild(newDivText);
// document.body.appendChild(newDiv);
// };
//computer chooses

var computerIsChoosing = function () {
    computerChoice = Math.ceil(Math.random() * 10);
    if (computerChoice < 3.34) {
        computerChoice = "Gold";
        console.log("The computer chooses", computerChoice)
    } else if (computerChoice <= 6.7) {
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
            console.log(playerName, "lost one gold to the computer");
            var computerTheftWin = computer.gold += 1;
            var playerTheftLoss = player.gold -= 1;
            console.log(playerName, "has", playerTheftLoss, "gold");
            console.log("Computer has", computerTheftWin, "gold.");

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
        var playerTheftWin = player.gold += 1;
        console.log(playerName, "has", playerTheftWin, "gold.");
        var computerTheftLoss = computer.gold -= 1;
        console.log("computer has", computerTheftLoss, "gold.");

    } else if (playerChoice === "Theft" && computerChoice === "Theft") {
        console.log("Both players tried to steal, ending up with no gains.");
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");

    } else if (playerChoice === "Theft" && computerChoice === "Trap") {
        console.log("Computer won, ending the game with", computer.gold, "gold.");
    }
};

var compareResultTrap = function () {
    if (playerChoice === "Trap" && computerChoice === "Gold") {
        console.log("Computer gained one gold", playerName, "got nothing.");
        computer.gold += 1;
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");

    } else if (playerChoice === "Trap" && computerChoice === "Theft") {
        console.log(playerName, "called the computer's bluff, winning instantly with a total of", player.gold, "gold.");

    } else if (playerChoice === "Trap" && computerChoice === "Trap") {
        console.log("Both players tried to trap each other. Both made no gains.");
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");
    }
};

//run compare results