const {readFileSync, writeFileSync} = require('fs');

console.log('start')
const first = readFileSync('./router/first.txt', 'utf8');
const second = readFileSync('./router/second.txt', 'utf8');

writeFileSync(
    './router/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task')

console.log('starting the next one')