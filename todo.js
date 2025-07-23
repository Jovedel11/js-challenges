// function contac (a, b) {
//   return a - b 
// }

// const { use } = require("react");

// console.log(contac(null, 0))

// console.log(9 + 8 + 12 + null + "sadas" + 9 + undefined + 9)

// console.log(false - 1)

// console.log(null - 1)
// x = 35
// console.log(x)
// let x = 80;
// x = 20;
// console.log(x)
// const y = 90;
// y = 100;
// console.log(y)
// var x = 100;
// var x = 102;
// console.log(x)
// var x = 105;
// a = 20
// console.log(a)
// var a;
// b = 30;
// console.log(b)
// let b;
// hi()
// var hi = function() {
//   console.log("dasdasd")
// }


// const a = 2;
// const b = 3;
// console.log(typeof a + b)

// precedence()

// function precedence () {

//   var a = 0;
//   let b = 2;
//   const c = 3;
//   const d = 4;
//   const f = 5 

//   if ("dada"){
//     var a = 1;
//     var k = 6
//   }

//   console.log(a + b ** c * d / f >> k)
// }

// Create a function that tests truthiness
// function testTruthiness(value) {
//     // Your logic here - determine if value is truthy/falsy
//     // Don't use Boolean() or !! - build the logic yourself
//     if (value) {
//       return "hello world"
//     }else {
//       return "Can't Hello"
//     }
// }

// // Test with these values:
// let testValues = [0, "", null, undefined, false, [], {}, "0", " ", NaN];

// console.log(testTruthiness(testValues[1]))

// function isFalsy(value) {
//     if (
//         value === false ||
//         value === 0 ||
//         value === "" ||
//         value === null ||
//         value === undefined ||
//         Number.isNaN(value)) 
//     {
//       return true;
//     }return false;
// }

// console.log(isFalsy(1))

// console.log(calculateGrade(80, 90, true))

// // Build a grade calculator with complex logic
// function calculateGrade(score, attendance, hasExtraCredit) {
//     // Rules:
//     // - Base grade from score (0-100)
//     // - Attendance < 70% = automatic F
//     // - Extra credit adds 5 points
//     // - 90+ = A, 80-89 = B, 70-79 = C, 60-69 = D, <60 = F
//     // - Perfect attendance (100%) upgrades grade by one level
    
//     // Build this logic step by step
//     let grade;

//     const getCredit = hasExtraCredit ? 5 : 0

//     let totalAttend = (attendance / 10) * 100;

//     let totalGrade = ((score + attendance) / 2) + getCredit;

//     if (totalAttend < 70){
//       return grade = "F"
//     }else if (totalAttend === 100) {
//       return totalGrade++
//     }

//     if (totalGrade > 89) {
//       return grade = "A"
//     }else if (totalGrade > 79) {
//       return grade = "B"
//     }else if (totalGrade > 69) {
//       return grade = "C"
//     }else if (totalGrade > 59) {
//       return grade = "D"
//     }else {
//       return grade = "F"
//     }
// }

// function attendance (total, attended) {
//   return total / attended 
// }

// console.log(attendance(8,10) * 100)

// function dasd() {
//   let hey;
//   function hello () {
//     return {
//       hey: "f",
//       message: `adadasda`
//     }
//   }
//   return hello()
// }

// console.log(dasd().message)

// const credit = 5;
// const score = 80;
// const attendance = 70
// let totalGrade = (score + attendance) / 2 + credit;
// console.log(totalGrade)

// let hasCredit = true
// const getCredit = hasCredit ? 5 : 0
// console.log(getCredit)


// // Pattern generator challenge
// function generatePatterns(n) {
//     // Generate these patterns for n=5:
    
//     // Pattern 1:
//     // *
//     // **
//     // ***
//     // ****
//     // *****
    
//     // Pattern 2:
//     // *****
//     // ****
//     // ***
//     // **
//     // *
    
//     // Pattern 3:
//     //     *
//     //    ***
//     //   *****
//     //  *******
//     // *********
    
//     // Build logic for each pattern
//     // This is for pattern 1
//     let incrementStar = ""
//     for (let i = n; i < 10; i++) {
//       console.log(incrementStar +="*")
//     } 

//     //This is for pattern 2
//     for (let i = 6; i >= 1; i--){
//       let star = "";
//       console.log('ako si column')
//       for (let j = 1; j <= i; j++){
//         star += "*"
//       }
//       console.log(star)
//     }

//     //This is for pattern 3
//     for (let i = 1; i <= n; i++) {
//     let line = "";

//     // Add spaces
//     for (let s = 1; s <= n - i; s++) {
//       line += " ";
//     }

//     // Add stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//       line += "*";
//     }

//     console.log(line);
//   }
// }

// generatePatterns(5)

// for (let i = 0; i < 10; i++) {
//   let star = "*"
//   console.log(i)
//   for (let j = 0; j < 5; j++){
//     console.log(star)
//     console.log(j)
//   }

// }

// for(let i = 1; i <= 5; i++){
//   let star = ""
//   for(let j = 1; j <= i; j++){  
//     star += '*'
//   }
//   console.log(star)
// }


// function outer (age) {
//   let jov = 21;
//   const order = 'want some pizza'
//   function inner (ages) {
//     let nads = jov + age;
//     const equal = nads + ages
//     return {
//       equal,
//       order
//     }
//   }
//   return inner
// }

// const gotoInner = outer(20)
// const result = `My ${gotoInner(20).equal} customer ${gotoInner().order}`
// console.log(result)

// function makeAnTitle (excep, activity, doing, ...things) {
//   if (doing) {
//     const act = things.find(thing => thing === activity)
//     return `is it true that your activity is ${act}`
//   }

//   return excep(activity)
// }

// const except = (act) => {
//   return `Oh so your doing now is ${act}`
// }

// const doing = ["Sleeping", "Coding", "Running"]
// console.log(makeAnTitle(except, "Sleeping", true, ...doing))

// Write a function called myFilter that takes an array and a test function and returns a new array with only elements that pass the test.

// function myFilter(arr, testFn) {
//   let container = []
//   for (let num of arr) {
//     if (testFn(num)) {
//       container.push(num)
//     }
//   }
//   return container
// }

// const numbers = [1, 2, 3, 4, 5];

// const even = myFilter(numbers, function (num) {
//   return num % 2 === 0;
// });

// console.log(even); // [2, 4]

// const evenNum = numbers.filter(number => number % 2 === 0);
// console.log(evenNum)

// function takeAction (number, camera) {
//   let ray = []
//   const pic = camera()
//   return number
// }

// const example = takeAction([1, 2, 3, 4, 5],function (...n) {
//   return `Aray ${n}`
// })

// console.log(example)

// function getEven(arrayOfNum) {
//   return arrayOfNum % 2 === 0;
// }

// const numbers = [1, 2, 3, 4];
// const num = 2

// console.log(getEven(num))

// function greetWithName(name) {
//   function greetings(greet) {
//     return `${greet} ${name}`
//   }
//   return greetings
// }

// const sayHi = greetWithName("Jovedel");
// console.log(sayHi("Good morning")); // "Good morning, Jovedel!"

// //Write a function combineArguments that accepts one required item and an unlimited number of rest items. Return a full sentence showing what’s being done:

// console.log(combineArguments("Jovedel", "eating", "coding", "reading",))

// function combineArguments(name, ...activity) {
//   let newAct = activity.join(", ")
//   return `${name} is doing: ${newAct}`
// }

// Output:
// "Jovedel is doing: eating, coding, reading"

// console.log('nadine' + undefined) // nadineundefined
// console.log(3 + 2 + 5 + "String" + 3 + 2) //  10String32

// CHALLENGE: Fix the following code and explain why it breaks
// console.log(sayHello("Alice")); // Should work

// function sayHello(name) {
//     return `Hello, ${name}!`;
// }

// const sayGoodbye = function(name) {
//     return `Goodbye, ${name}!`;
// };
// console.log(sayGoodbye("Bob")); 

// // BONUS: Create a function that demonstrates the difference between
// // function declarations and expressions in terms of hoisting
// console.log(hoisted())

// function hoisted() {
//   return `Can call in global or local`
// }

// console.log(hoisted())

// const notHoisted = function(fn) {
//   return `This is not hoisted and i can call hoisted
//   becasue that is global function ${fn()}`
// }

// console.log(notHoisted(hoisted))

// const calculator = {
//     value: 0,
//     add: (num) => {
//       this.value += num
//       return this
//     },
//     multiply: (num) => {
//       this.value *= num
//       return this
//     },
//     getValue: (num) => {
//       this.value;
//     }
// };

// // const thisWord = calculator.add;
// // console.log(thisWord())

// console.log(calculator.add(20))
// console.log(calculator.multiply(20))
// console.log(calculator.getValue())
// console.log(calculator.value)

// console.log(namedFunction(10, 40, 51))

// const namedFunction = function insideThis(age, weight, height) {
//   return ((height + weight) / 2) + age
// }

// console.log(namedFunction(10, 40, 51))

// CHALLENGE: Debug this recursive function and explain why naming helps
// const gagokaninapakodito = function thisFunction(n) {
//     if (n <= 1) return 1;
//     return n * thisFunction(n - 1); // What happens if we change the variable name?
// };

// console.log(gagokaninapakodito(5))

// // BONUS: Create a function that demonstrates the benefits of named functions
// // in error stack traces and debugging

// const callAgain = function equal(number) {
//   if (number <= 1) return 1
//   return number * equal(number - 1)
// }

// console.log(callAgain(5))

// const debug = 'dasdasda'

// CHALLENGE: Fix the following code so all methods work correctly
// const gamePlayer = {
//     name: "Player1",
//     score: 0,
    
//     addPoints: function(points) {
//         this.score += points;
//         console.log(`${this.name} now has ${this.score} points`);
//     },
    
//     addPointsAsync: function(points, delay) {
//         setTimeout(() => {
//             this.addPoints(points); // Fix this
//         }, delay);
//     },
    
//     reset: function() {
//       const returnedScrore = () => {
//         this.score = 0; // Fix this
//         console.log(`${this.name} score reset`);
//       }
//       return returnedScrore()
//     }
// };

// console.log(gamePlayer.addPoints(5))
// console.log(gamePlayer.addPointsAsync(10, 1000))
// console.log(gamePlayer.reset())

// BONUS: Create examples showing 'this' behavior with call(), apply(), and bind()

// console.log(typeof mystery1);
// console.log(typeof mystery2);
// console.log(typeof mystery3);

// var mystery1 = function() { return "I'm mystery1"; };
// function mystery2() { return "I'm mystery2"; }
// const mystery3 = () => "I'm mystery3";

// CHALLENGE: Fix the following code to make it work as intended
// function createCounters() {
//     let counters = [];
    
//     for (let i = 0; i < 3; i++) {
//         counters.push(function() {
//           return i 
//         });
//     }
    
//     return counters;
// }

// const counters = createCounters();
// console.log(counters[0]()); // Should be 0
// console.log(counters[1]()); // Should be 1
// console.log(counters[2]()); // Should be 2

// BONUS: Create a practical module pattern using closures

// function user (name, password, email) {
//   let userInfo = []
//   const profile = {
//     name: name,
//     password,
//     email
//   }
//   function otherInfo (age, ...infos) {
//     if (profile) {
//      return userInfo.push(name, password, email, age, ...infos)
//     }
//   }
//   return {
//     addInfo: otherInfo,
//     profileInfo: () => {
//       return userInfo.reduce((acc, currentVal) => {
//         acc[currentVal] = currentVal
//         return acc[currentVal]
//       }, {})
//     }
//   }
// }

// const profile = user('jovedel', 'password', 'jovedel@gmail.com')
// profile.addInfo(21, "dada", "adasd")
// const printThs = profile.profileInfo()
// console.log(printThs)

// function showArguments() {
//     console.log(arguments); // Array-like object
//     console.log(arguments.length);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// showArguments('dasda', 'dasdas', 'dsss')

// const showArguments = () => {
//     console.log(arguements)
// }

// showArguments("asdadasd")

// function showArguments(...args) {
//     let userProfile = []
//     const profile = {
//         name: 'jov',
//         age: '21',
//         date:() => {
//             const result = args.reduce((acc, cur) => {
//                 acc[cur] = cur
//                 return cur
//             })
//             userProfile.push(result)
//             return result
//         },
//         user: function () {
//             userProfile.push(profile)
//             return profile
//         }
//     }
//     return {
//         userInfo: profile.user(),
//         userProf: userProfile
//     }
// }

// const usersProfile = showArguments('nads', 'jov')
// console.log(usersProfile.userInfo)
// console.log(usersProfile.userProf)
// let accounts = [];

// function createAccount (name, email, ...hobbies) {
//     const user = {
//         id: crypto.randomUUID(),
//         name: name,
//         email: email,
//         hoobie: hobbies,
//         getSummary: function () {
//             return `User ${this.id.slice(0, 4)}: ${this.name} with email ${this.email} enjoys: ${this.hoobie.join(", ")} `
//         }
//     }
//     accounts.push(user)
//     return {
//         account: accounts, 
//         users: user.getSummary()
//     }
// }

// const userAccount = createAccount('jovedel', 'jove@example.com', 'coding', 'biking')
// const usersAccount = createAccount('nads', 'nads@example.com', 'bike', 'design')
// console.log(userAccount.account)
// console.log(userAccount.users)
// console.log(usersAccount.account)
// console.log(usersAccount.users)

// console.log(accounts)

// function createUser(name) {
//   let email = "";
//   let hobbies = [];

//   function setEmail(newEmail) {
//     email = newEmail;
//   }

//   function addHobby(...hobby) {
//     hobbies.push(...hobby);
//   }

//   function removeHobby (notHobby) {
//     if (!notHobby) return;
//     hobbies = hobbies.filter(hobby => hobby !== notHobby)
//   }

//   function getProfile() {
//     return {
//       id: crypto.randomUUID(),
//       name,
//       email,
//       hobbies: [...hobbies]
//     };
//   }

//   return {
//     setEmail,
//     addHobby,
//     getProfile,
//     removeHobby
//   };
// }

// const user = createUser('Jovedel')
// user.setEmail('jove@example.com')
// user.addHobby('coding', 2, 'user')
// user.removeHobby('coding')
// console.log(user.getProfile())

// CHALLENGE: Create a flexible function that can handle different argument patterns
// function flexibleFunction(message = 'hello') {
//     // Should handle:
//     // flexibleFunction("hello") → "hello"
//     // flexibleFunction("hello", "world") → "hello world"
//     // flexibleFunction({message: "hello", times: 3}) → "hello hello hello"
//     // flexibleFunction(["hello", "world"]) → "hello world"
//     let container = []
//     function greet (world = 'world') {
//         return `${message} ${world}`
//     }

//     function objectGreet ({ word, times}) {
//         for (let i = 0; i < times; i++) {
//             container.push(word)
//         }
//     }

//     function combine (...word) {
//         const combineWord = [...word].join(" ")
//         return combineWord
//     }
//     return {
//         objectGreet,
//         container,
//         greet,
//         combine,
//         message
//     }
// }

// const flexible = flexibleFunction("hello")
// const mess = flexible.message
// const forGreet = flexible.greet('world')
// flexible.objectGreet({ word: 'hello', times: 3 })
// const forString = flexible.combine(["hello", "world"])
// console.log(mess)
// console.log(forGreet)
// console.log(flexible.container.join(" "))
// console.log(forString)



// BONUS: Create a function that validates its arguments and throws
// meaningful errors for invalid inputs

// function objectGreet ({ word, times}) {
//     let arr = []
//     for (let i = 0; i < times; i++) {
//         arr.push(word)
//     }
//     arr.toString()
//     return arr.join(' ')
// }

// console.log(objectGreet({ word: 'hello', times: 4 }))


// function flexibleFunction(...args) {
//   let result = "";

//   const first = args[0]

//   if (typeof first === 'string') {
//     result = args.join(' ')
//   }
//   else if (typeof first === 'object' && !Array.isArray(first)) {
//     const { message = ' ', times = 1  } = first;
//     result = Array(times).fill(message).join(" ")
//   }
//   else if (Array.isArray(first)){
//     result = first.join(' ')
//   }

//   return result;
// }

// console.log(flexibleFunction({ message: 'hello', times: 5 }))
// console.log(flexibleFunction(['sdad', 'dsadad']))


// function createRepeatString(value, times) {
//     return Array(times).fill(value).join(" ")
// }
// // 1. Turn this into: "repeat repeat repeat"
// console.log(createRepeatString("repeat", 3))

// // 2. Check if input is array or not
// console.log(checkIfArray(["a", "b", "c"]) ) // true
// console.log(checkIfArray("abc") )          // false

// function checkIfArray (input) {
//     return Array.isArray(input)
// }

// function smartJoin (...args) {
//     let oneArray;
//     if(Array.isArray(args)){
//         oneArray = args.flat(Infinity).filter(arg => {
//             return typeof arg === 'string'
//         })
//     }
//     return oneArray.join(" ")
// }

// console.log(smartJoin("hello", ["world", "nice"], 123, null, ["chat", ["GPT", "rocks"]]));
// console.log(smartJoin("hi", true, ["there"], { a: 1 }, undefined));

// function flexibleSentenceBuilder(...args) {
//     const last = args.at(-1)
//     const { end = "!" } = last || {}

//     if (typeof last === 'object' && (end.includes('!') || end.includes('?'))) {
//         args.push(end)
//     }
//     return args
//         .flat(Infinity)
//         .filter(keep => typeof keep === 'string')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(0))
//         .join(' ')
// }

// console.log(flexibleSentenceBuilder("hello", "world"))
// // → "Hello world."

// console.log(flexibleSentenceBuilder(["hello", "WORLD"]))
// // → "Hello world."

// console.log(flexibleSentenceBuilder({ words: ["gOoD", "MoRnIng"], end: "!" }))
// // → "Good morning!"

// console.log(flexibleSentenceBuilder({ words: ["I", "Love", "JAVASCRIPT"] }))
// // → "I love javascript."

// console.log(flexibleSentenceBuilder("HELLO", 123, false, "FRIENDS"))
// → "Hello friends."

// const letters = ['Hello', 'World']
// const lower = letters.join(" ")
// const sentece = lower.split(" ").map(sente => sente.charAt(0).toUpperCase() + sente.slice(1).toLowerCase()).join(" ")
// console.log(sentece)

// CHALLENGE: Create a function that returns different types based on input
// function smartCalculator(operation, a, b) {
//     // Return number for valid operations
//     // Return string for error messages
//     // Return function for complex operations
//     // Return object for detailed results
//     switch (operation){
//         case "add":
//             return a + b
//         case "divide": 
//             if (b === 0) return `Error: Division by zero`
//             return a / b
//         case "power": 
//             return function(exponent){
//                 return Math.pow(a, exponent)
//             }
//         case "detailed":
//             return {
//                 result: a + b,
//                 operation: 'addition',
//                 operands: [a,b]
//             }
//     }
// }

// console.log(smartCalculator('add', 5, 3))  //8
// console.log(smartCalculator('divide', 2, 0)) //Error: Division by zero
// const power = smartCalculator('power', 2) 
// const print = power(2)
// console.log(power) //function(exponent) { return Math.pow(2, exponent); }
// console.log(print) // 4
// console.log(smartCalculator('detailed', 10, 3))

// Examples:
// smartCalculator("add", 5, 3) → 8
// smartCalculator("divide", 5, 0) → "Error: Division by zero"
// smartCalculator("power", 2) → function(exponent) { return Math.pow(2, exponent); }
// smartCalculator("detailed", 10, 3) → {result: 13, operation: "addition", operands: [10, 3]}

// CHALLENGE: Create a generic event system using callbacks
// class EventEmitter {
//     constructor(name, age, user) {
//         // Initialize your event system
//         this.name = name;
//         this.age = age;
//         this.user = user;
//     }
    
//     on(eventName, callback) {
//         console.log(`${eventName}:`)
//         return callback(this.name)
//     }
    
//     emit(eventName, data) {
//         const { name } = data
//         console.log(`${eventName}: Welcome ${name}`)
//     }
    
//     off(eventName, callback) {
//         console.log(`${eventName}:`)
//         callback(this.name, this.age)
//     }
// }
// function createEventEmitter() {
//   const events = {};

//   function on(eventName, callback, priority = 0) {
//     if (!events[eventName]) events[eventName] = [];
//     events[eventName].push({ callback, once: false, priority });
//     events[eventName].sort((a, b) => b.priority - a.priority);
//   }

//   function once(eventName, callback, priority = 0) {
//     if (!events[eventName]) events[eventName] = [];
//     events[eventName].push({ callback, once: true, priority });
//     events[eventName].sort((a, b) => b.priority - a.priority);
//   }

//   function emit(eventName, data) {
//     if (!events[eventName]) return;

//     events[eventName] = events[eventName].filter(listener => {
//       listener.callback(data);
//       return !listener.once;
//     });
//   }

//   function off(eventName, callback) {
//     if (!events[eventName]) return;
//     events[eventName] = events[eventName].filter(listener => listener.callback !== callback);
//   }

//   // Return all the methods
//   return { on, once, emit, off };
// }


// const emitter = createEventEmitter();

// function sayHello(user) {
//   console.log(`Hello, ${user}`);
// }

// function oneTimeWelcome(user) {
//   console.log(`(once) Welcome, ${user}`);
// }

// emitter.on('login', sayHello);
// emitter.once('login', oneTimeWelcome, 10); // higher priority

// emitter.emit('login', 'Nadine');
// // Output:
// // (once) Welcome, Nadine
// // Hello, Nadine

// emitter.emit('login', 'Nadine');
// // Output:
// // Hello, Nadine

// emitter.off('login', sayHello);
// emitter.emit('login', 'Nadine');
// Output: (no output)

// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango']
// console.log(myForEach(fruits, (_array, _index, element) => {
//   const ul = document.createElement('ul')
//   const li = document.createElement('li')
//   li.textContent = element
//   ul.appendChild(li)
//   document.querySelector('.custom').appendChild(ul)
// }))

// function myMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
//   return result;
// }

// const numbers = [1,2,3,4,5]

// console.log(myMap(numbers, (elements) => {
//   return elements % 2 === 0
// }))

// Assigning functions to variables
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Storing functions in arrays
const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
];

// Storing functions in objects
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

// Passing functions as arguments
function operate(operation, a, b) {
    return operation(a, b);
}

console.log(operate(calculator.add, 5, 3)); // 8

// Returning functions from functions
function createValidator(rule) {
    return function(value) {
        return rule(value);
    };
}

const isPositive = createValidator(n => n > 0);
const isEven = createValidator(n => n % 2 === 0);
















