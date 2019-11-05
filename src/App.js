import React from 'react';
import './App.scss';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return ( 
            <section className="App" >
                <h1>지탁 순 QT 기록표</h1>
                <Main />
                <Footer />
            </section>
        );
    }
}

export default App;
