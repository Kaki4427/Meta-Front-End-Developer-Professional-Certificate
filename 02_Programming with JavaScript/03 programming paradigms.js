function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

var virtualPet = {
    sleepy: true,
    nap: function() {}
}

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

// var myDog = Object.create(Animal)
// var myDog = new Animal()
//
// console.log (Animal)

"abc".toUpperCase();

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}

"abc".concat("def"); // 'abcdef'

["abc"].concat(["def"]); // ['abc', 'def']

["abc"] + ["def"]; // ["abcdef"]

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

let apple = new String("apple");
console.log(apple); // --> String {'apple'}

"abcd".match(/d/); // null
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

class A {
    constructor(lg) {
        this.legs = lg;
    }
}

class B extends A {
    constructor() {
        super(4);
    }
}

var result = new B();
console.log(result.legs);

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

bestBoxers.get(1); // 'The Champion'

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

const fruit = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruit, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// DOM
let answer = prompt('What is your name?');

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})

var h1 = document.querySelector('h1')
var arr = [
'Example Domain',
'First Click',
'Second Click',
'Third Click'
]

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}

h1.addEventListener('click', handleClicks);