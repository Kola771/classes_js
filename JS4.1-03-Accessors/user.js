
class User {
    constructor(name, firstName) {
        this.name = name;
        this.firstName = firstName;
    }

    get getFname() {
        return this.firstName;
    }

    get getLname() {
        return this.name;
    }

    set setFname(newFname) {
        this.firstName = newFname;
    }
    
    set setLname(newname) {
        this.name = newname;
    }

}

class Admin extends User {
    constructor(nom, prenoms) {
        super(nom, prenoms);
    }

    get getjob(){
        return this.job;
    }

    set setjob(job){
        this.job = job;
    }

}

let BigDown = new Admin('ADJOVI', 'Clairvoyance');
BigDown.setLname='ADJOGAN';
BigDown.setjob='Traders';

console.log(BigDown)
console.log(BigDown.getjob)