import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import UserList from './views/Users/List';
import Template from './components/Template';

import Endpoints from './data';
const keys = Object.keys(Endpoints);
const initialApiReference = keys.map(block => {
    return {
        name: block,
        opened: false,
        endpoints: Endpoints[block].map(el => ({ 
            method: el.method, 
            name: el.title, 
            route: '/' + el.block + '-' + el.method + el.path.url.replace(/\//g, '-'),
            data: el
        }))
    }
});

const Home = () => {
    return (
        <div></div>
    )
}

const App = () => {
    return (
        <Router>
            <Layout initialApiReference={initialApiReference}>
                <Switch>
                    {
                        initialApiReference.map(block => {
                            return block.endpoints.map(endpoint => {
                                console.log("crear ruta", endpoint);
                                return (
                                    <Route path={endpoint.route}>
                                        <Template data={endpoint.data} />
                                    </Route>
                                )
                            })
                        })
                    }
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
