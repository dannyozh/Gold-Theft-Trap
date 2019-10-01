console.log("Up and running. Don't give up!");

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

var playerName;
var playerChoice;
var computerChoice;
var playerCount;

//press start button
var clearPage = function () {
    document.getElementById("start").style.display = "none";
    playerName = prompt("Welcome to Gold Theft Trap. Please enter your name.");
    document.getElementById("box-1").style.display = "none";
    createCounters();
    startAudio();
};

document.querySelector("#start").addEventListener('click', clearPage);

// sound effect
var coinEnter = document.getElementById("startAudio");

function startAudio() {
    coinEnter.play();
};

//winning/losing variations

var compareResultGold = function () {
    if (playerChoice === "Gold" && computerChoice === "Gold") {
        console.log("Both players get 1 Gold");
        player.gold ++;
        computer.gold ++;
            console.log(playerName, "has", player.gold, "gold");
            console.log("computer has", computer.gold, "gold");
            // player score
            document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
            document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/gold-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/gold-coin.jpg");
                // change result
                document.querySelector("#resultBox").innerHTML = "Computer chose Gold. Both players gained 1 gold coin.";

    } else if (playerChoice === "Gold" && computerChoice === "Theft") {
            console.log(playerName, "lost one gold to the computer");
            var computerTheftWin = computer.gold += 1;
            var playerTheftLoss = player.gold -= 1;
            console.log(playerName, "has", playerTheftLoss, "gold");
            console.log("Computer has", computerTheftWin, "gold.");
                document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
                document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
                // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/gold-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/theft-coin.jpg");
                // change result
                document.querySelector("#resultBox").innerHTML = "Computer played Theft." + " " + playerName + " lost one gold coin to the computer.";


    } else if (playerChoice === "Gold" && computerChoice === "Trap") {
        console.log(playerName, "gain 1 Gold");
        player.gold ++;
            console.log(playerName, "has", player.gold, "gold");
            console.log("computer has", computer.gold, "gold.");
            // change text
                document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
                document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/gold-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/trap-coin.jpg");
            // change result
                document.querySelector("#resultBox").innerHTML = "Computer played Trap, but to no avail." + " " +playerName + " gain 1 gold coin.";

    }
};

var compareResultTheft = function() {
    if (playerChoice === "Theft" && computerChoice === "Gold") {
        var playerTheftWin = player.gold += 1;
        var computerTheftLoss = computer.gold -= 1;
            console.log(playerName, "has", playerTheftWin, "gold.");
            console.log("computer has", computerTheftLoss, "gold.");
                document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
                document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
                // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/theft-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/gold-coin.jpg");
                // change result
                document.querySelector("#resultBox").innerHTML = playerName + " played Theft and stole 1 gold from computer.";

    } else if (playerChoice === "Theft" && computerChoice === "Theft") {
        console.log("Both players tried to steal, ending up with no gains.");
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");
            document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
            document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/theft-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/theft-coin.jpg");
            // change result
                document.querySelector("#resultBox").innerHTML = "Both players played Theft, ending up with no gains.";


    } else if (playerChoice === "Theft" && computerChoice === "Trap") {
        console.log("Computer won, ending the game with", computer.gold, "gold.");
            document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
            document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/theft-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/trap-coin.jpg");
    }
};

var compareResultTrap = function () {
    if (playerChoice === "Trap" && computerChoice === "Gold") {
        console.log("Computer gained one gold", playerName, "got nothing.");
        computer.gold += 1;
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");
            document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
            document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/trap-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/gold-coin.jpg");
            // change result
                document.querySelector("#resultBox").innerHTML = playerName + " played Trap against Computer's Gold and gained nothing." + " " + "Computer gained one gold.";


    } else if (playerChoice === "Trap" && computerChoice === "Theft") {
        console.log(playerName, "called the computer's bluff, winning instantly with a total of", player.gold, "gold.");
            document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
            document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/trap-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/theft-coin.jpg");
            // change result

    } else if (playerChoice === "Trap" && computerChoice === "Trap") {
        console.log("Both players tried to trap each other. Both made no gains.");
        console.log(playerName, "has", player.gold, "gold");
        console.log("computer has", computer.gold, "gold");
            document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
            document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
            // change image
                document.querySelector("#starter-image1").setAttribute("src", "imgs/trap-coin.jpg");
                document.querySelector("#starter-image2").setAttribute("src", "imgs/trap-coin.jpg");
            // change result
                document.querySelector("#resultBox").innerHTML = "Both players tried to trap each other. Both made no gains.";

    }
};