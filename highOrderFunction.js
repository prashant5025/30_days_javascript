const countries_data = require("./countries_data");

//Level 1

// differece between forEach, map, filter and reduce

//forEach

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((item) => {
//     console.log(item);
// })

// //map
// arr.map((item) => {
//     console.log(item);
// })

// //filter
// arr.filter((item) => {
//     console.log(item);
// });

// const callback = (n) => {
//     return n ** 2
// }

// function cube(callback, n){
//     return callback(n) * n;
// }

// console.log(cube(callback, 3));

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((item) => console.log(item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()));
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((element) => sum += element);
// console.log(sum);

// const numberSquare = numbers.map((item) => item ** 2);
// console.log(numberSquare);

// const countriesUpperCase = countries.map((item) => item.toUpperCase());
// console.log(countriesUpperCase);

// const countriesCapitalized = countries.map((item) => item.toUpperCase().slice(0,1) + item.toLowerCase().slice(1));
// console.log(countriesCapitalized);

// const countriesFirstThreeLetters = countries.map((item) => item.toUpperCase().slice(0,3));
// console.log(countriesFirstThreeLetters);

// const countriesContainsLand = countries.filter((item) => item.includes('land'));
// console.log(countriesContainsLand);

// const age = [12,14,15,17,18,19,20,22];

// const ageGreaterThan18 = age.filter((item) => item > 18);
// console.log(ageGreaterThan18);

// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]

// const productlist = products.filter((item) => item !== '').map((item) => item.product);
// const priceList = products.filter((item) => item !== '').map((item) => item.price);

// const productSixCharacters = products.filter((item) => item.product.length > 6);

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// const countriesAll = countries.forEach((item) => console.log(item.toUpperCase().slice(0,1) + item.toLowerCase().slice(1)));

// level 1
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const countriesArray = countries.forEach((item) => console.log(item));
const nameArray = names.forEach((item) => console.log(item));
const numbersArray = numbers.forEach((item) => console.log(item));

const countriesUpperCase = countries.map((item) => item.toUpperCase());
const countriesLength = countries.map((item) => item.length);
number = numbers.map((item) => item ** 2);

const countriesWithLand = countries.filter((item) => item.includes("land"));
const countriesWithSixCharacters = countries.filter((item) => item.length > 6);
const countriesWithSixAndMore = countries.filter((item) => item.length > 6);
const countriesWithE = countries.filter((item) => item.startsWith("E"));
const productPriceValue = products
  .filter((item) => item.price !== "")
  .map((item) => item.price);
console.log(productPriceValue);

const getStringList = (arr) => {
  return arr.join(",");
};

const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const countriesConcat = countries.reduce((acc, cur) => acc + ", " + cur);
console.log(`${countriesConcat} are north European countries`);

const namesLength = names.some((item) => item.length > 7);
if (namesLength) {
  console.log("There is a name with seven or more characters");
} else {
  console.log("There is no name with seven or more characters");
}

const countriesWithLandEvery = countries.every((item) => item.includes("land"));
if (countriesWithLandEvery) {
  console.log("Every country contains land");
} else {
  console.log("Every country does not contain land");
}

const findCountryWithSixCharacters = countries.find((item) => item.length > 6);
console.log(findCountryWithSixCharacters);

const countryNorway = countries.findIndex((item) => item === "Norway");
if (countryNorway) {
  console.log("Norway is at index " + countryNorway);
} else {
  return -1;
}

const countryRussia = () => {
  countries.findIndex((item) => item === "Russia");
  if (countryRussia) {
    console.log("Russia is at index " + countryRussia);
  } else {
    return -1;
  }
};

// Level 2
const addPriceChain = products
  .map((item) => item.price)
  .filter((item) => item !== "")
  .reduce((acc, cur) => parseInt(acc + cur.price), 0);
console.log(addPriceChain);

const totalPrice = products.reduce((acc, cur_) => {
  return parseInt(acc + cur_.price);
}, 0);

console.log(totalPrice);

const categorizeCountries = (arr) => {
  return arr
    .map((item) => item.name)
    .filter((item) => item.includes("land"))
    .map((item) => {
      if (
        item.includes("land") ||
        item.includes("ia") ||
        item.includes("island") ||
        item.includes("stan")
      ) {
        return item;
      } else {
        return -1;
      }
    });
};

console.log(categorizeCountries(countries_data));

const arrayOfObject = (arr) => {
  return arr.map((item) => item.name).filter((item) => item[0] === 'A' || item[0] === 'a');

}


const getFirstTenCountries = (arr) => {
  return arr.slice(0,10);
}
console.log(getFirstTenCountries(countries_data));

const getLastTenCountries = (arr) => {
  return arr.slice(-10);
}


const getMaxNumberOfTimes = (arr) => {
  return arr.map((item) =>
    item.name[0] === 'A' || item.name[0] === 'a')
    .reduce((acc, cur) => acc + cur, 0);

}

const sortCountriesByName = (arr) => {
  arr.sort((a,b) => {
    if(a.name > b.name){
      return 1;
    }else{
      return -1;
    }

  })
  return arr;
}

const sortCountriesByCapital = (arr) => {
  return arr.sort((a,b) => {
    if(a.capital > b.capital){
      return 1;
    }else{
      return -1;
    }
  })
}

const sortCountriesByPopulation = (arr) => {
  return arr.sort((a,b) => a.poppulation - b.poppulation);
}

// [
//   {country: 'English',count:91},
//   {country: 'French',count:45},
//   {country: 'Arabic',count:25},
//   {country: 'Spanish',count:24},
//   {country:'Russian',count:9},
//   {country:'Portuguese', count:9},
//   {country:'Dutch',count:8},
//   {country:'German',count:7},
//   {country:'Chinese',count:5},
//   {country:'Swahili',count:4}
//   ]

const getLangeuage = (arr) => {
  return arr.map((item) => item.languages).reduce((acc,cur) => {
    acc.push(...cur);
    return acc;

  },[]).reduce((acc,cur) => {
    if(acc[cur]){
      acc[cur]++;
    }else{
      acc[cur] = 1;
    }
    return acc;
  }
  ,{})
}

const tenMostSpokenLanguages = (arr, num) => {
  const languages = getLangeuage(arr);
  const languagesArray = Object.keys(languages).map((item) => {
    return {country: item, count: languages[item]}
  })
  return languagesArray.sort((a,b) => b.count - a.count).slice(0,num);
}

// [
//   {country: 'China', population: 1377422166},
//   {country: 'India', population: 1295210000},
//   {country: 'United States of America', population: 323947000},
//   {country: 'Indonesia', population: 258705000},
//   {country: 'Brazil', population: 206135893},
//   {country: 'Pakistan', population: 194125062},
//   {country: 'Nigeria', population: 186988000},
//   {country: 'Bangladesh', population: 161006790},
//   {country: 'Russian Federation', population: 146599183},
//   {country: 'Japan', population: 126960000}
//   ]

const getPopulation = (arr) => {
  return arr.map((item) => {
    return {country: item.name, population: item.population}
  })
}

const tenMostPopulatedCountries = (arr, num) => {
  const population = getPopulation(arr);
  return population.sort((a,b) => b.population - a.population).slice(0,num);
}

console.log(tenMostPopulatedCountries(countries_data, 10));



const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];






const statistics = () => {
  count: {
    return ages.length;
  }
  sum: {
    return ages.reduce((acc, curr) => acc + curr, 0);
  }

  min: {
    return Math.min(...ages);
  }

  max: {
    return Math.max(...ages);
  }

  range : {
    return Math.max(...ages) - Math.min(...ages);
  }

  mean: {
    return ages.reduce((acc, curr) => acc + curr, 0) / ages.length;
  }

  median : {
    return ages.sort((a,b) => a - b)[Math.floor(ages.length / 2)];
  }

  mode : {
    return ages.reduce((acc, curr) => {
      if(acc[curr]){
        acc[curr]++;
      }else{
        acc[curr] = 1;
      }
      return acc;
    })
  }

}

console.log('Count:', statistics().count) 
// console.log('Sum: ', statistics.sum) 
// console.log('Min: ', statistics.min) 
// console.log('Max: ', statistics.max) 
// console.log('Range: ', statistics.range)
// console.log('Mean: ', statistics.mean)
// console.log('Median: ',statistics.median) 
// console.log('Mode: ', statistics.mode)