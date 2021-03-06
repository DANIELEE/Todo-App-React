// src/components/FormData.js

import React from 'react';
import './Form.css'

const Form = ({value, onCreate, onChange, onKeyPress}) =>{
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                <div className="create-button" onClick={onCreate}>
                    추가
                </div>
        </div>
    );
};

export default Form;