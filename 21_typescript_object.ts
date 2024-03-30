//write a program that creat objects a contanning these items.
let person_Name :string ='Muzammil';

//datatypes of person object.
interface person {
    age : number ,
    name : string,
    nationality : string,
    Student : boolean
}
//person object.
let person :person = {
    age :19 ,
    name :'Muzammil',
    nationality :'Pakistani',
    Student :true,
}
console.log(person);

// datatyepes of car object.
interface car {
    maker :string,
    color :string,
    atometic :boolean,
}
  //car object.
let car ={
    maker :'suzuki',
    color :'white',
    atometic: true
}
console.log(car);

