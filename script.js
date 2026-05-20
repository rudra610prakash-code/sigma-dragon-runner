let score = 0;
let cross = true;
let gameIsOver = false;

const audio = new Audio('music.mp3');
const audiogo = new Audio('gameover.mp3');
audio.loop = true;


document.addEventListener('keydown', (e) => {

    if (audio.paused && !gameIsOver) {
        audio.play();
    }

    const dino = document.querySelector('.dino');

    if (e.key === "ArrowUp") {
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }

    if (e.key === "ArrowRight") {
        let dinoX = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px";
    }

    if (e.key === "ArrowLeft") {
        let dinoX = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
});

setInterval(() => {

    if (gameIsOver) return;

    const dino = document.querySelector('.dino');
    const obstacle = document.querySelector('.obstacle');
    const gameOverText = document.querySelector('.gameOver');

    let dx = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));

    let ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    // Collision detection
    if (offsetX < 73 && offsetY < 52) {
        gameIsOver = true;

        gameOverText.innerHTML = "Game Over - Reload to Play Again";
        obstacle.classList.remove('obstacleAni');

        
        audio.pause();
        audio.currentTime = 0;

        
        audiogo.currentTime = 0;
        audiogo.play();

        setTimeout(() => {
            audiogo.pause();
            audiogo.currentTime = 0;
        }, 1000);
    }

    
    else if (offsetX < 145 && cross) {
        score++;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);

        
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('animation-duration'));
            let newDur = Math.max(0.5, aniDur - 0.1);
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 10);


function updateScore(score) {
    document.getElementById('scoreCont').innerHTML = "Your Score: " + score;
}