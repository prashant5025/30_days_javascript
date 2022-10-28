const countries = require("./countries_data");

const language = (countries) => {
    return countries.map((country) => {
        return country.languages;
    });
}

const languageSet = (countries, num) => {
    const languages = new Map();
    for(let i = 0; i<countries.length; i++){
        const countryLanguages = countries.map((country) => country.languages[i]);
        for(let j = 0; j<countryLanguages.length; j++){
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
    return languagesArray.slice(1,num)
}


// console.log(languageSet(countries, 10));

const data = (countries, num) => {
    const array = []
    for(let i = 0; i<countries.length; i++){
        array.push(countries[i]);
    }
    return array.map((country) => {
        return {
            name: country.name,
            population: country.population,
            area: country.area,
            languages: country.languages,
        }
    }).sort((a, b) => b.population - a.population).slice(0, num);

}

console.log(data(countries, 10));