import moment from 'moment';
import { themes } from './theme';

export function initChart(data) {
    console.log('Chart will be initialized', data);
    chart(data);
}

const BOX_WIDTH = 10;
const BOX_HEIGHT = 10;
const CANVAS_WIDTH = 10*70;
const CANVAS_HEIGHT = 10*10;
const BOX_COLOR = themes.standard.level0;

function chart(data) {
    let canvas = document.querySelector('.chart');
    console.log('data', data[0].date);
    // console.log( 'dayOfYear', dayOfYear );
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        let day;
        let yearStartDay = moment().dayOfYear(1).format('d');
        let week;
        let canvas_index = 1; // Finding the xth day of the year for canvas

        ctx.canvas.width  = CANVAS_WIDTH;
        ctx.canvas.height = CANVAS_HEIGHT;
        // console.log(calculateDays(data[0], 14) );
        // console.log(data[0].date[14]);
        // console.log(moment(undefined))
        let dateIndex = 1;
        for (week = 1; week <= 52; week++) {
            for (day = 1; day <= 7; day++) {

                ctx.fillStyle = BOX_COLOR;
                ctx.fillRect((week*(BOX_WIDTH + 3)), (day*(BOX_HEIGHT + 3)), BOX_WIDTH, BOX_WIDTH);

                if (calculateDays(data[0].date, dateIndex) === canvas_index) {
                    // console.log("red_index", canvas_index);
                    ctx.fillStyle = '#ff0000';
                    dateIndex += 1;
                } else if (calculateDays(['09/05/2019'], 0) === canvas_index) {
                    // console.log("today!");
                    ctx.fillStyle = '#32a852';
                } else {
                    // console.log("canvas_index", canvas_index);
                    ctx.fillStyle = '#000';
                }

                ctx.fillText(canvas_index, (week*(BOX_WIDTH + 3)), (day*(BOX_HEIGHT + 3)));

                canvas_index += 1;
                
            }
        }

    }
}

function calculateDays(date, i) {
    
    // if (date[i] === "09/05/2019") {
        // console.log(i, date[i]);
    // }
    if (date[i] === undefined) {
        return null;
    }
    
    let currentDate = moment(date[i]);
    let yearStart = moment('01/01/2019');
    let numDays = currentDate.diff(yearStart, 'days');
    return numDays;
    
}