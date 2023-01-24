 class Request {
    getInputs(tableau) {
        for(let i=0; i<tableau.length; i++) {
            console.log(tableau[i].value);
        }
    }
}

export default Request;