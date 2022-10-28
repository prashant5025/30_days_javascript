function name(fullName) {
    return fullName;
}

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function addNumber(a, b) {
    return a + b;
}

function areaOfRectangle(length, width) {
    return length * width;
}

function perimeterOfRectangle(length, width) {
    return 2(length + width);
}

function volumeOfRectangle(length, width, height) {
    return length * width * height;
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function density(mass, volume) {
    return mass / volume;
}

function speed(distance, time) {
    return distance / time;
}

function weight(mass, gravity) {
    return mass * gravity;
}

function convertTemp(temp) {
    return ((temp - 32) * 5) / 9;
}

function bmi(weight, height) {
    return weight / (height * height);
}

let BMI = bmi(70, 1.7);

if (BMI < 18.5) {
    console.log("UnderWeight");
} else if (BMI > 18.5 && BMI < 24.9) {
    console.log("Normal");
} else if (BMI > 25 && BMI < 29.9) {
    console.log("OverWeight");
} else if (BMI > 30) {
    console.log("Obese");
} else {
    console.log("Invalid");
}

function checkSeason(month) {
    switch (month) {
        case "December":
        case "January":
        case "February":
            return "Winter";
            break;
        case "March":
        case "April":
        case "May":
            return "Spring";
            break;
        case "June":
        case "July":
        case "August":
            return "Summer";
            break;
        case "September":
        case "October":
        case "November":
            return "Autumn";
            break;
    }
}

console.log(checkSeason("December"));

function findMax(a, b, c) {
    return Math.max(a, b, c);
}

function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMax(12, 23, 34), findMin(12, 23, 34));

// Level 2

function linearQuation(a, b, c, x, y) {
    return a * x + b * y + c;
}

a = 2;
b = 3;
c = 4;
x = 5;
y = 6;

// solveQuadratic

function userIdgenrate(num) {
    let char = "ACBDEFGHIJKLMNOPQURSUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < num; i++) {
        id += char[Math.floor(Math.random() * char.length)];
    }
    return id;
}

console.log(userIdgenrate(10));

function randomHexaNumberGenerator() {
    let hexaNumber = "0123456789ABCDEF";
    let hexa = "#";
    for (let i = 0; i < 6; i++) {
        hexa += hexaNumber[Math.floor(Math.random() * hexaNumber.length)];
    }
    return hexa;
}

console.log(randomHexaNumberGenerator());

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

const solveQuadratic = (a, b, c) => {
    let x1, x2;
    let d = b * b - 4 * a * c;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    } else if (d == 0) {
        x1 = -b / (2 * a);
        return [x1];
    } else {
        return [];
    }
};

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

const time = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${day}/${month}/${year} ${hour}:${min}`;
};

console.log(time());

const swap = (a, b) => {
    temp = a;
    a = b;
    b = temp;
    return [a, b];
};

console.log(swap(2, 3));

const reverse = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(reverse([1, 2, 3, 4, 5]));

const capitalize = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr;
};

console.log(capitalize(["sachin", "saurav", "rahul"]));

const addItems = (arr, item) => {
    arr.push(item);
    return arr;
};

console.log(addItems([1, 2, 3, 4, 5], 6));

const removeItems = (arr, item) => {
    arr.splice(arr.indexOf(item), 1);
    return arr;
};

console.log(removeItems([1, 2, 3, 4, 5], 3));

const sumOfNumbers = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumOfNumbers(10));

const sumOfOdds = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumOfOdds(10));

const sumOfEvens = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumOfEvens(10));

const evenAndOdds = (num) => {
    let even = 0;
    let odd = 0;
    i = 0;
    while (i <= num) {
        if (i % 2 == 0) {
            even += 1;
        } else {
            odd += 1;
        }
        i++;
    }
    return [even, odd];
};

console.log(evenAndOdds(100));

// Write a function which takes any number of arguments and return the sum of the arguments

const sumOfArguments = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};

console.log(sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const randomIp = () => {
    let ip = "";
    for (let i = 0; i < 4; i++) {
        ip += Math.floor(Math.random() * 255) + ".";
    }
    return ip;
};

console.log(randomIp());

const randomMac = () => {
    let mac = "";
    for (let i = 0; i < 6; i++) {
        mac += Math.floor(Math.random() * 255).toString(16) + ":";
    }
    return mac;
};

console.log(randomMac());

// Level 3

const rgb = () => {
    let rgb = "rgb(";
    for (let i = 0; i < 3; i++) {
        rgb += Math.floor(Math.random() * 255) + ",";
    }
    rgb += ")";
    return rgb;
};

console.log(rgb());

const arrayOfHexa = (num) => {
    let hexaNumber = "0123456789abcdef";
    let result = [];
    for (let i = 0; i < num; i++) {
        let hexa = "#";
        j = 0;
        while (j < 6) {
            hexa += hexaNumber[Math.floor(Math.random() * 16)];
            j++;
        }
        result.push(hexa);
    }

    return result;
};
console.log(arrayOfHexa(10));

const arrayOfRgb = (num) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        let rgb = "rgb(";
        for (let j = 0; j < 3; j++) {
            rgb += Math.floor(Math.random() * 255) + ",";
        }
        rgb += ")";
        result.push(rgb);
    }
    return result;
};

console.log(arrayOfRgb(10));

const arrayOfHexaAndRgb = (num) => {
    let hexaNumber = "0123456789abcdef";
    let result = [];
    for (let i = 0; i < num; i++) {
        let hexa = "#";
        j = 0;
        while (j < 6) {
            hexa += hexaNumber[Math.floor(Math.random() * 16)];
            j++;
        }
        let rgb = "rgb(";
        for (let j = 0; j < 3; j++) {
            rgb += Math.floor(Math.random() * 255) + ",";
        }
        rgb += ")";
        result.push([hexa, rgb]);
    }
    return result;
};

console.log(arrayOfHexaAndRgb(10));

//console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']

const generateColors = (type, num) => {
    let hexaNumber = "0123456789abcdef";
    let result = [];
    for (let i = 0; i < num; i++) {
        if (type == "hexa") {
            let hexa = "#";
            j = 0;
            while (j < 6) {
                hexa += hexaNumber[Math.floor(Math.random() * 16)];
                j++;
            }
            result.push(hexa);
        } else if (type == "rgb") {
            let rgb = "rgb(";
            for (let j = 0; j < 3; j++) {
                rgb += Math.floor(Math.random() * 255) + ",";
            }
            rgb += ")";
            result.push(rgb);
        } else {
            return "Invalid type";
        }
    }
    return result;
};

console.log(generateColors("rgb", 10));

const suffleArray = (arr) => {
    let result = [];
    let i = 0;
    while(i < arr.length){
        let random  = Math.floor(Math.random() * arr.length);
        if(!result.includes(arr[random])){
            result.push(arr[random]);
            i++;
        }

    }
    return result;
}


console.log(suffleArray([1,2,3,4,5,6,7,8,9,10]));

const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));


const isEmpty = (obj) => {
    if(Object.keys(obj).length == 0){
        return true;
    }else{
        return false;
    }
}


console.log(isEmpty({}));


const modifyArray = (arr) => {
    let result = [];
    if(arr.length > 5){

    
    for(let i=0; i<arr.length; i++){
        if(arr[4]){
            arr[4] = arr[4].toUpperCase();
        }
    }
}else{
    return "Not found";
}
    return arr;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));