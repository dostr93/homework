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

function getArray(){
    let array2 = [];
    const amount = 9;
    for (i = 1; i <= amount; i++) {
        array2.push(i);
    } return array2
}

// Task 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
let dayName = '';
const lang = 'ru';
const day = 7;

function getNameOfDay(day, lang) {
	for (let key in namesOfDays.ru) {
			if (key == day - 1) {
				dayName = namesOfDays.ru[key];
			}
	}
	return dayName;
}

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