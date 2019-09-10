import React from 'react';
import Chart from './Chart';

import '../scss/Chart.scss';

class ChartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: this.props.apiState.dates,
        }
    }
    // componentDidMount = () => {
    //     // console.log(this.props.apiState.dates);

    //     // initChart(this.state.dates[0], '.chart0');
    // }

    render() {
        console.log('render');
        let chartView = this.state.dates.map((data, index) => {
            let props = {
                chartData: data,
                chartNumber: index
            }
            return <Chart key={index} {...props} />
            // return <canvas key={index} className={`chart${index}`}>Chart</canvas>;
        });
        // initChart(this.state.dates[0], ".chart0");

        return(
            <div className="chart-container">
                {/* <canvas className="chart">Chart</canvas> */}

                { chartView }
            </div>
        );
    }
}

export default ChartList;