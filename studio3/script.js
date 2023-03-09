(function () {
    "use script";
    console.log("reading js");
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['images/1die.jpg','images/2die.jpg','images/3die.jpg','images/4die.jpg','images/5die.jpg','images/6die.jpg'],
        players: ['Player 1','Player 2'],
        score: [0,0], // player position corresponds with score position
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29 // threshold for winning
    };

    //sounds - sources in footer
    // Shake And Roll Dice-SoundBible.com-591494296
    const rollSound = new Audio('sounds/roll.mp3');

    // Ta Da-SoundBible.com-1884170640
    const winSound = new Audio('sounds/win.mp3');

    // Open & Closing "Rules" Overlay
    document.querySelector('.open').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });
    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });
    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
        document.getElementById('overlay').className = 'hidden';
        }
    });

    //Starting the game
    startGame.addEventListener('click', function(){
        // randomly set the game index, which player goes first
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        document.body.style.backgroundImage += "url('images/background1.jpg')";

        // gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id="quit">X Quit</button>'; // += adds to what is already there, adding quit button

        document.getElementById('quit').addEventListener('click',function(){
            location.reload();
            // refresh back
        })
        setUpTurn(); // call this code
    })

    function setUpTurn(){
        game.innerHTML = `<h2>Roll the dice for ${gameData.players[gameData.index]}</h2>`;
        actionArea.innerHTML = '<button id="roll">Roll</button>'
        document.getElementById('roll').addEventListener('click',function(){
            throwDice();
            rollSound.play();
        })
    }

    function throwDice(){
        actionArea.innerHTML= '';
        // get randome values for 1-6 for the score
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;

        game.innerHTML = `<h2>${gameData.players[gameData.index]}'s Turn</h2>`; // player 1 or 2

        // put the dice images on the screen; the dice array index needs to be one less than roll1 and roll2
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
        
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // gameData.rollSum=2; //testing
        // console.log(gameData.rollSum);

        // if two 1's are rolled...
        if (gameData.rollSum === 2){
            console.log('snake eyes were rolled');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0; // score reset to zero
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); // if... else...

            // show current score
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice was a 1');
            //switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        }
        // if neither dies is a 1...
        else{
            console.log('the game proceeds');
            // gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain" class="roller">Roll</button><button id="pass">Pass</button>'

            document.getElementById('rollagain').addEventListener('click', function(){
                // setUpTurn();
                throwDice();
                rollSound.play();
            });

            document.getElementById('pass').addEventListener('click', function(){
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }
    
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            game.innerHTML = `<h2 style="text-align: center">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            winSound.play();
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'Restart';
        }
        else{
            //show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = 
            `<p id="score1"><strong>${("0"+gameData.score[0]).slice(-2)}</strong></p>
            <p id="score2"><strong>${("0"+gameData.score[1]).slice(-2)}</strong></p>
            <img src="images/scorekeep.png" alt="sign1" id="sign1">
            <img src="images/scorekeep.png" alt="sign2" id="sign2">`;
    }
})();