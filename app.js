Task1

const enteredNumber = prompt('Enter the number');
const button = document.querySelector('.button');

for (i = 1; i <= Number(enteredNumber); i++) {
    
    let input = document.createElement('input')
    input.value = `Input ${i}`;

    
    if (!(i % 3)) input.value = 'Some text';
    input.classList.add('input-item');
    
    button.before(input);
    
    if (enteredNumber === i) {
        input.classList.add()
    }
    
    if (!(i % 2 )) {
        input.classList.add('input-background');
    }

    if (i === Number(enteredNumber)) input.classList.add('margin-zero');
}

// Task 2

const newDiv = document.createElement('div')
const newTag = document.createElement('h2');
const startBtn = document.createElement('button')
const stopBtn = document.createElement('button')
startBtn.innerText = 'Start';
stopBtn.innerText = 'Stop';

document.forms[0].after(newDiv);
newDiv.prepend(startBtn, stopBtn);
newDiv.append(newTag)

startBtn.addEventListener('click', () => {
    Id = setInterval(timer, 1000);
    return
});
stopBtn.addEventListener('click', () => clearInterval(Id));
    
let timer = function() {
    const time = document.querySelector('h2')
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    time.textContent = hours + ':' + minutes + ':' + seconds;
}

// Task 3 

function colorRed(){
	const lastParagraph = document.body.querySelector('#main').lastElementChild;
	lastParagraph.style.backgroundColor = 'red';
	return
}

function footerDown(){
	const footer = document.querySelector('#footer')
	const wrapper = document.querySelector('#wrapper')
	wrapper.append(footer)
	return
}

colorRed()
footerDown()


// Task 4

const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
    };
    