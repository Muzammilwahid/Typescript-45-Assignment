"use strict";
// Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["banana", "apple", "orange"];
if (favorite_fruits.includes("banana")) {
    console.log("i really like bananas!");
}
else if (favorite_fruits.includes("apple")) {
    console.log("i really like apples!");
}
else if (favorite_fruits.includes("orange")) {
    console.log("i really like oranges!");
}
else if (favorite_fruits.includes("strawberry")) {
    console.log("i really like strawberries!");
}
else if (favorite_fruits.includes("mango")) {
    console.log("i really like mangos!");
}
