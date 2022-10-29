// let pattern = 'love';
// let flag = 'gi';
// let regEx = new RegExp(pattern, flag);

let str = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
// result = str.replace(/Python|python/gi, 'JavaScript')

// console.log(result);

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

match = txt.replace(/%/g,'')

const string = 'I love teaching.If you do not love teaching what else can you love.'
const pattern = /love/g

// const result  = string.match(pattern)
// const result  = string.search(pattern)
const result  = string.replace(/love/g, 'like')

console.log(result);

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]


const tenMostFrequentWordsUsingRegex = (paragraph, num) => {
    let words = paragraph.replace(/[.,]/g, '').split(' ')
    let wordCount = {}
    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word] += 1
        } else {
            wordCount[word] = 1
        }
    })
    let wordCountArray = Object.entries(wordCount)
    // console.log(wordCountArray)
    wordCountArray.sort((a, b) => b[1] - a[1])
    return wordCountArray.slice(0,num);
}

console.log(tenMostFrequentWordsUsingRegex(paragraph))
console.log(tenMostFrequentWordsUsingRegex(paragraph, 10))


let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = (sentence) => {
    return sentence.replace(/[^a-zA-Z ]/g, '')
}



sentence = cleanText(sentence)

const sentenceMostFrequentWords = (sentence, num) => {
    let words = sentence.split(' ')
    let wordCount = {}
    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word] += 1
        } else {
            wordCount[word] = 1
        }
    })
    let wordCountArray = Object.entries(wordCount)
    // console.log(wordCountArray)
    wordCountArray.sort((a, b) => b[1] - a[1])
    return wordCountArray;
}

console.log(sentenceMostFrequentWords(sentence, 10))