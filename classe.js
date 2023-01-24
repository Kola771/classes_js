'use strict'

// let inputs;
// let notAllowed = ["submit"]
// class Request {
//     getInputs(inputs) {
//         inputs.forEach(element => {
//             if(!notAllowed.includes()) {
//                 console.log(`data: ${element.value}`)
//             }
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('form').addEventListener('submit', function (e) {
//         e.preventDefault();
//         inputs = document.querySelectorAll('input');
//         let request = new Request();
//         request.getInputs(inputs);
//     })
// })

import Request from "./export.js";

document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('form')
    let inputs = document.querySelectorAll("input[data-personal]");
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let inp = new Request();
        inp.getInputs(inputs);
    })
})