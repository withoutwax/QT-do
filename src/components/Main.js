import React from 'react';
import config from '../config';
import { load } from '../spreadsheet';

import ChartList from './ChartList';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }

    componentDidMount = () => {
        window.gapi.load('client', this.initClient);
    }

    initClient = () => {
        // 2. Initialize the JavaScript client Library
        window.gapi.client
            .init({
                'apiKey': config.apiKey,
                // Your API key will be automaticlly added to the Discovery Documents URLs.
                'discoveryDocs': config.discoveryDocs
                
            })
            .then(() => {
                // 3. Initialize and make the API request.
                load(this.onLoad);
        });
    };

    onLoad = (data, error) => {
        if (data) {
            const dates = data.dates;
            this.setState({ dates });
        } else {
            this.setState({ error });
        }
    }

    render() {
        console.log('Main.js', this.state.dates);

        // Render the chartList after the data is received by the API
        const chartList = this.state.dates.length > 0 ? <ChartList apiState={this.state}/> : <div>Loading...</div>;
        return(
            <main>
                { chartList }
            </main>
        );
    }
}

export default Main;