const { readFile, writeFile } = require("fs").promises;
const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// console.log('start first task');

// readFile('./router/first.txt','utf-8',(err, res) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(res);
//     console.log('completed first task');
// })
// console.log('starting next task');

// console.log('first');

// setTimeout(() => {
//     console.log('second');

// },0);

// setInterval(() => {
//     console.log('second');
// }, 0);
// console.log('third');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };


// getText("../router/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));




const start = async () => {
  try {
    const first = await readFile("./router/first.txt","utf-8");
    const second = await readFile("./router/second.txt","utf-8");

      await writeFile("./router/result-02.txt",`This is Awesome: ${first} ${second}`,{flag:'a'});

  } catch (err) {
    console.log(err);
  }
};

start();
