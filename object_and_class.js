// class Person{
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }

//   get getScore() {
//     return this.score;
//   }

//   get getSkills() {
//     return this.skills;
//   }

//   set setScore(score) {
//     this.score += score;
//   }

//   set setSkills(skill) {
//     this.skills.push(skill);
//   }

//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         `and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info
//   }

//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     return skills[index];
//   }
//   static showDateTime() {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let date = now.getDate();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     let dateMonthYear = date + "." + month + "." + year;
//     let time = hours + ":" + minutes;
//     let fullTime = dateMonthYear + " " + time;
//     return fullTime;
//   }
// }

// const person1 = new Person(
//     'Prashant','singh', 25, 'Nepal', 'Kathmandu');

// person1.setScore = 100;
// person1.setSkills = 'HTML';
// person1.setSkills = 'CSS';
// person1.setSkills = 'JS';

// class Students extends Person{
//     constructor(firstName, lastName, age, country, city,gender){
//         super(firstName, lastName, age, country, city);
//         this.gender = gender;
//     }

//     saySomthing(){
//         console.log('I am a child of the person class');
//     }

// }

// const s1 = new Students('Mohit','Kumar', 25, 'Nepal', 'Kathmandu','male');

// const s2 = new Students('Rahul','Kumar', 25, 'Nepal', 'Kathmand','male');

// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1.getPersonInfo());
// console.log(s2.getPersonInfo());

//Level 1 exercises

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getAnimalInfo() {
    let info = `The ${this.name} has ${this.legs} legs and its color is ${this.color}`;
    return info;
  }

  static favoriteAnimal() {
    const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Monkey"];
    const index = Math.floor(Math.random() * animals.length);
    return animals[index];
  }
}

const animal1 = new Animal("Lion", 5, "Yellow", 4);
const animal2 = new Animal("Tiger", 5, "Yellow", 4);
const animal3 = new Animal("Elephant", 5, "Yellow", 4);
const animal4 = new Animal("Giraffe", 5, "Yellow", 4);
const animal5 = new Animal("Monkey", 5, "Yellow", 4);

// console.log(animal1.getAnimalInfo());

class Dog extends Animal {
  constructor(name, age, color, legs, owner, certified) {
    super(name, age, color, legs);
    this.owner = owner;
    this.certified = certified;
  }

  getDogInfo() {
    let info = `The ${this.name} has ${this.legs} legs and its color is ${this.color} and its owner is ${this.owner} and its certified is ${this.certified}`;
    return info;
  }
}

const dog1 = new Dog("Barito", 5, "Brown", 4, "Prashant", true);
const dog2 = new Dog("Tiger", 5, "Yellow", 4, "Prashant", false);

// console.log(dog1.getDogInfo());

class Statisitcs {
  constructor(arr) {
    this.arr = arr;
  }

  getCount() {
    return this.arr.length;
  }

  getSum() {
    return this.arr.reduce((a, b) => a + b);
  }
  getMin() {
    return Math.min(...this.arr);
  }

  getMax() {
    return Math.max(...this.arr);
  }

  getRange() {
    return Math.max(...this.arr) - Math.min(...this.arr);
  }

  getMean() {
    return Math.round(this.getSum() / this.getCount());
  }

  getMedian() {
    let sorted = this.arr.sort((a, b) => a - b);
    let middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2) {
      return Math.round(sorted[middle]);
    } else {
      return Math.round((sorted[middle - 1] + sorted[middle]) / 2);
    }
  }

  getMode() {
    let obj = {};
    let max = 0;
    let mode = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (!obj[this.arr[i]]) {
        obj[this.arr[i]] = 1;
      } else {
        obj[this.arr[i]]++;
      }
    }

    for (let key in obj) {
      if (obj[key] > max) {
        max = obj[key];
        mode = key;
      }
    }
    return { mode: mode, count: max };
  }

  getVariance() {
    let mean = this.getMean();
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += (this.arr[i] - mean) ** 2;
    }
    return Math.round(sum / this.getCount(), 2);
  }

  getStandardDeviation() {
    return Math.sqrt(this.getVariance());
  }

  getFrequencyDistribution() {
    let obj = {};
    for (let i = 0; i < this.arr.length; i++) {
      if (!obj[this.arr[i]]) {
        obj[this.arr[i]] = 1;
      } else {
        obj[this.arr[i]]++;
      }
    }
    return obj;
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

// const statistics = new Statisitcs(ages);
// console.log(`Count: ${statistics.getCount()}`);
// console.log(`Sum: ${statistics.getSum()}`);
// console.log(`Min: ${statistics.getMin()}`);
// console.log(`Max: ${statistics.getMax()}`);
// console.log(`Range: ${statistics.getRange()}`);
// console.log(`Mean: ${statistics.getMean()}`)
// console.log(`Meadian: ${statistics.getMedian()}`)
// console.log(`Mode: ${statistics.getMode()}`)
// console.log(`Variance: ${statistics.getVariance()}`)
// console.log(`StandardDeviation: ${statistics.getStandardDeviation()}`)
// console.log(`FrequencyDistribution: ${statistics.getFrequencyDistribution()}`)

class PersonAccount {
  constructor(firstName, lastName, email, accountNumber) {
    if(!firstName || !lastName || !email || !accountNumber) {
        throw new Error('All fields are required')
    }
    if(typeof firstName !== 'string' || typeof lastName !== 'string') {
        throw new Error('All fields must be string')
    }
    this.firstName = firstName;
    this.lastName = lastName;
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      this.email = email;
    } else {
      throw new Error("Invalid Email");
    }
    this.accountNumber = accountNumber;
    this.info = {
      age: 0,
      address: "",
      city: "",
      state: "",
    };
    this.income = 0;
    this.expenses = 0;
  }

  fullName() {
    let name = `${this.firstName} ${this.lastName}`;
    return name;
  }

  getIncome() {
    return this.income;
  }

  getExpenses() {
    return this.expenses;
  }

  addIncome(incomeArr) {
    this.income += incomeArr.reduce((a, b) => a + b);
  }

  addExpenses(expensesArr) {
    this.expenses += expensesArr.reduce((a, b) => a + b);
  }

  totalIncome() {
    return this.income - this.expenses;
  }

  totalExpenses() {
    return this.expenses - this.income;
  }

  accountInfo() {
    let info = `${this.fullName()} has a balance of $${this.totalIncome()} in his account. Account Number: ${
      this.accountNumber
    }`;
    return info;
  }

  addInfo(age, address, city, state) {
    this.info.age = age;
    this.info.address = address;
    this.info.city = city;
    this.info.state = state;
  }

  showInfo() {
    let info = `Name: ${this.fullName()} Email: ${this.email} Age: ${
      this.info.age
    } Address: ${this.info.address} City: ${this.info.city} State: ${
      this.info.state
    }`;
    return info;
  }

  accountBalance() {
    let balance = `The account balance of ${this.fullName()} is $${
      this.totalIncome() - this.totalExpenses()
    }`;
    return balance;

  }

  static generateAccountNumber(){
    return Math.round(Math.random() * 10000000000000000)
  }
    getAccountNumber(){
    return this.accountNumber
  }
}

const person1 = new PersonAccount(
  "Prashant",
  "Shrestha",
  "psingh5025615@gmail.com",
  123456789
);

person1.addIncome([100, 200, 300]);
person1.addExpenses([50, 100, 150]);
console.log(person1.accountInfo());
person1.addInfo(25, "Kathmandu", "Kathmandu", "Bagmati");
console.log(person1.showInfo());
console.log(person1.accountBalance());
console.log(person1.getAccountNumber())
