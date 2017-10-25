interface Person {
	firstName: string,
	lastName: string
}

function greeter(person: Person) {
	return `Hello ${person.firstName}  ${person.lastName}`;
}

class Student {
	fullName: string;
	constructor(public firstName, public middleName, public lastName){
		this.fullName = `${firstName} ${middleName} ${lastName}`;
	}
}

var user = new Student("King","W", "Dreamer");


document.body.innerHTML = greeter(user);