import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Component/Home';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/hi" component={() => "Hi There"} />
        </div>
    );
};