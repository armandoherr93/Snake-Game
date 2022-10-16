import { canvas, ctx, tileCount, tileSize } from "./main.js";
import { headX, headY, body, Segment, gameStarted } from "./snake.js"

let appleX = 5;
let appleY = 5;
export let score = 0;
export let tailLength = 2;

export function generateFood() {
    drawApple();
    if (gameStarted() == true) {
        changeFoodLocation();
    }

}

function drawApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
    if (headX == appleX && headY == appleY) {
        tailLength++;
        score++;
        return true;
    }
    for (let i = 0; i < body.length; i++) {
        let segment = body[i];
        if (appleX == segment.x && appleY == segment.y) {
            return true;
        }   
    }
    
}

function changeFoodLocation() {
    while (checkAppleCollision() == true) {
        appleX = Math.floor(Math.random(appleX) * tileCount);
        appleY = Math.floor(Math.random(appleY) * tileCount);
    }

}

export function displayScore() {
    ctx.font = '15px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${score}`, 5, 15);
}