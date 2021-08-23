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

const getEyeColorMap = () => {
    const obj = {};
    for (let i = 0; i < condidateArr.length; i++) {}
}