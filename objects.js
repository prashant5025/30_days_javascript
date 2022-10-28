// // scope of a variable
// // global scope


// let a = 'JavaScript';
// let b = 10;
// function scope(){
//     console.log(a,b)
//     if(true){
//         let a = 'Python';
//         let b = 20;
//         console.log(a,b)
//     }
//     console.log(a,b)
// }
// scope()
// console.log(a,b)

// // function scope(){
// function varScope(){
//     var g = 9.8;
//     console.log(g)
// }
// console.log(g)

// if (true){
//     var g  = 9.8;
//     console.log(g)
// }
// console.log(g)

// for(var i=0; i<3; i++){
//     console.log(i)
// }

// console.log(i)

// // OBJECTS


// const dog = {
//     name: 'Fido',
//     age: 3,
//     breed: 'Labrador',
//     color: 'Black',
//     bark: () => {
//         console.log('Woof Woof');
//     },
//     eat: () => {
//         console.log('Eating');
//     },
//     getDogInfo: function () {
//         return `${this.name} is a ${this.age} year old ${this.color} ${this.breed}`;
//     }

// };

// console.log(dog.getDogInfo());


// const person = {
//     firstName: 'Prashant',
//     lastName: 'singh',
//     age: 22,
//     country: 'India',
//     city: 'Hapur',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${person.firstName} ${this.lastName}`;
//     }
//   }
  
//   console.log(person.getFullName())
//   // Asabeneh Yetayeh

// person.nationality = 'Ethiopian'
// person.country = 'Finland'
// person.title = 'teacher'
// person.skills.push('Meteor')
// person.skills.push('SasS')
// person.isMarried = false

// person.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills.slice(0, this.skills.length - 1).join(', ')
//     let lastSkill = this.skills.splice(this.skills.length -1)[0]

//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} lives in ${this.city}, ${this.country}. He is ${this.age}. He works as a ${this.title} and he teaches ${skills}. Is he married? ${this.isMarried}`

//     return statement
// }
// console.log(person)
// console.log(person.getPersonInfo())

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }

// const mostSkilledPerson = Object.entries(users).reduce((acc, curr) => {
//     if(acc[1].skills.length > curr[1].skills.length){
//         return acc
//     }else{
//         return curr
//     }
// });

// console.log(mostSkilledPerson)

// const mostPoints = () => {
//     for(let key in users){
//         if(users[key].points === 50){
//             console.log(key)
//         }
//     }
// }

// mostPoints()

// const usersWithMERN = () => {
//     for(let key in users){
//         if(users[key].skills.includes('MongoDB') && users[key].skills.includes('Express') && users[key].skills.includes('React') && users[key].skills.includes('Node')){
//             console.log(key)
//         }
//     }
// }

// usersWithMERN()

// const setUserName = (name) => {
//     users[name] = {
//         email: 'psingh5025615@gmail.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: '22',
//         isLoggedIn: true,
//         points: 100

//     }

//     return users
// }

// console.log(setUserName('Prashant'))

// const key = Object.keys(users);
// console.log(key)

// const value = Object.values(users);
// console.log(value)


// Level 3

const personAccount = {
    firstName: 'Prashant',
    lastName: 'Singh',
    incomes: [20000, 30000, 40000],
    expenses: [],
    totalIncome: function() {
        return this.incomes.reduce((acc, curr) => acc + curr,0);
    },
    totalExpense: function() {
        return this.expenses.reduce((acc, curr) => acc + curr,0);
    },
    accountInfo: function () {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}, Account Balance: ${this.totalIncome() - this.totalExpense()}`
    },
    addIncome: function (income) {
        this.incomes.push(income);
        return this.incomes;
    },
    addExpense: function (expenses){
        this.expenses.push(expenses);
        return this.expenses;
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    },
    accountSummary: function () {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Balance: ${this.accountBalance()}`
    }
}

const addIncome = personAccount.addIncome(50000)

const addExpense = personAccount.addExpense([10000, 20000, 30000])
console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome() - personAccount.totalExpense())

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
const id = () => {
    let id = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let idLength = 6;
    let newId = '';

    for(let i = 0; i< idLength; i++){
        newId += id.charAt(Math.floor(Math.random() * id.length));
    }
    return newId
}

const signUp = (username, email, password) => {
    const newUser = {
        _id: id(),
        username: username,
        email: email,
        password: password,
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    }

    if(users.some(user => user.username === username)){
        return 'Username Name already exists'
    }else if(users.email === email){
        return 'Email already exists'
    }else if(users.some(user => user._id === newUser._id)){
        return 'Request Failed'
    }
    else{
        users.push(newUser)
        return users
    }

}

const signIn = (email, password) => {
    if(users.some(user => user.email === email && user.password === password)){
        return 'Login Successful'
    }else{
        return 'Login Failed'
    }
}

const logOut = (email) => {
    if(users.some(user => user.email === email)){
        return 'Logout Successful'
    }else{
        return 'Logout Failed'
    }
}


console.log(signUp('Prashant', 'test@gmail.com', '123456'))

console.log(signIn(
    'test@gmail.com','123456'
    ))
console.log(logOut('test@gmail.com'))
    
const rateProduct = (userId, productId, rate) => {
    if(products.some(product => product._id === productId)){
        products.forEach(product => {
            if(product._id === productId){
                product.ratings.push({userId: userId, rate: rate})
            }
        })
        return products
    }else{
        return 'Product not found'
    }
}

const averageRating = (productId) => {
    if(products.some(product => product._id === productId)){
        let totalRating = 0;
        products.forEach(product => {
            if(product._id === productId){
                product.ratings.forEach(rating => {
                    totalRating += rating.rate
                })
            }
        })
        return totalRating / products.length
    }

}

console.log(averageRating('eedfcf'))

const likeProduct = (userId, productId) => {
    if(products.some(product => product._id === productId)){
        products.forEach(product => {
            if(product._id === productId){
                product.likes.push(userId)
            }
        })
        return products
    }
}

const mostLiked = () => {
    let mostLiked = 0;
    let mostLikedProduct = '';
    products.forEach(product => {
        if(product.likes.length > mostLiked){
            mostLiked = product.likes.length;
            mostLikedProduct = product.name

        }
    })
    return mostLikedProduct;
}

const removeLike = (userId, productId) => {
    if(products.some(product => product._id === productId)){
        products.forEach(product => {
            if(product._id === productId){
                product.likes = product.likes.filter(like => like !== userId)
            }
        })
        return products
    }
}

console.log(removeLike('fg12cy', 'hedfcg'))





