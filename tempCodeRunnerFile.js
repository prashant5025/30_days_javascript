const userWithMostSkills = Object.entries(user).reduce((acc, [key, value]) => {
//     if(acc.length < value.skills.length){
//         acc = key
//     }
//     return acc
// })

// const sortData = Object.entries(user).sort((a, b) => b[1].skills.length - a[1].skills.length)

// sortData.map((item) => {
//     console.log(item)
// })


// const usersObj = JSON.parse(usersText,(key, value) => {
//     let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value 
//     return newValue
// })