import { themes } from './theme';

export function initChart(data) {
    console.log('Chart will be initialized', data);
    draw();
}

const BOX_WIDTH = 10;
const BOX_COLOR = themes.standard.level0;

function draw() {
    let canvas = document.querySelector('.chart');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        // ctx.strokeStyle = '#FFF';
        ctx.fillStyle = BOX_COLOR;

        for (let i = 0; i < 7; i++) {
            ctx.fillRect(0, (i*(BOX_WIDTH + 3)), BOX_WIDTH, BOX_WIDTH);
        }
        

    }
}