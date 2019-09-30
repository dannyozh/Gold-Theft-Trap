console.log("woo fun animation");
//basic win conditions

var win = function () {
    if (player.gold === 5 || computer.gold === 0) {
        document.querySelector("#resultBox").innerHTML =playerName + " wins!";
        document.querySelector(".player-options").style.visibility = "hidden";
        document.querySelector("#playerScore").style.background = "yellow";
        confetti.start();
    } else if (computer.gold === 5 || player.gold === 0) {
        document.querySelector("#resultBox").innerHTML = "Computer wins!";
        document.querySelector(".player-options").style.visibility = "hidden";
        document.querySelector("#computerScore").style.background = "yellow";
        confetti.start();
    } else if (computer.gold === 5 && player.gold === 5) {
        document.querySelector("#resultBox").innerHTML = "It's a draw!";
        document.querySelector(".player-options").style.visibility = "hidden";
    } else if (playerChoice === "Theft" && computerChoice === "Trap") {
        document.querySelector("#resultBox").innerHTML = "Computer used Trap" + "You used Theft" + "Computer wins instantly with" + " " + computer.gold + " gold!";
        document.querySelector("#computerScore").style.background = "yellow";
        document.querySelector(".player-options").style.visibility = "hidden";
        confetti.start();
    } else if (playerChoice === "Trap" && computerChoice === "Theft") {
        document.querySelector("#resultBox").innerHTML = "Computer played Theft." + " " + playerName + " called the computer's bluff, winning instantly with a total of" + " " + player.gold + " gold.";
        document.querySelector(".player-options").style.visibility = "hidden";
        document.querySelector("#playerScore").style.background = "yellow";
        confetti.start();
    }
};


//create counters

var createCounters = function () {

var pageDiv = document.createElement('div');
pageDiv.className = "page-div";
pageDiv.id = "pageDiv";
//create counters div
var counterDiv = document.createElement('div');
counterDiv.className = "counter-boxes";
counterDiv.id = "counterBoxes";

// create results div
var resultsDiv = document.createElement('div');
resultsDiv.className = "result-box";
resultsDiv.id = "resultBox";
resultsDiv.innerHTML = "Result will be determined here!";

// create player counter

var playerCount = document.createElement('div');
playerCount.className = "player-counter";
playerCount.id = "playerScore";

//create text in player box
var playerCountText = document.createElement('p');
playerCountText.className = "player-text";
playerCountText.id = "playerScoreText";
playerCountText.innerHTML = playerName + " gold score is " + player.gold + ".";

//create starting img for  player count box

var starterImage1 = document.createElement("img");
starterImage1.setAttribute("src", "imgs/gold-coin.jpg");
starterImage1.id = "starter-image1";

var starterImage2 = document.createElement("img");
starterImage2.setAttribute("src", "imgs/gold-coin.jpg");
starterImage2.id = "starter-image2";

//created buttons div and individual buttons

var buttonList1 = document.createElement("div");
buttonList1.className = "player-options";

var goldButton = document.createElement("button");
goldButton.className = "gold-button";
goldButton.id = "theGoldButton";
goldButton.innerText = "Gold";

var theftButton = document.createElement("button");
theftButton.className = "theft-button";
theftButton.id = "theTheftButton";
theftButton.innerText = "Theft";

var trapButton = document.createElement("button");
trapButton.className = "trap-button";
trapButton.id = "theTrapButton";
trapButton.innerText = "Trap";

// create reset button
var restartButton = document.createElement("button");
restartButton.className = "restart-button";
restartButton.id = "theRestartButton";
restartButton.innerText = "Restart";

// append everything

buttonList1.appendChild(goldButton);
buttonList1.appendChild(theftButton)
buttonList1.appendChild(trapButton);
playerCount.appendChild(playerCountText);
playerCount.appendChild(starterImage1);
playerCount.appendChild(buttonList1);

counterDiv.appendChild(playerCount);

//create computer box

var computerCount = document.createElement('div');
computerCount.className = "computer-counter";
computerCount.id = "computerScore";

var computerCountChange = document.createElement('p');
computerCountChange.className = "computer-score";
computerCountChange.id = "computerLog";
computerCountChange.innerHTML = "Computer's gold score is " + computer.gold + ".";

computerCount.appendChild(computerCountChange);
computerCount.appendChild(starterImage2);
counterDiv.appendChild(computerCount);
pageDiv.appendChild(restartButton);
pageDiv.appendChild(resultsDiv);
pageDiv.appendChild(counterDiv);

//append to body

document.body.appendChild(pageDiv);

//button functions
playerMakesChoice();
};

//player choices
var playerMakesChoice = function () {

var playerChooseGold = function () {
    playerChoice = "Gold";
    console.log(playerName, "You chose", playerChoice);
    computerIsChoosing();
    compareResultGold();
    win();
    };
        document.getElementById("theGoldButton").addEventListener('click', playerChooseGold);

var playerChooseTheft = function () {
    playerChoice = "Theft";
    console.log(playerName, "You chose", playerChoice);
    computerIsChoosing();
    compareResultTheft();
    win();
    };

        document.getElementById("theTheftButton").addEventListener('click', playerChooseTheft);

var playerChooseTrap = function () {
    playerChoice = "Trap";
    console.log(playerName, "You chose", playerChoice);
    computerIsChoosing();
    compareResultTrap();
    win();
    };

        document.getElementById("theTrapButton").addEventListener('click', playerChooseTrap);

var clearCounter = function () {
    player.gold = 1;
    computer.gold = 1;
    console.clear();
    document.querySelector(".player-options").style.visibility = "visible";
    document.querySelector("#resultBox").innerHTML = "Result will be determined here!";
    document.querySelector("#playerScoreText").innerHTML = playerName + " gold score is " + player.gold + ".";
    document.querySelector("#computerLog").innerHTML = "Computer's gold score is " + computer.gold + ".";
    document.querySelector("#starter-image1").setAttribute("src", "imgs/gold-coin.jpg");
    document.querySelector("#starter-image2").setAttribute("src", "imgs/gold-coin.jpg");
    document.querySelector("#playerScore").style.background = "white";
    document.querySelector("#computerScore").style.background = "white";
    confetti.stop();
    };
    document.getElementById("theRestartButton").addEventListener('click', clearCounter);

};

//computerIsChoosing function

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