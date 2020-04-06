import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import UserList from './views/Users/List';

const Home = () => {
    return (
        <div></div>
    )
}

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/user-list">
                        <UserList />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
