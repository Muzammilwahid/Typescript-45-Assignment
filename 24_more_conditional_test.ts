//Tests for equality and inequality with strings 
console.log("Equality test with string:", "Banana" === "Banana");
//Tests for equality and inequality with strings 1
console.log("inequality with strings:", ("Apple" as string) != "mango");

//Tests using the lower case function 2
console.log("lower case function test:", "HEllo".toLowerCase() === "hello");

//Numerical tests involving equality , 3
console.log("Equality test with number:", 12 === 12);
//Numerical tests involving inequality , 
console.log("inequality test with number:", (12 as number) != 20 ); 

//greater than test less than test
console.log("Greater than test", 12 > 6 );
//less than test
console.log("less than test", 6 < 12 );

// greater than or equal to test 
console.log("Greater than equal to test", 10 <= 10);
// less than or equal to test
console.log("less than equal to test", 6 <= 12);

//Tests using "and" and "or" operator 4
console.log("and oprator test", 5===5 && 10 > 5);
//Tests using "and" and "or" operator
console.log("and oprator test", 5===5 || false);

//Test whether an item is in a array 5
const fruite :string [] =['banana', 'mango', 'apple'];
console.log('test "banana"  in the arry: ', fruite.includes("banana") );
//Test whether an item is not in a array6
console.log('test "apple"  in the arry: ', !fruite.includes("nashpati") );




