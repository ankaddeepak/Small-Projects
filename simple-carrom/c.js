// script.js

const board = document.getElementById("carrom-board");
const striker = document.getElementById("striker");
const pockets = document.querySelectorAll(".pocket");
const resetButton = document.getElementById("reset");

let strikerPosition = { x: 185, y: 360 };
let strikerVelocity = { x: 0, y: 0 };

// Move the striker horizontally
document.addEventListener("keydown", (e) => {
  const step = 10;

  if (e.key === "ArrowLeft" && strikerPosition.x > 10) {
    strikerPosition.x -= step;
  } else if (e.key === "ArrowRight" && strikerPosition.x < 360) {
    strikerPosition.x += step;
  }

  updateStrikerPosition();
});

// Launch the striker
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    strikerVelocity.y = -5; // Upward movement
    moveStriker();
  }
});

// Update striker position on the board
function updateStrikerPosition() {
  striker.style.left = `${strikerPosition.x}px`;
  striker.style.top = `${strikerPosition.y}px`;
}

// Move the striker with velocity
function moveStriker() {
  const interval = setInterval(() => {
    strikerPosition.x += strikerVelocity.x;
    strikerPosition.y += strikerVelocity.y;

    updateStrikerPosition();

    // Stop the striker if it leaves the board
    if (strikerPosition.y <= 0 || strikerPosition.y >= 370) {
      strikerVelocity = { x: 0, y: 0 };
      clearInterval(interval);
    }

    // Check for collisions with pockets
    checkCollisionWithPockets();
  }, 20);
}

// Collision detection with pockets
function checkCollisionWithPockets() {
  pockets.forEach((pocket) => {
    const pocketRect = pocket.getBoundingClientRect();
    const strikerRect = striker.getBoundingClientRect();

    if (
      strikerRect.left < pocketRect.right &&
      strikerRect.right > pocketRect.left &&
      strikerRect.top < pocketRect.bottom &&
      strikerRect.bottom > pocketRect.top
    ) {
      alert("Striker pocketed!");
      resetGame();
    }
  });
}

// Reset the game
function resetGame() {
  strikerPosition = { x: 185, y: 360 };
  strikerVelocity = { x: 0, y: 0 };
  updateStrikerPosition();
}

// Reset button functionality
resetButton.addEventListener("click", resetGame);