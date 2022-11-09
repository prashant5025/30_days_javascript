const { json } = require("body-parser");
const { readFileSync } = require("fs");
const http = require("http");

const home = readFileSync('./html/index.html')
const homeStyle = readFileSync('./html/style.css')
// const homeLogo = readFileSync('./html/logo.png')

const server = http.createServer((req, res) => {
  try {
    const url = req.url;
    //Home Page
    if(url === '/'){

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(home);
    res.end();
    //About Page
    }else if(url === '/about'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>About Page</h1>");
        res.end();
    //404 Page
    }else if(url === '/style.css'){
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(homeStyle);
        res.end();

    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 Page</h1>");
        res.end();
    }
  } catch (err) {
    console.log(err);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
