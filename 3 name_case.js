"use strict";
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = '';
personName = prompt('whist is your Name ?') || '';
let uppercase = personName.toUpperCase();
let lowercase = personName.toLowerCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)
    .toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your namre in:
    LowerCase: ${lowercase}
    UperCase : ${uppercase} 
    TitleCase: ${titlecase}`);
}
else {
    alert('please fill your name ! ');
}
;
