const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const ClickToStart = document.querySelector('.ClickToStart');

ClickToStart.addEventListener('click', Start);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
let player = { speed: 5, score: 0, highScore: 0 };

function keydown(e) { keys[e.key] = true; }
function keyup(e) { keys[e.key] = false; }

function Start() {
    gameArea.innerHTML = "";
    startScreen.classList.add('hide');
    player.isStart = true;
    player.score = 0;
    window.requestAnimationFrame(play);
    // Create road lines and opponents
}





function createPlayerCar() {
    car = document.createElement('div');
    car.classList.add('car');
    car.style.left = '175px'; // Center the car
    gameArea.appendChild(car);
}

function createOpponentCar() {
    const opponentCar = document.createElement('div');
    opponentCar.classList.add('Opponents');
    opponentCar.style.left = Math.floor(Math.random() * (gameArea.clientWidth - 50)) + 'px'; // Random horizontal position
    opponentCar.style.top = '0px'; // Start from the top
    gameArea.appendChild(opponentCar);
    oppoCars.push(opponentCar);
}

function play() {
    if (player.isStart) {
        movePlayerCar();
        moveOpponentCars();
        checkCollision();
        updateScore();
        window.requestAnimationFrame(play);
    }
}

function movePlayerCar() {
    const carPosition = car.getBoundingClientRect();
    if (keys.ArrowLeft && carPosition.left > 0) {
        car.style.left = (carPosition.left - player.speed) + 'px';
    }
    if (keys.ArrowRight && carPosition.right < gameArea.clientWidth) {
        car.style.left = (carPosition.left + player.speed) + 'px';
    }
}

function moveOpponentCars() {
    oppoCars.forEach((opponentCar, index) => {
        const opponentPosition = opponentCar.getBoundingClientRect();
        opponentCar.style.top = (opponentPosition.top + player.speed) + 'px';

        // Remove opponent car if it goes out of the game area
        if (opponentPosition.top > gameArea.clientHeight) {
            opponentCar.remove();
            oppoCars.splice(index, 1);
            player.score++;
        }
    });
}

function checkCollision() {
    const carPosition = car.getBoundingClientRect();
    oppoCars.forEach(opponentCar => {
        const opponentPosition = opponentCar.getBoundingClientRect();
        if (
            carPosition.left < opponentPosition.right &&
            carPosition.right > opponentPosition.left &&
            carPosition.top < opponentPosition.bottom &&
            carPosition.bottom > opponentPosition.top
        ) {
            endGame();
        }
    });
}

function endGame() {
    player.isStart = false;
    startScreen.classList.remove('hide');
    highScoreDisplay.innerText = `High Score: ${Math.max(player.score, player.highScore)}`;
    player.highScore = Math.max(player.score, player.highScore);
    alert('Game Over! Your score: ' + player.score);
}

function updateScore() {
    scoreDisplay.innerText = `Score: ${player.score}`;
}