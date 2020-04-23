import React, { useState } from 'react';

const Row = props => {
    const { deep, data } = props;
    
    const [isShowingValidations, setIsShowingValidations] = useState(false);

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

    return (
        <div key={data.name}>
            <div style={style}>
                {spaces}{data.name} <span style={{ color: 'green' }}>{data.type}</span> {isRequired}
                {data.description ? <small className="text-muted"> - {data.description}</small>: null}
                {
                    data.validations && Array.isArray(data.validations) || data.enum && Array.isArray(data.enum)
                    ?<span style={{ float: 'right' }} onClick={e => setIsShowingValidations(!isShowingValidations)} >Enum|val</span>
                    :null
                }
            </div>
            {
                (data.validations && Array.isArray(data.validations))
                ?
                <div style={{ 
                    display: isShowingValidations ? 'block' : 'none',
                    backgroundColor: '#acbac5'
                }}>
                    <h6>Validaciones</h6>
                    {
                        data.validations.map(v => <div> - {v}</div>)
                    }
                </div>
                :null
            }
            {
                (data.enum && Array.isArray(data.enum))
                ?
                <div style={{ 
                    display: isShowingValidations ? 'block' : 'none',
                    backgroundColor: '#acbac5'
                }}>
                    <h6>Valores permitidos</h6>
                    <div>{data.enum.join(',')}</div>
                </div>
                :null
            }
        </div>
    );
};

export default Row;