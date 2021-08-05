// // Task 1 

function Employee(employee) {
	this.id = employee.id;
	this.name = employee.name;
	this.surname = employee.surname;
	this.salary = employee.salary;
	this.workExperience = employee.workExperience;
	this.isPrivileges = employee.isPrivileges;
	this.gender = employee.gender;
}

const employeeObj = new Employee(employeeArr[0]);

// Task 2 

Employee.prototype.getFullName = function() {
	return `${this.surname} ${this.name}`; 
}

console.log(employeeObj.getFullName());

// Task 3 

let createEmployesFromArr = (arr) => {
	return arr.map(item => {
		return new Employee(item)
	});
};
    
const employeeConstructArr = createEmployesFromArr(employeeArr)

// Task 4 

const getFullNamesFromArr = (arr) => {
	return arr.map(item => {
		return item.getFullName()
	})
}
	
getFullNamesFromArr(employeeConstructArr) 

// Task 5

const getMiddleSalary = (arr) => {
	const totalSalary = arr.map(item => item.salary).reduce((prev, item) => (prev + item));
	const middleSalary = totalSalary / arr.length;
	return Math.round(middleSalary);
};

getMiddleSalary(employeeConstructArr);

// Task 6 

const getRandomEmployee = (arr) => {
	const randomEmployee = Math.floor(Math.random() * arr.length);
	return arr[randomEmployee];
};
	
getRandomEmployee(employeeConstructArr);

//Task 7

// Создаем экземпляр на основе объекта 
// который берем из массива по 0 индексу

const employeeObjTask7 = new Employee(employeeArr[0]);


employeeObjTask7.fullInfo
// Результат
//  id - 1, name - Денис, surname - Хрущ