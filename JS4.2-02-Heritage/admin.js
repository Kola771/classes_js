
import User from "./index.js";

class Admin extends User {
    canEditArticles(){
        return true;
    }
}

let BigDown = new User();
let result = BigDown.fullName('ADJOVI', 'Clairvoyance');
console.log(result);

let BigUp = new Admin();
let resultats = BigUp.fullName('ADJOGAN', 'Babadjè');
console.log(resultats);
console.log(BigUp.canEditArticles());
