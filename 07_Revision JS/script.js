
// Array : 

// array is type of variable that can hold multiple values at a time.

// Creating an array
// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// it start with index 0 and last index is length-1

// memory allocation is dynamic 

// In JavaScript, memory allocation is generally non-contiguous, but modern engines use contiguous allocation for specific performance optimizations

// we can store data in array of any type

// let mixedArray = [42, "Hello", true, null, { name: "John" }, [1, 2, 3]];


// Array Methods : 

// push()
// pop()
// shift
// unshift
// indexOf
// concat
// filter
// slice & splice
// Map
// reduce
// forEach
// reverse
// at
// sort
// find
// split
// spread
// sizeOf

// const numbers = new Array(10, 20, 30, 40);

// console.log(numbers)

// console.log(typeof numbers)

// like cpp , in javascript pointer concept is not there but we can think array variable as pointer to first element of array

// const numbers = new Array(10, 20, 30, 40);

// console.log(numbers)
// console.log(numbers[2])

// for(let element of numbers){
//     console.log(element)
// }

// for(let element in numbers){
//     console.log(numbers[element]);
// }


// numbers[0] = 600;

// console.log(numbers)

// const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'];
// cities.push('Hyderabad');
// cities.pop(); // Removes 'Hyderabad'

// console.log(cities)
// cities.shift(); // Removes 'Delhi'
// console.log(cities)
// cities.unshift('Pune');
// console.log(cities)
// console.log(cities.length); // 4

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// cities.forEach(function(city) {
//   console.log(city);
// });


// let person = {
//   username: 'Rajesh Kumar',
//   age: 28,
//   city: 'Delhi',
//   occupation: 'Engineer',
//   greet : ()=>{
//     // console.log("Namashte");
//     // return "Namaste";
//     // return `${this}`

//     console.log(`Your name is : ${this.username}`)
//   }
// };

// // console.log(person.greet())
// person.greet()



// let person = {
//   username: 'Rajesh Kumar',
//   age: 28,
//   city: 'Delhi',
//   occupation: 'Engineer',
//   greet : function() {
//     // console.log(`Your name is : ${this.username}`)
//     console.log(`Your name is : ${this.age}`)
//     // console.log(`Your name is : ${this}`)
//   }
// };

// person.greet()



// let person = {
//   username: 'Rajesh Kumar',
//   age: 28,
//   city: 'Delhi',
//   occupation: 'Engineer',
//   greet : function() {
//     // console.log(`Your name is : ${this.username}`)
//     console.log(`Your name is : ${this.age}`)
//     // console.log(`Your name is : ${this}`)
//   }
// };

// console.log(person)
// person.country = 'India';
// console.log(person)
// person.country = 'Russia';
// console.log(person)
// delete person.country;
// console.log(person)


// const student = new Object();
// student.name = 'Amit';
// student.age = 21;

// console.log(student)

// let fruits = ['apple', 'banana'];
// let moreFruits = ['cherry', 'mango'];

// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);  

// console.log(fruits)

// let someFruits = allFruits.slice(1, 3);  // From index 1 to 2
// console.log(someFruits);  // ['banana', 'orange']



// let someFruits = allFruits.splice(1,2,"abc","sd");
// console.log(someFruits); 

// console.log(allFruits)


// let someFruits = allFruits.splice(1,0,"abc","sd");
// console.log(someFruits); 

// console.log(allFruits)

// let someFruits = allFruits.splice(1,1);
// console.log(someFruits); 

// console.log(allFruits)


// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);  // [2, 4, 6, 8]

// console.log(numbers)


// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);  // [2, 4]

// let sum = numbers.reduce((acc, num) => acc * num);
// console.log(sum);  // ?

// let firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);  // 2
// let fruits = ['apple', 'banana'];
// console.log(fruits.includes('banana'));  // true
// console.log(fruits.includes('grape'));   // false


//  let fruits = ['apple', 'banana'];
//  console.log(fruits)
//  console.log(typeof fruits)

//  let result = fruits.join("->");

//  console.log(result)
//  console.log(typeof result)


// let username ="Pawan";

// let result = username.split('');

// console.log(result)


// let arr = [12,34,56,7,89,90];

// // let data = arr.toSorted((a,b)=>a-b);
// // let data = arr.toSorted((a,b)=>b-a);
// let data = arr.sort((a,b)=>b-a);

// console.log(data);


// let arr = [12,34,56,7,89,90];

// console.log(arr.reverse())
// console.log(arr.toReversed())

//  let arr = [123,34,56,7,89,90];

//  let data = arr.findIndex((num)=> num%2 === 0);

//  console.log(data)

// const person = { name: 'Rajesh', age: 28 };
// let keys = Object.keys(person);
// console.log(keys);  // ['name', 'age']

// let values = Object.values(person);
// console.log(values);  // ['Rajesh', 28]

// let entries = Object.entries(person);
// console.log(entries);  // [['name', 'Rajesh'], ['age', 28]]

// let properties = Object.getOwnPropertyNames(person);
// console.log(properties);  // ['name', 'age']


// function sumAll(...numbers) {
// console.log(numbers)
// }

// // sumAll(1, 2)        
// sumAll(1, 2, 3, 4, 5)


// let arr = [12,45,67,89];

// console.log(arr)
// console.log(...arr)

// let arr1 = [12,45,67,89];

// let arr2 = arr1;

// console.log(arr2)

// arrays are objects (non-primitive types), and when you use the assignment operator (=), you are not copying the actual data. Instead, you are copying the memory address (the reference) to where that array is store

// 1. Shallow Copy : 

// Spread Operator (...): The most popular and modern method

// let arr1 = [12,45,67,89];

// let arr2 = [...arr1];

// console.log(arr2)

// Array.slice(): A classic, highly performant method

// let arr2 = arr1.slice();

//Array.from(): Creates a new array instance from an existing one.

// let arr2 = Array.from(arr1);


// let arr1 = [{a: 1}, 2];

// let arr2 = [...arr1];

// arr2[0].a = 99; 

// console.log(arr1[0].a);


// Output: 99 (दोनों बदल गए क्योंकि अंदर वाला Object अभी भी same 'Reference' ko target kr raha है)

// 2. Deep Copy : 

// डीप कॉपी में पूरी तरह से नया रेफरेंस क्रिएट होता है, चाहे एरे कितना भी गहरा (nested) क्यों न हो।
// यह ओरिजिनल एरे के हर लेवल की एक नई कॉपी बनाता है।
// इसमें arr1 और arr2 का आपस में कोई संबंध नहीं रहता।


// let arr1 = [{a: 1}, 2];
// let arr2 = structuredClone(arr1); 

// arr2[0].a = 99;

// console.log(arr1[0].a); 


// let arr1 = [12,34,56];
// let arr2 = [45,78,90];

// let arr3 = [...arr1,...arr2];

// console.log(arr3)

// let obj1 = {
//     username:"Pawan Maurya",
//     age:25
// };

// let obj2 = {
//     salary : 9999,
//     subject:"Full Stack"
// };


// let obj3 = {...obj1,...obj2};

// console.log(obj3);

// let obj1 = {
//     username:"Pawan Maurya",
//     age:25
// };

// let obj2 = {...obj1};

// console.log(obj2)


// let obj1 = {
//     username:"Pawan Maurya",
//     age:25,
//     obj2 : {
//     salary : 9999,
//     subject:"Full Stack"
//     }
// };

// let obj3 = {...obj1};

// console.log(obj3)

// Note : obj3 is a Shallow Copy of obj1.
// While obj1 and obj3 are different objects at the top level, the nested object obj2 still points to the exact same reference in both.

// const obj1 = {
//     username: "Pawan Maurya",
//     details: { salary: 9999, subject: "Full Stack" }
// };

// // Create a deep copy
// const obj2 = structuredClone(obj1);

// obj2.details.salary = 5000;
// console.log(obj1.details.salary); // Output: 9999 (Original is safe)


// [12,36,45,89]
//                     => [...arr1,...arr2] => [12,36,45,89,69,36,78,49,78]
// [69,36,78,49,78]

// arr2 = arr1

// let arr1 = [69,36,78,49,78];

// let [a,b,c,d,e] = arr1;

// console.log(a);

// let arr1 = [69,36,78,49,78];

// let [a,,,,e] = arr1;

// console.log(a);
// console.log(e);


// let obj1 = {
//     username:"Pawan Maurya",
//     age:30,
// }

// let {username,age} = obj1;

// console.log(username)
// console.log(age)