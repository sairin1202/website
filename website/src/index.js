import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import './index.css';
import { Graph } from "react-d3-graph";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import InputField from "./component";
import GraphBox from './graph';


function submitTitle() {
    fetch('/submit').then(function(response) {
        // Use the response sent here
        // return window.alert(response.json());
    })
    .then(function(myJson) {
        console.log(myJson);
    })
}

ReactDOM.render(
<div>
    <div>
        <GraphBox/>
    </div>
    <div>
        <InputField/>
    </div>
    <div>
        <Button variant="contained" color="primary" onClick={submitTitle}>Generate</Button>
    </div>
</div>
,document.getElementById('root'));
serviceWorker.unregister();