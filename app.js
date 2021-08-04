// Task 1

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let arr = [];
for (let property in citiesAndCountries) {
    arr.push(property + ' - ' + citiesAndCountries[property])
}
console.log(arr);

// Task 2 
let r = 9;
const arrInArr = () => {
	const mainArr = []
	let insideArr = [];
	for (let i = 1; i <= r; i++) {
		if(i % 3 === 0) {
			insideArr[insideArr.length] = i;
			mainArr[mainArr.length] = insideArr;
			insideArr = [];
			continue
		}
		insideArr[insideArr.length] = i;
	}
	return mainArr;
} 
	console.log(arrInArr());


// Task 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const lang = 'ru';
const day = 7;

const getNameOfDay = (lang, day) => namesOfDays[lang][day - 1];

// getNameOfDay();

// Task 4 

let b = [12, 898, 899, 900];
let min1 = b[0];
let min2 = b[1];

const sumOfMin = () => {
	for (let i = 2; i < b.length; i++) {
		if (b[i] < min1) {
			min1 = b[i];
		} else {
			if (b[i] < min2) {
				min2 = b[i]
			}
		}
	}
	return min1 + min2
}

// Task 5 
const a = (arr) => {
	let result = 0;
	let counter = 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] === 1 ? result += counter : result;
		counter *= 2
	}
	return result
}
