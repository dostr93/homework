// Task 1
function f1 () {
    let count = 0;
    return function(value) {
        count += value;
        console.log(count)
    }
}
const counter = f1();

// Task 2
function f2 () {
    let arr = [];
    return function (value) {
        if (value == undefined) {
			arr.length = 0;
			return arr;
		} else {
			arr.push(value)
			return arr
		}
    }
}
const getUpdaterArr = f2();
getUpdaterArr();

// Task 3 

function f3 () {
	let secondsStart = 0
	return function () {
		if (secondsStart === 0) {
			secondsStart = Math.floor(Date.now() / 1000)
			return 'enabled';
		}
		let secondsEnd = Math.floor(Date.now() / 1000);
		let timeForDoSomethisng = secondsEnd - secondsStart;
		secondsStart = secondsEnd;
		return timeForDoSomethisng
	}
}

const getTime = f3();
getTime();

// Task 4

let time = 5;
let stopInterval = setInterval(timer, 1000);

function timer() {
	let minutes = Math.floor(time / 60);
	minutes = minutes < 10 ? "0" + minutes : minutes;
	let seconds = time % 60;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	time--;
	if (time < 0) {
		clearInterval(stopInterval);
		console.log('Time End');
	} else {
		console.log(`${minutes} : ${seconds}`);
	}
}