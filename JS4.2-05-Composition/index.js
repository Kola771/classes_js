/**
 * Autre forme
 */
// class Old {
//     constructor(ageolds) {
//         this.ages = ageolds;
//     }
// }

// class User {
//     constructor(name, firstName, job, agecomp) {
//         this.name = name;
//         this.firstName = firstName;
//         this.job = job;
//         this.ages = new Old(agecomp).ages;
//     }
    
//     get age() {
//         if (this.ages < 0 || this.ages >= 150 || this.ages === String(this.ages)) {
//             return null;
//         }
//             return true;
//     }
// }

// let BigDown = new User('ADJOVI', 'Clairvoyance', '', 10);
// console.log(BigDown);
// console.log(BigDown.age);



class Old {
    constructor(ageolds) {
        this.age = ageolds;
    }
    get ageolds(){
        if (this.age < 0 || this.age > 150 || typeof this.age === 'string') {
            return null;
        }
        return this.age;
    }
}

class User {
    constructor(name, firstName, job, age) {
        this.name = name;
        this.firstName = firstName;
        this.job = job;
        this.age = new Old(age).ageolds;
    }
    
}

let BigDown = new User('ADJOVI', 'Clairvoyance', '', 10);
console.log(BigDown.age);
