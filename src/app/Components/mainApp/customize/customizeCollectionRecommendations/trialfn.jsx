import React, { Component } from 'react';
import DisplaySelectedGraph from './displaySelectedGraph';

const TrialFn = (props) => {
    return (
        <div>
            {<DisplaySelectedGraph value2={props.value1} />}
        </div>
    );
}
 
export default TrialFn;