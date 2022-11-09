// const { writeFileSync } = require("fs");

// for (let i = 0; i < 100000; i++) {
//   writeFileSync("./router/big.txt", `Hello world ${i}\n`, { flag: "a" });
// }

// const { createReadStream } = require("fs");

// const stream = createReadStream("./router/big.txt", {
//   highWaterMark: 90000,
//   encoding: "utf8",
// });

// stream.on("data", (result) => {
//   console.log(result);
// });
// stream.on("error", (err) => console.log(err));

const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    const fileStream = fs.createReadStream('./router/big.txt', 'utf8');
    fileStream.on('open',() => {
        fileStream.pipe(res);
    })
    fileStream.on('error',(err) => {
        res.end(err)
    })
}).listen(5000);