class Person1 {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public get fullName() {
        return `Mr ${this.firstName} (name) ${this.lastName} (surname)`
    }

    public greeting() {
        return `Hello, I am a man and my name is ${this.firstName}`
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            this._age = 0
        } else {
            this._age = value;
        }
    }
}


class Employee1 extends Person1 {
    private _idCardNumber;
    private _ssn;

    constructor(firstName, lastName, age, idCardNumber, ssn) {
        super(firstName, lastName, age);
        this._idCardNumber = idCardNumber;
        this._ssn = ssn;
    }

    public greeting() {
        return `Hello, I am an employee and my name is ${this.firstName}`
    }
}


const employee_0 = new Person1('John', 'Smith', 22)
const employee_1 = new Employee1('Tarantot', 'Tara', 48, '12345', '5558844');


class Developer1 extends Employee1 {
    private _level;

    constructor(firstName, lastName, age, idCardNumber, ssn, level) {
        super(firstName, lastName, age, idCardNumber, ssn);
        this._level = level;
    }

    public greeting() {
        return `Hello, I am a developer and my name is ${this.firstName}`
    }
}


const employee_2 = new Developer1('Tarantot', 'Tara', 39, '99999', '0003456', 'Senior')
console.log(employee_0.greeting(), employee_1.greeting(), employee_2.greeting())

const personsList: Person1[] = [employee_0, employee_1, employee_2]


function massGreeting(persons: Person1[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting()
    }
}


massGreeting(personsList)