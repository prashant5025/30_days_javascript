const _ = require('lodash');
const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
const newItems2 = _.without(newItems, 2);

console.log(newItems);

setTimeout(() => {
    
    console.log(newItems2);
}, 0);
console.log("hellow world");