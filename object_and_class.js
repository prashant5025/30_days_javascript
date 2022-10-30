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
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getAnimalInfo(){
        let info = `The ${this.name} has ${this.legs} legs and its color is ${this.color}`;
        return info;

    }

    static favoriteAnimal(){
        const animals = ['Lion','Tiger','Elephant','Giraffe','Monkey'];
        const index = Math.floor(Math.random() * animals.length);
        return animals[index];
    
    }


}

const animal1 = new Animal('Lion', 5, 'Yellow', 4);
const animal2 = new Animal('Tiger', 5, 'Yellow', 4);
const animal3 = new Animal('Elephant', 5, 'Yellow', 4);
const animal4 = new Animal('Giraffe', 5, 'Yellow', 4);
const animal5 = new Animal('Monkey', 5, 'Yellow', 4);

console.log(animal1.getAnimalInfo());

class Dog extends Animal {
    constructor(name, age, color, legs, owner){
        super(name, age, color, legs);
        this.owner = owner
    }

    getDogInfo(){
        let info = `The ${this.name} has ${this.legs} legs and its color is ${this.color} and its owner is ${this.owner}`;
        return info;
    }


}

const dog1 = new Dog('Barito', 5, 'Brown', 4, 'Prashant');
const dog2 = new Dog('Tiger', 5, 'Yellow', 4, 'Prashant');

console.log(dog1.getDogInfo());