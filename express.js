const express = require("express");
const path = require('path')
const app = express();


// setup static and middleware
app.use(express.static("./public"))
// app.get
// app.get("/",(req,res) => {
//     res.sendFile(path.resolve(__dirname, './html/index.html'))
    
// })

// app.post
app.get("/about",(req,res) => {
    res.send("About Page");
})

app.get("*",(req,res) => {
    res.send("404 Page");
})
// app.put
// app.delete
// app.all
app.all('*',(req,res) => {
    res.status(404).send("<h1>Resource not found</h1>")
});
// app.use
// app.listen

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
