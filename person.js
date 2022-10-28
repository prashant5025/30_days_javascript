
const person = {
    firstName: 'Prashant',
    lastName: 'Singh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}


const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguage = languages.slice(0, -1).join(', ')


    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguage} and a little bit of ${languages[2]}.`

    return personInfo;
}
document.querySelector('#personInfo').innerHTML = `<p>${getPersonInfo(person)}</p>`
document.querySelector('#personInfo').style.color = 'red'
