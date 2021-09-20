const data = [
    {start: 0, duration: 15, title: "Exercise"},
    {start: 25, duration: 30, title: "Travel To Work"},
    {start: 30, duration: 30, title: "Plan day"},
    {start: 60, duration: 15, title: "Review yesterdays commits"},
    {start: 100, duration: 15, title: "Code review"},
    {start: 180, duration: 90, title: "Have lunch with John"},
    {start: 360, duration: 30, title: "Skype call"},
    {start: 370, duration: 45, title: "Follow up with designer"},
    {start: 405, duration: 30, title: "Push up branch"}
]

const toHTML = event => `
    <div class="event" style="height: ${event.duration}px; top: ${event.start}px;">
        ${event.title}
        <input type="color" class="changeColor" data-color="color">
        <button class="event-btn" data-btn="close">del</button>
    </div>
`

function render() {
    const arr = [];
    let nodesRendered = [];

    for(let i = 0; i < data.length; i++){
        let k = 0;
        let tempArr = [];
        while(i + k + 1 < data.length - 1 && data[i].start + data[i].duration > data[i + k + 1].start){
            tempArr.push(data[i + k + 1]);
            k++;
        }
        if(k > 0){  
            arr.push(`<div class="event-container">
              ${!nodesRendered.find(val => data[i] === val) && toHTML(data[i])}
              ${tempArr.map(toHTML)}
            </div>`)
            nodesRendered.push(data[i], ...tempArr);
        }
        else {
            if(!nodesRendered.find(val => data[i] === val)){
                arr.push(toHTML(data[i]));
                nodesRendered.push(data[i]);
            }
        }
        // i += k;
    }
    const html = arr.join('')
    document.querySelector('#event').innerHTML = html;
}

render()

document.querySelector('.add-event').addEventListener('click', event => {
    event.preventDefault()
    addEvent()
});

function addEvent() {
    const start = document.querySelector('.start').value;
    const duration = document.querySelector('.duration').value;
    const title = document.querySelector('.title').value;
    if ((+start + +duration) < 540 && start >= 0) {
        const addNewEvent = {start: '', duration: '', title: ''}
        addNewEvent.start = start
        addNewEvent.duration = duration
        addNewEvent.title = title

        data.push(addNewEvent);

        render();

        addNewEvent.start = ''
        addNewEvent.duration = ''
        addNewEvent.title = ''

    } else {
        alert('Событые начинается не раньше 8.00 и заканичается не позже 17.00')
    }
}
removeEvent()

function removeEvent() {
    let el = document.querySelectorAll(".event-btn");
    el.forEach(item => {
    item.addEventListener("click", function(){
        item.parentNode.parentNode.removeChild(item.parentNode);
    });
});
}

function changeColor(e) {
    e.target.parentNode.style.backgroundColor = e.target.value; 
    
}
let colorInputs = document.querySelectorAll('input.changeColor');
console.log(colorInputs)
colorInputs.forEach(item => {
    item.addEventListener("input", changeColor)})
document.addEventListener('click', event =>{
    const color = event.target.value
    if (color) console.log(color)
})