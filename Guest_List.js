"use strict";
let Guest_List = ['salman', 'ayaz', 'haris '];
// for (let i = 0; i < Guest_List.length; i++) {
// console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ');
// }   
let absent_Guest = 'ayaz';
let new_Guest = 'Muzammil';
Guest_List[1] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ')
//}
console.log(`Mr. ${absent_Guest} is not coming to the party `);
console.log('Good news! we find big table so we are inviting 3 more guest. ');
Guest_List.unshift('Riwan');
Guest_List.splice(2, 0, 'Qasim');
Guest_List.push('fareed');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ');
}
console.log('\nSorry we can not arrange big table, only two people will be  invite');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, Sorry sir you are not invite for dinner. `);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ', \n\n You are Still invited .\n\nThank You!\n\n ');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
