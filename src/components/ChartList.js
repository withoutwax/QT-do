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

    render() {
        console.log('render');
        let chartView = this.state.dates.map((data, index) => {
            let props = {
                chartData: data,
                chartNumber: index
            }
            return <Chart key={index} {...props} />
        });

        return(
            <div className="chart-container">
                {/* <canvas className="chart">Chart</canvas> */}

                { chartView }
            </div>
        );
    }
}

export default ChartList;