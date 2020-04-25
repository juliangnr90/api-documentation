import React, { useEffect, useState } from 'react';
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
        endpoints: Endpoints[block].map(el => {
            return { 
                method: el.method, 
                name: el.title, 
                route: '/' + el.block + '-' + el.method + el.path.url.replace(/\//g, '-'),
                data: JSON.parse(JSON.stringify(el))
            }
        })
    }
});

// const Home = () => {
//     useEffect(() => {
//         console.log("cdm home")
//     }, [])
//     return (
//         <div>HOLA</div>
//     )
// }

const App = () => {

    // const [isReady, setIsReady] = useState(false);
    // const [routes, setRoutes] = useState([]);

    // useEffect(() => {
    //     console.log("initialApiReference", initialApiReference)
    //     const newRoutes = initialApiReference.map(item => JSON.parse(JSON.stringify(item)));
    //     console.log("newRoutes", newRoutes)
    //     setRoutes(newRoutes);
    // }, []);

    // useEffect(() => {
    //     console.log("routes", routes)
    //     if(routes.length) {
    //         setIsReady(true);
    //     }
    // }, [routes]);

    // if(!isReady) {
    //     return <div></div>;
    // }

    return (
        <Router>
            <Layout initialApiReference={initialApiReference}>
                {/* {
                    [1, 2].map(() => {
                        return <Home></Home>
                    })
                } */}
                <Switch>
                    {/* {
                        routes.map(r => {
                            return r.endpoints.map(endpoint => {
                                return (
                                    <Route exact={true} path={endpoint.route}>
                                        <Template data={endpoint.data} foo={endpoint.route}/>
                                    </Route>
                                )
                            })
                        })
                    } */}
                    {
                        initialApiReference.map(block => {
                            return block.endpoints.map(endpoint => {
                                console.log("crear ruta", endpoint);
                                return <Route exact={true} path={endpoint.route} component={() => <Template data={endpoint.data} />} />
                                // return (
                                //     <Route exact={true} path={endpoint.route}>
                                //         <Template data={endpoint.data} />
                                //     </Route>
                                // )
                            })
                        })
                    }
                    {/* <Route exact={true} path={'/Profiles-GET-{_userId}-profile'} component={() => <Template foo='Pofile' />} />
                    <Route exact={true} path={'/HQ-POST-hq'} component={() => <Template foo='HQ' />} /> */}

                    {/* <Route path="/">
                        <Home />
                    </Route> */}
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
