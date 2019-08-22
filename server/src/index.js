const express = require('express');
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './Client/Component/Home';
const app = express();

app.use(express.static('public'));
app.get('/', (req,res) => {
    const content = renderToString(<Home />);
    const html = `
        <html>
            <head>
                <title>SSR APP</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
});
app.listen(3000, () => {
    console.log('App Listening on Port 3000');
});