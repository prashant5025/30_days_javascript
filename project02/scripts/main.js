const title = document.getElementById('title');
title.innerHTML = `<h1 class="title">${asabenehChallenges2020.description} in <span id="title_span">${asabenehChallenges2020.challengeYear} </span></h1>`;

const link = document.getElementById('header_link');
link.innerHTML = `<a href="#" class="header_link">${asabenehChallenges2020.challengeSubtitle}</a>`;


window.onload = setInterval(function() {
	let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
	let day = today.getDate();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;

	let currentDate = [year, month, day].join("-")
	let currentTime = hour + ":"
			+ min + ":" + sec + " " + am_pm;

    function randomHexaNumberGenerator() {
        let hexaNumber = "0123456789ABCDEF";
        let hexa = "#";
        for (let i = 0; i < 6; i++) {
            hexa += hexaNumber[Math.floor(Math.random() * hexaNumber.length)];
        }
        return hexa;
    }

	const random = randomHexaNumberGenerator();

	document.getElementById("time")
			.innerHTML = currentDate + " " + currentTime;
    document.getElementById("title_span").style.color = random;
            document.getElementById("time").style.backgroundColor = random;
}, 1000)

//convert object to array
const objectToArray = (obj) => {
	let arr = [];
	for (let key in obj) {
		arr.push(obj[key]);
	}
	return arr;
}

const data = objectToArray(asabenehChallenges2020);
const lists = document.getElementById('lists');
for(let i=0; i<=asabenehChallenges2020.challenges.length; i++){
	
    lists.innerHTML += `
	<div class="list_item">
	<li class="li">${asabenehChallenges2020.challenges[i].name}</li>
	<li class="li">${asabenehChallenges2020.challenges[i].topics[0]}</li>
	<li class="li">${asabenehChallenges2020.challenges[i].status}</li>
	</div>
	`
}

const author = document.getElementByClassName('author');
author.innerHTML = `<h1 class="author">${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}</h1>`;


// list





