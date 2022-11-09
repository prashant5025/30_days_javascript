const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./middleware/logger');
const auth = require('./auth');
const data = require('./data');

//app.use([logger, auth])
app.use(morgan('tiny'));

app.get('/',(req, res) => {
    res.send('Home')
})
app.get('/about',(req, res) => {
    res.send('About')
})

app.get('/api/products',(req, res) => {
    res.send("Products")
})
app.get('/api/items',[logger,auth],(req, res) => {
    res.send('Items')
})
app.get('*',(req, res) => {
    res.send('404 Page')
})


app.listen(3000,() => {
    console.log('Server is running on port 3000')
})