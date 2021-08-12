//  Task 1 


class Student {
	constructor(enrollee) {
		this.id = Student.getId();
		this.name = enrollee.name;
		this.surname = enrollee.surname;
		this.raitingPoint = enrollee.raitingPoint;
		this.schoolPoint = enrollee.schoolPoint;
		this.isSelfPayment = Student.getPayment(this);
	}
	
	static listOfStudents = [];

	static sortOfStudents(arr) {
		return arr.sort((a, b) => {
			if (b.ratingPoint === a.ratingPoint) {
				return b.schoolPoint - a.schoolPoint;
			} else {
				return b.ratingPoint - a.ratingPoint
			};
		});	
	};

	static id = 1; 

	static getId() {
		return this.id++
	}

	static getPayment(student) {
		this.sortOfStudents(this.listOfStudents);
		this.listOfStudents.push(student);
		
		for (let i = 0; i < this.listOfStudents.length; i++) {
			if (i <= 4 && this.listOfStudents[i].ratingPoint >= 800) {
				this.listOfStudents[i].isSelfPayment = true;
            } else {
                this.listOfStudents[i].isSelfPayment = false;
            }
        }

        return true;
    }
    
    get listOfStudents() {
        return this.listOfStudents;
    }
};

for (let i = 0; i < studentArr.length; i++) {
	new Student(studentArr[i])
}

// Task 2 

class CustomString {

	constructor(word) {
		this.word = word
	}
	
	reverse(word) {
		let reverseResult = '';
		for (let i = word.length - 1; i >= 0; i--) {
			reverseResult += word[i]
		}

		return reverseResult;
	}	

	ucFirst(word) {
		let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		let lowcase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		let letter = '';

		

		for (let i = 0; i < lowcase.length; i++) {
			if (word[0] == lowcase[i]) {
				letter = uppercase[i];
			}
		} return letter + word.slice(1);
	} 

	ucWords(words) {
		let firstLetters = '';
		for (let i = 0; i < words.length; i++) {
			if (words[i - 1] === ' ' || i === 0) {
				firstLetters += words[i].toUpperCase();
			} else {
				firstLetters += words[i]
			}
		} return firstLetters;
	}
}

const myString = new CustomString();