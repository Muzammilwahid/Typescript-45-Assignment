//Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician: string[] = ["Harry Houdini", "David Blaine", "Teller"];

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
} 
show_magicians(magician);

