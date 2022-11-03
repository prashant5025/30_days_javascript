// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

function outerfunction(){
    let count = 0;
    function plusOne(){
        count++;
        return count;
    }
    function minusOne(){
        count--;
        return count;
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}

const innerFunc = outerfunction()
console.log(innerFunc.plusOne)
console.log(innerFunc.minusOne)

function closer(){
    let num = 5;
    function factorial(){
        let result = 1;
        for(let i = 1; i <= num; i++){
            result *= i;
        }
        return result
    }
    function sum(){
        let result = 0;
        for(let i=0; i<=num; i++){
            result += i;
        }
        return result
    }
    function evenOrOdd(){
        if(num%2 === 0){
            return 'even'
        }else{
            return 'odd'
        }
    }
    return {
        factorial: factorial(),
        sum: sum(),
        evenOrOdd: evenOrOdd()
    }
}

const inFunc = closer()
console.log(inFunc.factorial)
console.log(inFunc.sum)
console.log(inFunc.evenOrOdd)
