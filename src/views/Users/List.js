import React, { useState } from 'react';

const data = {
    pathParameters: [
        {
            name: 'userId',
            type: 'string',
            isRequired: true,
            description: 'ID de usuario'
        },
    ],
    queryParameters: [],
    bodyParameters: [
        {
            name: 'name',
            type: 'string',
            isRequired: false,
            example: "Jon"
        },
    ],
    responseSuccess: [
        {
            name: 'userId',
            type: 'string',
            description: 'ID de usuario',
            example: "123"
        },
    ],
}

const List = () => {

    const [isShowingSuccess, setIsShowingSuccess] = useState(true);

    const onClickChangeResponse = (value) => {
        return () => {
            setIsShowingSuccess(value)
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{'GET /user/{_userId}/meetings'}</h1>
            </div>
            <p>
                Lista todos los usuarios
            </p>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Authorization</h1>
            </div>
            <h5>Headers</h5>
            <div>access-token: {'{JWT token}'}</div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Request Parameters</h1>
            </div>
            <div>
                {
                    data.pathParameters.length
                        ? (
                            <>
                                <div className="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#pathParameters" aria-expanded="false" aria-controls="pathParameters">
                                    Path parameters
                                </div>
                                <div className="collapse" id="pathParameters">
                                    <div className="card card-body">
                                        {
                                            data.pathParameters.map(p => {
                                                return <div key={p.name}>
                                                    {p.name} <span style={{ color: 'green' }}>{p.type}</span> {p.isRequired ? <b>Required</b> : 'Optional'}
                                                    <small className="form-text text-muted">{p.description}</small>
                                                </div>
                                            })
                                        }
                                        <br />
                                        <h6>Ejemplo</h6>
                                        <div>
                                            /user/123456/meetings
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
                    data.bodyParameters.length
                        ? (
                            <>
                                <div className="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#bodyParameters" aria-expanded="false" aria-controls="bodyParameters">
                                    Body parameters
                                </div>
                                <div className="collapse" id="bodyParameters">
                                    <div className="card card-body">
                                        {
                                            data.bodyParameters.map(p => {
                                                return <div key={p.name}>
                                                    {p.name} <span style={{ color: 'green' }}>{p.type}</span> {p.isRequired ? <b>Required</b> : 'Optional'}
                                                    <small className="form-text text-muted">{p.description}</small>
                                                </div>
                                            })
                                        }
                                        <br />
                                        <h6>Ejemplo</h6>
                                        <div>
                                            {'{'}
                                            {    
                                                data.bodyParameters.map(item => {
                                                    return (
                                                        <div>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;"{item.name}": {item.type === 'string' ? '"' + item.example + '"' : item.example }<br />
                                                        </div>
                                                    )
                                                })
                                            }
                                            {'}'}<br />
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
                <li className="nav-item">
                    <a className="nav-link active" onClick={e => setIsShowingSuccess(true)}>Success</a>
                </li>
                <li className="nav-item" onClick={e => setIsShowingSuccess(false)}>
                    <a className="nav-link">Error</a>
                </li>
            </ul>
            {
                isShowingSuccess
                ?
                <div>
                    {
                        data.responseSuccess.length
                            ? (
                                <div>
                                    <div className="card card-body">
                                        {
                                            data.responseSuccess.map(item => {
                                                return <div key={item.name}>
                                                    {item.name} <span style={{ color: 'green' }}>{item.type}</span>
                                                    <small className="form-text text-muted">{item.description}</small>
                                                </div>
                                            })
                                        }
                                        <br />
                                        <h6>Ejemplo</h6>
                                        <div>
                                            {'{'}
                                            {    
                                                data.responseSuccess.map(item => {
                                                    return (
                                                        <div>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;"{item.name}": {item.type === 'string' ? '"' + item.example + '"' : item.example }<br />
                                                        </div>
                                                    )
                                                })
                                            }
                                            {'}'}<br />
                                        </div>
                                    </div>
                                </div>
                            )
                            : null
                    }
                </div>
                :
                <div>
                    ERROR
                </div>
            }
        </div>
    );
}

export default List;
