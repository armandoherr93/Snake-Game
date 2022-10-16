import { ctx, tileCount, tileSize } from "./main.js";
import { tailLength } from "./apple.js";

let xVelocity = 0;
let yVelocity = 0;
export const body = [];
export let headX = 10;
export let headY = 10;

export class Segment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export function drawSnake() {
    for (let i = 0; i < body.length; i++) {
        let segment = body[i];
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x * tileCount, segment.y * tileCount, tileSize, tileSize);
    }
    body.push(new Segment(headX, headY));
    if (body.length > tailLength) {
        body.shift();
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}


export function moveSnake() {
    headY = headY + yVelocity;
    headX = headX + xVelocity;
}

export function changeSnakeDirection() {
    document.addEventListener('keydown', (e) => {
        switch(e.keyCode) {
            //up
            case 87:
                if (yVelocity == 1) return;
                yVelocity = -1, xVelocity = 0;
                break;
            //down
            case 83:
                if (yVelocity == -1) return;
                yVelocity = 1, xVelocity = 0;
                break;
            //right
            case 68:
                if (xVelocity == -1) return;
                yVelocity = 0, xVelocity = 1;
                break;
            //left
            case 65:
                if (xVelocity == 1) return;
                yVelocity = 0, xVelocity = -1;
                break;
        }
    });
}

export function gameStarted() {
    if (yVelocity == 0 && xVelocity == 0) {
        return false;
    } else {
        return true;
    }
}

export function gameOver() {
    if (headX >= tileCount || headX < 0 || headY >= tileCount || headY < 0) {
        return true;
    }
    for (let i = 0; i < body.length; i++) {
        let segment = body[i];
        if (gameStarted() == true) {
            if (headX == segment.x && headY == segment.y) {
                return true;
            }
        }
    }
}
