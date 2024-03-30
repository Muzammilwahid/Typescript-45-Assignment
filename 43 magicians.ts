// Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will 
// be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of 
// the original names and one array with the Great added to each magician’s name.

let magician: string[] = ["Harry Houdini", "David Blaine", "Teller"];

function copy_arry (arr:string []) {
    return[...arr]
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}   
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
} 

const copyMagiciansarry = copy_arry(magician);

make_great(magician);

console.log("this is my orignal arry")

show_magicians(magician);

console.log("this is my modified copy arry")

show_magicians(copyMagiciansarry);



