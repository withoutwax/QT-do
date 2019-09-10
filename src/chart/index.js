import moment from 'moment';
import { themes } from './theme';

export function initChart(data, chartElement) {
    console.log('Chart will be initialized', data, 'Chart Element:', chartElement);
    chart(data, chartElement);
}

const BOX_WIDTH = 10;
const BOX_HEIGHT = 10;
const CANVAS_WIDTH = 10*80;
const CANVAS_HEIGHT = 10*20;
const BOX_COLOR = themes.standard.level0;
const THEME_01 = themes.standard.level1;
const OFFSET_X = 20;
const OFFSET_Y = 50;

function chart(data, chartElement) {
    let canvas = document.querySelector(`.${chartElement}`);
    console.log('canvas', canvas, 'chartElement', chartElement);
    // console.log(typeof chartElement);
    console.log('data', data);
   
    // console.log( 'dayOfYear', dayOfYear );
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        let day;
        let yearStartDay = Number(moment().dayOfYear(1).format('d')) + 1;
        let week;
        let canvas_index = 1; // Finding the xth day of the year for canvas
        let today = moment();

        console.log(typeof yearStartDay);

        ctx.canvas.width  = CANVAS_WIDTH;
        ctx.canvas.height = CANVAS_HEIGHT;
        // console.log(calculateDays(data[0], 14) );
        // console.log(data[14]);
        // console.log(moment(undefined))
        let dateIndex = 1;

        // TEXT: Title
        ctx.font = "normal 24px Heebo";
        ctx.fillText(data[0], 0, 24);

        for (week = 1; week <= 53; week++) {
            for (day = 1; day <= 7; day++) {

                // Setting the start date (eg - Mon, Tues etc)
                if (week === 1 && day === 1) {
                    day += yearStartDay;
                }
                // console.log(typeof day);

                
                // ctx.fillRect((week*(BOX_WIDTH + 3)), (day*(BOX_HEIGHT + 3)), BOX_WIDTH, BOX_WIDTH);

                if (calculateDays(data, dateIndex) === canvas_index) { // Did Exercise
                    // console.log("red_index", canvas_index);
                    ctx.fillStyle = THEME_01;
                    dateIndex += 1;
                } else if (calculateDays([today], 0) === canvas_index) {
                    // console.log("today!");
                    ctx.fillStyle = '#32a852';
                } else if (calculateDays([today], 0) < canvas_index) {
                    ctx.fillStyle = '#fcba03';
                } else {
                    // console.log("canvas_index", canvas_index);
                    ctx.fillStyle = BOX_COLOR;
                }

                ctx.fillRect((OFFSET_X + (week*(BOX_WIDTH + 3))), (OFFSET_Y + (day*(BOX_HEIGHT + 3))), BOX_WIDTH, BOX_WIDTH);
                // ctx.fillText(canvas_index, (week*(BOX_WIDTH + 3)), (day*(BOX_HEIGHT + 3)));
                // console.log(canvas_index);
                canvas_index += 1;
                if (canvas_index > 365) {
                    console.log("NEXT YEAR");
                    break;
                }
                
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