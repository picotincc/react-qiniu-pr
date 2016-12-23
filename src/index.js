import React from 'react';
import {render} from 'react-dom';

import App from './app/app.js';



function run()
{
    render(
        <App />,
        document.getElementById('root')
    );
}

run();
