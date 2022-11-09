const express = require("express");
const app = express();



//req =>middleware => response

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    if(method === 'GET'){
        next();
    }else{
        res.status(405).send('Method not allowed');
    }

    if(url === '/'){
        next();
    }else{
        res.status(404).send('Page not found');
    }

    
}

app.get('/',logger,(req,res) => {
    res.send('Home')

})

app.get('/about',logger,(req,res) => {
    res.send('About')
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
});