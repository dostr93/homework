// Task 1 
for (i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log('FizBuz');
    } else if (i % 2 === 0) {
        console.log('Fiz');
    } else {
        console.log('Buz');
    }
}

// Task 2 

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

factorial(10);

// Task 3 

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const paperAmount = (weeksAmount) => {
    const paperForWeeks = weeksAmount * consumptionPerWeek;
    const amountPaperPacks = paperForWeeks / sheetsInReamPaper - (paperForWeeks % sheetsInReamPaper / sheetsInReamPaper) + 1;
    return amountPaperPacks;
} 

// Task 4 

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 27

const roomInPorch = roomsOnFloor * floors;


const findPorch = (roomNumber) => {
    const porch = roomNumber / roomInPorch - (roomNumber % roomInPorch / roomInPorch) + 1;
    if (roomNumber % roomInPorch === 0) return roomNumber / roomInPorch;
    return porch;
}

const findFloor = (roomNumber) => {
    const floor = (roomNumber - 1) % roomInPorch / roomsOnFloor - ((roomNumber - 1) % roomInPorch % roomsOnFloor / roomsOnFloor) + 1;
    return floor;
}

const porchAndFloor = (roomNumber) => {
    findFloor(roomNumber);
    findPorch(roomNumber);

    return 'Porch: ' + findPorch(roomNumber) + ', ' + 'floor: ' + findFloor(roomNumber);
}

// Task 5