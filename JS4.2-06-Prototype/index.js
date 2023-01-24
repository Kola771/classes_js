

class Old {
    constructor(ageolds) {
        this.age = ageolds;
    }
}

class User {
    constructor(name, firstName, job, age) {
        this.name = name;
        this.firstName = firstName;
        this.job = job;
        this.age = new Old(age).ageolds();
    }
    
}

Old.prototype.ageolds= function() {
    if (this.age < 0 || this.age > 150 || typeof this.age === 'string') {
        return null;
    }
    return this.age;
}

let BigDown = new User('ADJOVI', 'Clairvoyance', '', 10);
console.log(BigDown);
console.log(BigDown.age);
