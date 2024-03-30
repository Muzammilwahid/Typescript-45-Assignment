"use strict";
// Write a function called make_shirt() that accepts a size and the 
// text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, text) {
    console.log(`The size of the shirt is ${size} and the message is ${text}`);
}
make_shirt('large', 'hello world');
make_shirt('medium', 'hello world');
make_shirt('small', 'hello world');
