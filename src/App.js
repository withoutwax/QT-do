import React from 'react';
import './App.scss';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <section className="App" >
                <h1>Habit Tracker</h1>
                <Main />
                <Footer />
            </section>
        );
    }
}

export default App;
