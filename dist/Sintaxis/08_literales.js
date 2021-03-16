"use strict";
let nombrePersona;
function process(browser) {
    console.log(browser + ' is a valid browser!');
}
// process('opera') // ERROR 'opera' no coincide con los tipos "chrome" | "firefox" | "edge"
// process('chrome');
function fight(difficulty) {
    console.log('Fight!!');
}
fight(1); // 2 | 3
// fight(5);Error
