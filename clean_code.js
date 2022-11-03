const foo = 1
let bar = foo;

bar = 9;
console.log(foo,bar);

{
    let a = 1;
    const b = 1;
    var c = 1;
}

function getKey(k){
    return `a key named ${k}`;
}

const obj = {
    id: 5,
    name: 'India',
    [getKey('enabled')]: true,
};

console.log(obj);
// console.log(Object.prototype.hasOwnProperty.call(object,key));
const itemsCopy = [...items]