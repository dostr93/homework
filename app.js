// Task 1 
class Candidate {
    constructor(data) {
        Object.assign(this, data);
    }
}

const searchCandidatesByPhoneNumber = phone => {
    const phoneArr = []
    for (let i = 0; i < condidateArr.length; i++) {
        const candidate = new Candidate(condidateArr[i]);
        let candidatePhone = candidate.phone;
        if (candidatePhone.includes(phone)) {
            phoneArr.push(candidate)
        }
    }
    if (phoneArr.length === 0) return 'not found';

    return phoneArr
}

// Task 2


// Task 3
const sortCandidatesArr = sortBy => {
    const balanceArr = [];
    for (let i = 0; i < condidateArr.length; i++) {
        const candidate = new Candidate(condidateArr[i]);
        let balance = candidate.balance;
        balanceArr.push(balance);
    }
    if (sortBy === 'asc') {
        balanceArr.sort();
    } else if (sortBy === 'desc') {
        balanceArr.sort().reverse();
    } 
    return balanceArr;
}

// Task 4 

console.log(condidateArr);

const eyesColors = condidateArr
    .map(cand => cand.eyeColor)
    .filter((cand, i, arr) => arr.indexOf(cand) === i);

const result = condidateArr.reduce((acc, candidate) => {
    acc[candidate.eyeColor] = condidateArr.filter(cand => cand.eyeColor === candidate.eyeColor);
    return acc;
}, {});

console.log(result);



