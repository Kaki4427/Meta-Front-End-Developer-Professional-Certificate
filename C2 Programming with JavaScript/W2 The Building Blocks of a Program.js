function addTwoNums1() {
    var a = 10;
    var b = 20;
    var c = a+b;
    console.log(c);
}
addTwoNums1();

function addTwoNums2(a,b) {
    var c = a + b;
    console.log(c);
}
addTwoNums2(2,2)

var colors = ["red", "blue", "green", "yellow"];

//function that takes an array as input and display all items of this array
function listArrayItems1(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems1(colors);

function listArrayItems2(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
listArrayItems2(colors);

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", 't')

 //creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);//display the object in the developer console

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

fruits.pop();
console.log(fruits); // ['apple']

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

var simpleArr = arrayBuilder('apple', 'pear', 'plum');

console.log(simpleArr); // ['apple','pear','plum']
Math.PI
Math.E
Math.LN2

"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
greet = 'Hello';
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

var letters = 'abc';
console.log(letters.match(/a/))
console.log(letters.match(/d/))

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")

var str = "Hello";
console.log(str.match("jello"));

try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
