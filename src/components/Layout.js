import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Endpoints from '../data';
// const keys = Object.keys(Endpoints);
// const initialApiReference = keys.map(block => {
//     return {
//         name: block,
//         opened: false,
//         endpoints: Endpoints[block].map(el => ({ 
//             method: el.method, 
//             name: el.title, 
//             route: '/' + el.block + '-' + el.method + el.path.url.replace(/\//g, '-')
//         }))
//     }
// });
// console.log("initialApiReference", initialApiReference)

const _getMethod = (method) => {
    switch(method) {
        case 'GET':
            return <span className="badge badge-success">GET</span>
        case 'POST':
            return <span className="badge badge-primary">POST</span>
        default:
            return <span></span>
    }
}

const Layout = props => {

    const [apiReference, setApiReference] = useState(props.initialApiReference); 

    useEffect(() => {
    }, [apiReference]);

    const onClickEntity = (idx, entity) => {
        return () => {
            const newApiReference = apiReference.map((el, i) => {
                if(idx === i) {
                    return Object.assign({}, el, { opened: !el.opened });
                } else {
                    return el;
                }
            });
            setApiReference(newApiReference);
        }
    } 

    return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Documentaci&oacute;n</a>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>API reference</span>
                            </h6>
                            <ul className="nav flex-column">
                                {
                                    apiReference.map((item, idx) => {
                                        if(!item.opened) {
                                            return (
                                                <li className="nav-item" key={idx}>
                                                    <div className="nav-link" onClick={onClickEntity(idx, item)}>
                                                        <span data-feather="home"></span> {item.name} {item.opened ? '-' : '+'}
                                                    </div>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <div key={idx}>
                                                    <li className="nav-item">
                                                        <div className="nav-link" onClick={onClickEntity(idx, item)}>
                                                            <span data-feather="home"></span> {item.name} {item.opened ? '-' : '+'}
                                                        </div>
                                                    </li>
                                                    {
                                                        item.endpoints.map(endpoint => {
                                                            return (
                                                                <li className="nav-item" key={endpoint.route}>
                                                                    <Link className="nav-link" to={endpoint.route}>
                                                                        <span>{_getMethod(endpoint.method)} {endpoint.name}</span>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
};

export default Layout;