import React, { useState, useEffect } from 'react';
import { TYPES } from '../constants';
import Row from './Row';

const handleObjectSimple = (data) => {
    console.log("data", data);
    const keys = Object.keys(data);
    return keys.map(k => {
        return <div>{k} : {data[k]}</div>
    })
}

const handleObject = (deep, data) => {
    let spaces = [];
    for (let i = 0; i < (4 * deep); i++) {
        spaces.push(<span key={i}>&nbsp;</span>);
    }

    let style = {
        padding: '10px 0px',
        borderBottom: '1px solid rgb(238, 241, 243)'
    };

    if(deep === 0) {
        style.backgroundColor = '#e1e5e8';
    }

    let isRequired = null;
    if(typeof data.isRequired === 'boolean') {
        isRequired = data.isRequired ? <b>Required</b> : 'Optional';
    }

    switch(data.type) {
        case TYPES.OBJECT:
            return (
                <div key={data.name}>
                    <div style={style}>
                        {spaces}{data.name} <span style={{ color: 'green' }}>{data.type}</span> {isRequired}
                        {data.description ? <small className="text-muted"> - {data.description}</small>: null}
                    </div>
                    {data.data.map(item => {
                        return handleObject(deep + 1, item)
                    })}
                </div>
            )
        case TYPES.ARRAY:
            return (
                <div key={data.name}>
                    <div style={style}>
                        {spaces}{data.name} <span style={{ color: 'green' }}>{data.type}</span> {isRequired}
                        {data.description ? <small className="text-muted"> - {data.description}</small>: null}
                    </div>
                    {data.data.map(item => {
                        return handleObject(deep + 1, item)
                    })}
                </div>
            )
        default: 
            return <Row key={data.name} deep={deep} data={data}/>
    }
    
}

const Template = props => {

    const { data } = props;
    
    const [response, setResponse] = useState(data.responses[0]);
    const [bodyExample, setBodyExample] = useState((data.body && data.body.examples) ? data.body.examples[0]: null);
    const [queryExample, setQueryExample] = useState((data.query && data.query.examples) ? data.query.examples[0]: null);

    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{data.method} {data.path.url}</h1>
            </div>
            <p>
                {data.description}
            </p>
            {
                data.hasAuthorization
                ?
                <div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Authorization</h1>
                    </div>
                    <h5>Headers</h5>
                    <div>access-token: {'{JWT token}'}</div>
                </div>
                :null
            }
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Request Parameters</h1>
            </div>
            <div>
                {
                    data.query && data.query.parameters && data.query.parameters.length
                        ? (
                            <>
                                <div className="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#queryParameters" aria-expanded="false" aria-controls="queryParameters">
                                    Query parameters
                                </div>
                                <div className="collapse" id="queryParameters">
                                    <div className="card card-body">
                                        {
                                            data.query.parameters.map(p => {
                                                return handleObject(0, p);
                                            })
                                        }
                                        <ul className="nav nav-tabs">
                                        {
                                            // data.query.examples.map(example => {
                                            //     return handleObject(0, example);
                                            // })
                                            data.query.examples.map(example => {
                                                const isSelected = queryExample.title === example.title;
                                                return (
                                                    <li className="nav-item" key={example.title}>
                                                        <a className={"nav-link " + (isSelected ? ' active' : '') } onClick={e => setQueryExample(example)}>{example.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                        <div className="card card-body">
                                            {  
                                                handleObjectSimple(queryExample.data)
                                                // data.query.examples.map(example => {
                                                //     const isSelected = queryExample.title === example.title;
                                                //     return (
                                                //         <li className="nav-item" key={example.title}>
                                                //             <a className={"nav-link " + (isSelected ? ' active' : '') } onClick={e => setQueryExample(example)}>{example.title}</a>
                                                //         </li>
                                                //     )
                                                // })
                                                // queryExample.map(example => {
                                                //     return handleObjectSimple(example.data);
                                                // })
                                            }
                                            {/* <pre>{JSON.stringify(queryExample.data, undefined, 2)}</pre> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        : null
                }
            </div>
            <br />
            <div>
                {
                    data.path && data.path.parameters && data.path.parameters.length
                        ? (
                            <>
                                <div className="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#pathParameters" aria-expanded="false" aria-controls="pathParameters">
                                    Path parameters
                                </div>
                                <div className="collapse" id="pathParameters">
                                    <div className="card card-body">
                                        {
                                            data.path.parameters.map(p => {
                                                return <div key={p.name}>
                                                    {p.name} <span style={{ color: 'green' }}>{p.type}</span> {p.isRequired ? <b>Required</b> : 'Optional'}
                                                    <small className="form-text text-muted">{p.description}</small>
                                                </div>
                                            })
                                        }
                                        <br />
                                        <h6>Ejemplo</h6>
                                        <div>
                                            {data.path.example}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        : null
                }
            </div>
            <br />
            <div>
                {
                    data.body && data.body.parameters && data.body.parameters.length
                        ? (
                            <>
                                <div className="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#bodyParameters" aria-expanded="false" aria-controls="bodyParameters">
                                    Body parameters
                                </div>
                                <div className="collapse" id="bodyParameters">
                                    <div className="card card-body">
                                        {
                                            data.body.parameters.map((item) => {
                                                return handleObject(0, item);
                                            })
                                        }
                                        <br />


                                        <ul className="nav nav-tabs">
                                        {
                                            data.body.examples.map((example) => {
                                                const isSelected = bodyExample.title === example.title;
                                                return (
                                                    <li className="nav-item" key={example.title}>
                                                        <a className={"nav-link " + (isSelected ? ' active' : '') } onClick={e => setBodyExample(example)}>{example.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                        <div className="card card-body">
                                            <pre>{JSON.stringify(bodyExample.data, undefined, 2)}</pre>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        : null
                }
            </div>
            <br />

            <ul className="nav nav-tabs">
                {
                    data.responses.map((r) => {
                        const isSelected = response.status === r.status;
                        return (
                            <li className="nav-item" key={r.status}>
                                <a className={"nav-link " + (isSelected ? ' active': '')} onClick={e => setResponse(r)}>{r.status}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="card card-body">
                {
                    response.data.map(item => {
                        return handleObject(0, item);
                    })
                }
                <br />
                <h6>Ejemplo</h6>
                <pre>{JSON.stringify(response.example, undefined, 2)}</pre>
            </div>
        </div>
    );
}

export default Template;
