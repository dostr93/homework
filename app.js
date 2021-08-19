


const arr = ['Vasya', 'Petya', 'Alexey'];

function removeUser(array, index) {
    return array.splice(index, 1);
}

removeUser(arr, 0)

console.log(arr);

// Task2

const obj = { name: 'Vasya', age: 1}
const arr2 = [];
function getAllKeys(obj) {
    for (let key in obj) {
        arr2.push(key)
    } 
    return arr2;
    
}

getAllKeys(obj);

console.log(arr2);

// Task 3

const obj3 = { name: 'Vasya', age: 1}
const arr3 = [];
function getAllValues(obj3) {
    for (let key in obj3) {
        arr3.push(obj3[key])
    } 
    return arr3;
    
}

getAllValues(obj3);

console.log(arr3);

// Task 4


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