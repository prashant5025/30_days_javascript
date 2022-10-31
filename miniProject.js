



let country = ``;

countries_data.forEach((item) => {

country += `

 
<div class="country px-4 py-4 border-2 shadow-lg rounded-md h-auto w-[200px] my-4">
<div class="my-4">
	<img class="h-[100px] w-[150px]" src="${item?.flag}" alt="${item.name}">
	<h1 class="uppercase text-center my-4 text-yellow-500 font-semibold">${item.name}</h1>
</div>
<div>
	<p class="text-gray-500 text-sm px-2">Population: ${item.population}</p>
	<p class="text-gray-500 text-sm px-2">Region: ${item.region}</p>
	<p class="text-gray-500 text-sm px-2">Capital: ${item.capital}</p>
</div>
</div>



    `;
});

const countries = document.querySelector('.country');
countries.innerHTML = country;
