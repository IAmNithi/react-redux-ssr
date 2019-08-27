const express = require('express');
import renderer from './helpers/renderer';
const app = express();
import createStore from './helpers/createStore';
app.use(express.static('public'));
app.get('*', (req,res) => {
    const store = createStore();
    res.send(renderer(req, store));
});
app.listen(3000, () => {
    console.log('App Listening on Port 3000');
});