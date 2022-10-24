class Person {
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


class Employee extends Person {
    private _idCardNumber;
    private _ssn;

    constructor(firstName, lastName, age, idCardNumber, ssn) {
        super(firstName, lastName, age);
        this._idCardNumber = idCardNumber;
        this._ssn = ssn;
    }
}

const employee1 = new Employee('Tarantot', 'Tara', 48, '12345', '5558844');


class Developer extends Employee {
    private _level;

    constructor(firstName, lastName, age, idCardNumber, ssn, level) {
        super(firstName, lastName, age, idCardNumber, ssn);
        this._level = level;
    }
}

const employee2 = new Developer('Tarantot', 'Tara', 48, '12345', '5558844', 'senior');
console.log(employee2.fullName);