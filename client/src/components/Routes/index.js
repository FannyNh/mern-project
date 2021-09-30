import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Homepage from '../../pages/HomePage'
import Trending from '../../pages/Trending'
import Profil from '../../pages/Profil'

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage}></Route>
                <Route path="/trending" exact component={Trending}></Route>
                <Route path="/profil" exact component={Profil}></Route>
                <Redirect to="/" />

            </Switch>
        </Router>
    );
};

export default index;