const express = require('express');
import renderer from './helpers/renderer';
const app = express();

app.use(express.static('public'));
app.get('/', (req,res) => {
    res.send(renderer());
});
app.listen(3000, () => {
    console.log('App Listening on Port 3000');
});