// let pattern = 'love';
// let flag = 'gi';
// let regEx = new RegExp(pattern, flag);

let str = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
result = str.replace(/Python|python/gi, 'JavaScript')

console.log(result);

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

match = txt.replace(/%/g,'')
console.log(match)