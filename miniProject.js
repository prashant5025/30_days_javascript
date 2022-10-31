



let country = ``;

countries_data.forEach((item) => {

country += `

 
<ul">
    <li>${item.name}</li>
    <li>${item.capital}</li>
    <li>${item.region}</li>
    <li>${item.population}</li>
    <li>${item.area}</li>

</ul>



    `;
});

const countries = document.querySelector('.country');
countries.innerHTML = country;
