import React from 'react';
import ReactDom from 'react-dom';
import Home from './Component/Home';

ReactDom.hydrate(<Home />, document.querySelector('#root'));