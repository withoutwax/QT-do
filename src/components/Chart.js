import React from 'react';
import { initChart } from '../chart/index'; 

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.chartData.date,
            chartNumber: this.props.chartNumber
        }
    }
    componentDidMount = () => {
        // console.log(this.state.date);
        console.log("Chart Component Did Mount");
        initChart(this.state.date, `chart${this.state.chartNumber}`);
    }

    render() {
        console.log("Chart render");
        return(
            <div>
                <canvas className={`chart${this.state.chartNumber}`}>Chart</canvas>
            </div>
        );
    }

}

export default Chart;