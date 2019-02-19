import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Vehicle from './components/Vehicle';

const MOUNT_ELEMENT = document.getElementById('root');

ReactDOM.render(
        <App animal='cow' sound='moo!' />,
    MOUNT_ELEMENT)