import { generateFood, displayScore, score } from "./apple.js";
import { changeSnakeDirection, drawSnake, moveSnake, gameOver} from "./snake.js";

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
export let tileCount = 20;
export let tileSize = canvas.width / tileCount - 2;
export let speed = 10;


function update() {
    clearScreen();
    drawSnake();
    moveSnake();
    changeSnakeDirection();
    generateFood();
    if (gameOver() == true) {
        ctx.font = '22px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`Game Over - Your score is: ${score}`, 65, 200);
        ctx.fillText(`To restart the game press F5`, 65, 240);
        return;
    }
    displayScore();
    setTimeout (update, 1000 / speed);
}

function clearScreen() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


update();