import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Vehicle from './Vehicle';

const MOUNT_ELEMENT = document.getElementById('root');

ReactDOM.render([
        <App animal='cow' sound='moo!' />,
        <App animal='sheep' sound='bah!' />,
        <App animal='pig' sound='oink!' />,
        <Vehicle vehicle='train' sound="choo! choo!" />
    ],
    MOUNT_ELEMENT)