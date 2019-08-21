const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString();
const Home = require('./Client/Component/Home').default;
const app = express();

app.get('/', (req,res) => {
    const content = renderToString(<Home />);
    res.write(content);
});
app.listen(3000, () => {
    console.log('App Listening on Port 3000');
});