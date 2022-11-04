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
    document.getElementById("time").style.backgroundColor = random;
            document.getElementById("changeColor").style.color = random;
}, 1000)

const lists = `
<li id="list" class="px-10 py-4 bg-green-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfPython Challenge Done</li>
            <li id="list" class="px-10 py-4 bg-yellow-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfJavaScript Challenge Ongoing</li>
            <li id="list" class="px-10 py-4 bg-red-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfReactChallenge Coming</li>
            <li id="list" class="px-10 py-4 bg-red-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfReactNative Challenge Coming</li>
            <li id="list" class="px-10 py-4 bg-red-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfFullStack Challenge Coming</li>
            <li id="list" class="px-10 py-4 bg-red-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfDataAnalysis Challenge Coming</li>
            <li id="list" class="px-10 py-4 bg-red-400 text-slate-700 mx-10 my-2 text-[24px]">30DaysOfMachineLearning Challenge Coming</li>
`

const ul = document.querySelector('ul');
ul.innerHTML = lists

// const list = document.querySelectorAll('#list');

