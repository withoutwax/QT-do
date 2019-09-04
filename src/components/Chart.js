import React from 'react';
import { initChart } from '../chart/index'; 

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: this.props.apiState.dates
        }
    }
    componentDidMount = () => {
        console.log(this.props.apiState.dates);
        initChart(this.state.dates);
    }

    render() {
        return(
            <canvas className="chart">Chart</canvas>
        );
    }
}

export default Chart;