// 1 XP Divide the canvas into 4 / 16 / 64 equal parts and repeat the line play pattern in each quarter

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

/* canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight; */

function drawTheLines(numberOfLines: number, topColor: string, bottomColor: string) {
    ctx.strokeStyle = topColor;
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / numberOfLines * i, 0);
        ctx.lineTo(canvas.width, canvas.height / numberOfLines * i);
        ctx.stroke();
    }
    ctx.closePath();
    ctx.strokeStyle = bottomColor;
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / numberOfLines * i);
        ctx.lineTo(canvas.width / numberOfLines * i, canvas.height);
        ctx.stroke();
    }
}

drawTheLines(25, 'purple', 'green');