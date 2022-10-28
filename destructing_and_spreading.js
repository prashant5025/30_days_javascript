// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]

// const [frontEnd, backEnd] = fullStack;

// const names = [undefined, 'Brook', 'David'];

// let [
//     firstPerson = 'Prashant',
//     secondPerson,
//     thirdPerson,
//     fourthPerson = 'Devid'
// ] = names


// const nums = [1,2,3,4,5,6,7,8,9,10];
// let [num1,num2,num3,...rest] = nums 

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// // for(const [country,city] of countries){
// //     console.log(country,city)
// // }

// // for(const [first,second, third] of fullStack){
// //     console.log(first,second,third)
// // }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }

// let {width, height, area, perimeter} = rectangle;


// const person = {
//     firstName: 'Prashant',
//     lastName: 'Singh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
// }

// // const getPersonInfo = obj => {
// //     const skills = obj.skills;
// //     const formattedSkills = skills.slice(0, -1).join(', ')
// //     const languages = obj.languages;
// //     const formattedLanguage = languages.slice(0, -1).join(', ')

// //     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguage} and a little bit of ${languages[2]}.`

// //     return personInfo
// // }

// // console.log(getPersonInfo(person))

// const getPersonInfo = ({
//     firstName,
//     lastName,
//     age,
//     country,
//     job,
//     skills,
//     languages
// }) => {
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const formattedLanguage = languages.slice(0, -1).join(', ')


//     personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguage} and a little bit of ${languages[2]}.`

//     return personInfo;
// }
// console.warn(getPersonInfo(person))

// const countriesI = [
//     'Germany',
//     'France',
//     'Belgium',
//     'Finland',
//     'Sweden',
//     'Norway',
//     'Denmark',
//     'Iceland'
//   ]

// let [gem, fra, ...nordicCountries] = countries;

// console.log(gem, fra, nordicCountries)

// const user = {
//     name:'Asabeneh',
//     title:'Programmer',
//     country:'Finland',
//     city:'Helsinki'
//   }

// const copiedUser = {...user, title:'Instructor', city:'Helsinki'}
// console.log(copiedUser)

// const sumallNumber = (...args) => {
//     let sum = 0
//     for(const num of args){
//         sum += num
//     }
//     return sum
// }

// console.log(sumallNumber(1,2,3,4,5,6,7,8,9,10))

// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ]

// let [e, pi, gravity,humanBodyTemp, waterBoilingTemp] = constants;
// let [fin, est,sw, den ,nor] = countries;

// let {width, height, area, perimeter} = rectangle;

//Level 2


// for(const {name, scores, skills, age} of users){
//     console.log(name, scores, skills, age);
// }

// for(const {name, scores,skills, age} of users){
//     if(skills.length <= 2){
//         console.log(name, scores, skills, age);
//     }
// }

//Level 3

// const countries_data = require('./countries_data')

// for(const {name,capital,languages,population} of countries_data){

//     console.log(name,capital,languages,population)
// }


// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// const [name, skills, scores] = student;

// const [htmScore, cssScore, jsScore, reactScore] = scores;

// console.log(name, skills, jsScore, reactScore);

// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]

// const convertArrayToObject = (arr) => {
//     const obj = arr.map(([name, skills, scores]) => {
//         return {name, skills, scores}
//     })
//     return obj
// }

// console.log(convertArrayToObject(students))

const studentInfo = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

const {name, age, skills: {frontEnd, backEnd, dataBase, dataScience}} = studentInfo;

studentInfo.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
studentInfo.skills.backEnd.push({skill: 'Express', level: 9})
studentInfo.skills.dataBase.push({skill: 'SQL', level: 8})
studentInfo.skills.dataScience.push('SQL')

// print studentInfo object

console.log(name,age,studentInfo.skills)


