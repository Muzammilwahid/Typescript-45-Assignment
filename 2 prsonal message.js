"use strict";
//Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = '';
personName = prompt('what is yor name?');
if (personName !== null && personName != '') {
    alert(`“Hello ${personName}, would you like to learn some Python today?`);
}
else {
    alert('you have to fill your name !');
}
