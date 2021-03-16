import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import './App.css';
import TvShows from './Components/tvShows.component';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={TvShows}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


const PageNotFound = () => {
    return <h1>! 404 Page not found  </h1>
}
