



const arr = ['Vasya', 'Petya', 'Alexey'];

function removeUser(array, index) {
    return array.splice(index, 1);
}

removeUser(arr, 0)

console.log(arr);

// Task2

const obj = { name: 'Vasya', age: 1}

function getAllKeys(obj) {
    return Object.keys(obj);
    
}

getAllKeys(obj);

// Task 3

const obj3 = { name: 'Vasya', age: 1}

function getAllValues(obj3) {
    return Object.values(obj3)
    
}

getAllValues(obj3);

// Task 4

const obj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoarr = (obj, index) => {

    if (index >= 1) {
        arr.splice(index - 1, 0, obj);
    } else {
        console.log('Error')
    }
}

insertIntoarr(obj, 2)
console.log(arr)

insertIntoarr(secondObj, 1)
console.log(arr)

// Task6
function getCompanyName() {
    const companiesArr = [];
    let elemOfArr = '';
    for (let i = 0; i < condidateArr.length; i++) {
        elemOfArr = condidateArr[i];
        companiesArr.push(elemOfArr.company)
    }

    let uniqueCompany = new Set(companiesArr)
    const uniqueCompanyArr = [...uniqueCompany]
    return uniqueCompanyArr
}



// Task 7
function getUserByYear(year) {
    let elemOfArr = '';
    let registeredDate = '';
    const userByIdArr= [];
    for (let i = 0; i < condidateArr.length; i++) {
        elemOfArr = condidateArr[i];
        registeredDate = elemOfArr.registered;
        if (registeredDate.includes(year)) {
            userByIdArr.push(elemOfArr["_id"]);
        }
    }
    return userByIdArr;
} 

// Task 8

class Candidate {
    constructor(candidates) {
        this.id = candidates["_id"];
        this.index = candidates.index;
        this.guid = candidates.guid;
        this.isActive = candidates.isActive;
        this.balance = candidates.balance;
        this.picture = candidates.picture;
        this.age = candidates.age;
        this.eyeColor = candidates.eyeColor;
        this.name = candidates.name;
        this.gender = candidates.gender;
        this.company = candidates.company;
        this.email = candidates.email;
        this.phone = candidates.phone;
        this.address = candidates.address;
        this.about = candidates.about;
        this.registered = candidates.registered;
        this.latitude = candidates.latitude;
        this.longitude = candidates.longitude
        this.tags = candidates.tags;
        this.friends = candidates.friends;
        this.greeting = candidates.greeting
        this.favoriteFruit = candidates.favoriteFruit;
    }

    // Task 5 

    state() {
        let elem = 0
        let addressArr = []
        for (let i = 0; i < condidateArr.length; i++) {
            elem = condidateArr[i];
            addressArr.push(elem.address.split(', ')[2]);
        }
        return addressArr;
    }
}
        
  
const condidate = new Candidate(condidateArr[1])
    
function getCondidatesByUnreadMsg(message) {
    const messageArr = [];
    let unreadMessage ='';
    for (let i = 0; i < condidateArr.length; i++) {
        const candidate = new Candidate(condidateArr[i]);
        unreadMessage = candidate.greeting;
        if (unreadMessage.includes(message)) {
            messageArr.push(candidate)
        }
    }
    return messageArr;
}

// Task9
function getCondidatesByGender(gender) {
    const genderArr = [];
    for (let i = 0; i < condidateArr.length; i++) {
        const candidate = new Candidate(condidateArr[i]);
        let typeOfGender = candidate.gender;
        if (typeOfGender === gender) {
            genderArr.push(candidate)
        }
    }
    return genderArr;
}


// Task 10
