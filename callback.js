// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['JavaScript', 'React', 'Node'];
//         callback(false,skills);
//     }, 2000)
// }

// doSomething((err, data) => {
//     if(err){
//         return console.log(err);
//     }

//     return console.log(data);
// })

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['JavaScript', 'React', 'Django'];

//         if(skills.includes('Node')){
//             resolve(skills);
//         }else{
//             reject('Something went wrong');
//         }
//     }, 2000)
// })

// doPromise.then(result => {
//     console.log(result);
// }).catch(err => console.log(err));

// const url = "https://restcountries.com/v2/all"; // countries api
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['JavaScript', 'React', 'Node'];
//         callback(true,skills);
//     }, 2000)
// }

// const callback =(err, result) => {
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// }

// doSomething(callback);

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills=['JavaScript', 'React', 'python'];
//         if(skills.includes('Node')){
//             resolve(skills);
//         }else{
//             reject('Something went wrong');
//         }
//     }, 2000)
// })

// doPromise.then(result => {
//     console.log(result);
// }).catch(err => console.log(err));


const url = "https://restcountries.com/v2/all"; // countries api
// fetch(url)
//     .then((res) => res.json()).then(data=> {
//         console.log(data);
//     }).catch(err => console.log(err));

// const fetchData = async () => {
//     try{
//         const res = await fetch(url);
//         const countries = await res.json();
//         const countryData = countries.map(country => {
//             return {
//                 name: country.name,
//                 capital: country.capital,
//                 language: country.languages.map(lang => lang.name),
//                 population: country.population,
//                 flag: country.flags.svg
//             }
//         })
//         console.log(countryData);
//     }catch(err){
//         console.log(err);
//     }
// }
// console.log('====== aysnc await ======');
// fetchData();

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// const fetchData = async () => {
//     try{
//         const res = await fetch(catsAPI);
//         const cats = await res.json();
//         const catName = cats.map(cat => {
//             return {
//                 name: cat.name
//             }
//         })
//         console.log(catName);
//     }catch(err){
//         console.log(err);
//     }
// }

// fetchData();
// const fetchData = async() => {
//     try{
//         const res = await fetch(catsAPI);
//         const cats = await res.json();
//         const catAvegWeight = cats.map(cat => {
//             return {
//                 name: cat.name,
//                 average_weight: cat.weight.metric
//             }
//         })
//         console.log(catAvegWeight);

//     }catch(err){
//         console.log(err);
//     }
// }

// fetchData();

const countryData = async() => {
    try{
        const res = await fetch(url);
        const countries = await res.json();
        const countryArea = countries.map(country => {
            return {
                name: country.name,
                area: country.area
            }
        })
        const largestCountries = countryArea.sort((a, b) => b.area - a.area).slice(0, 10);
        console.log(largestCountries);

    }catch(err){
        console.log(err);
    }
}

countryData();

// countryData();

const totalLanguages = async() => {
    try{
        const res = await fetch(url);
        const countries = await res.json();
        const languages = countries.map(country => {
            return {
                name: country.name,
                languages: country.languages.map(lang => lang.name)
            }
        })
        const totalLanguages = languages.reduce((acc, curr) => {
            return acc + curr.languages.length;
        }, 0)
        console.log(totalLanguages);
    }catch(err){
        console.log(err);
    }
}

totalLanguages();