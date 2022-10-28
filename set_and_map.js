// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

// const A = new Set(a);
// const B = new Set(b);


// const set = new Set();





// const countriesSet = new Set(countries);
// countriesSet.add('Denmark');
// countriesSet.add('Sweden');

// const countriesMap = new Map();

// for(let i=0; i<countries.length; i++){
//     countriesMap.set(i, countries[i]);
// }

// console.log(countriesMap);

// const c = a.filter((num) => !B.has(num));
// let C = new Set(c);

// console.log(C)


// const C = new Set([...a,...b]);

// console.log(C);

const countries_data = require("./countries_data")

// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 },
//     { Spanish: 24 },
//     { Russian: 9 },
//     { Portuguese: 9 },
//     { Dutch: 8 },
//     { German: 7 },
//     { Chinese: 5 },
//     { Swahili: 4 },
//     { Serbian: 4 }
//   ]

// const mostSpokenLanguages = (countries, n) => {
//     const languages = new Map();
//     for(let i=0; i<countries.length; i++){
//         const country = countries[i];
//         const countryLanguages = countries_data[country];
//         for(let j=0; j<countryLanguages.length; j++){
//             const language = countryLanguages[j];
//             if(languages.has(language)){
//                 languages.set(language, languages.get(language)+1);
//             }else{
//                 languages.set(language, 1);
//             }
//         }
//     }
//     const languagesArray = [...languages];
//     languagesArray.sort((a, b) => b[1] - a[1]);
//     return languagesArray.slice(0, n);
// }

// console.log(mostSpokenLanguages(countries_data, 10))

const mostSpokenLanguages = (countries, n) => {
    const languages = new Map();
    for(let i=0; i<countries.length; i++){
        const countryLanguages = countries_data.map((country) => {
            return country.languages[i];
        });
        for(let j=0; j<countryLanguages.length; j++){
            const language = countryLanguages[j];
            if(languages.has(language)){
                languages.set(language, languages.get(language)+1);
            }else{
                languages.set(language, 1);
            }
        }
    }
    const languagesArray = [...languages];
    languagesArray.sort((a, b) => b[1] - a[1]);
    return languagesArray.slice(1, n);
}

console.log(mostSpokenLanguages(countries_data, 10))

const totalLanguages = (countries) => {
    const languages = new Set();

    for(let i = 0; i<countries.length; i++){
        const countryLanguages = countries_data.map((country) => country.languages[i]);
        for(let j = 0; j<countryLanguages.length; j++){
            const language = countryLanguages[j];
            languages.add(language);
        }
    }
    return languages.size;
}

console.log(totalLanguages(countries_data))





