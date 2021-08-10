/*
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
*/
const volumeOfBox = (sizes) => {
    // sizes.width;
    // sizes.height;
    // sizes.length;

    return sizes.width * sizes.length * sizes.height;

};

const sizes = {
    width: 2,
    length: 5,
    height: 3,

}
console.log(volumeOfBox(sizes));


/*
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

Examples
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
*/

const cityFacts = (city) => `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;


const city = {
    name: 'Paris',
    population: "2,140,526",
    continent: "Europe",

}

console.log(cityFacts(city));

/*
Write a function that returns true if a hash contains the specified key, and false otherwise.

Examples
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
*/

// const hasKey = (obj, key) => {

//     if (obj.includes(key)) {
//         return true;

//     } else {
//         return false;
//     }
// }

// const obj = [
//     { craves: true, midnight: true, snack: true },
// ];
// let key = "morning";
// console.log(hasKey(obj, obj[0].key));


const hasKey = (obj, key) => {
    return obj.hasOwnProperty(key);
}

console.log(hasKey({ craves: true, midnight: true, snack: true }, "midnight"));


/*
You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

Examples
profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) ➞ 44030
Notes
Assume all inventory has been sold.
Profit = Total Sales - Total Cost
*/

const calcProfit = profit => Math.round((profit.sellPrice - profit.costPrice) * profit.inventory);


const profit = {
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
};
console.log(calcProfit(profit)); //32411

/*
In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

weight on planetA / gravitational force of planetA * gravitational force of planetB

Planet	m/s²
Mercury	3.7
Venus	8.87
Earth	9.81
Mars	3.711
Jupiter	24.79
Saturn	10.44
Uranus	8.69
Neptune	11.15
Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

Examples
spaceWeights("Earth", 1, "Mars") ➞ 0.38

spaceWeights("Earth", 1, "Jupiter") ➞ 2.53

spaceWeights("Earth", 1, "Neptune") ➞ 1.14
*/

const spaceWeights = (planetA, weight, planetB) => {

    const planet = {
            Mercury: 3.7,
            Venus: 8.87,
            Earth: 9.81,
            Mars: 3.711,
            Jupiter: 24.79,
            Saturn: 10.44,
            Uranus: 8.69,
            Neptune: 11.15,
        }
        //use second way to access properties.
    return ((weight / planet[planetA]) * planet[planetB]).toFixed(2);
}

console.log(spaceWeights("Earth", 1, "Mars")); //0.38


/*
Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
Write a function that takes in a name and returns a name tag, that should read:

"Hi! I'm [name], and I'm from [country]."
If the name is not in the object, return:

"Hi! I'm a guest."
Examples
greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest."
*/

const greeting = (name) => {

    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }

    if (GUEST_LIST.hasOwnProperty(name)) {
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}`;
    } else {
        return `Hi! I'm a guest.`;
    }

}

console.log(greeting("Randy")); //Hi! I'm Randy, and I'm from Germany


let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

/*
Use the above object for the following exercises:
​
- Write the command to add the language "Go" to the end of the languages array.
- Change the difficulty to the value of 7.
- Using the delete keyword, write the command to remove the jokes key from the programming object.
- Write the command to add a new key called isFun and a value of true to the programming object.

*/

console.log(programming);

//- Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages); //[ 'JavaScript', 'Python', 'Ruby', 'Go' ]

//- Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);

//- Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

const students = {
    id: 79979,
    firstName: 'David',
    latName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 86,


    },
    average: (this.midterm + this.final) / 2, //exams is not defined

}
console.log(students);

const hosting = [{ monnthly: { basic: 3445, profess: 5.99 } },
    { diskSpace: { basic: 88, profess: 345 } },
    { dataTransfer: { basic: 343, profess: 34 } },
];

console.log(hosting[0].monnthly.basic);
console.log(hosting[2].dataTransfer.profess);


///////////////////////////////\\\   SECOND DAY   \\\//////////////////////////////


/*
1.Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
*/

const vote = {
    upvotes: 13,
    downvotes: 0,
    getVoteCount() {
        return this.upvotes - this.downvotes;
    }
}
console.log(vote.getVoteCount()); //13

/*
2. The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

Examples
fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
*/

const fiftyThirtyTwenty = income => {
    let obj = {
        Needs: income * 0.5,
        Wants: income * 0.3,
        Savings: income * 0.2,
    };

    //OTHER OPTION:
    //let obj={};
    // obj.Needs = income * 0.5;
    // obj.Wants = income * 0.3;
    // obj.Savings = income * 0.2;
    return obj;
}

console.log(fiftyThirtyTwenty(80000)); //{ Needs: 40000, Wants: 24000, Savings: 16000 };



/*
3. Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

Person	Relation
Darth Vader	father
Leia	sister
Han	brother in law
R2D2	droid
Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."

relationToLuke("Leia") ➞ "Luke, I am your sister."

relationToLuke("Han") ➞ "Luke, I am your brother in law."

*/

const relationToLuke = (name) => {
    let family = {
        person: "Luke",
        Darth_Vader: "father",
        Leia: "sister",
        Han: "brother in law",
        R2D2: "droid",

    }
    return `${family.person}, I am your ${family[name]}`;

}

console.log(relationToLuke("Leia")); //Luke, I am your sister



// SECOND OPTION : to create method inside the object.
let family2 = {
    person: "Luke",
    Darth_Vader: "father",
    Leia: "sister",
    Han: "brother in law",
    R2D2: "droid",
    relationToLuke2(name) {
        return `${this.person}, I am your ${this[name]}`;
    }
}
console.log(family2.relationToLuke2("Darth_Vader")); //Luke, I am your father


/*
Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"
Examples
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"
*/

const nSidedShape = (number) => {
    const shapes = {
            1: "circle",
            2: "semi-circle",
            3: "triangle",
            4: "square",
            5: "pentagon",
            6: "hexagon",
            7: "heptagon",
            8: "octagon",
            9: "nonagon",
            10: "decagon",
        }
        //to find the size
    console.log("size" + Object.keys(shapes).length); //10
    return shapes[number];

}

console.log(nSidedShape(3)); //triangle



/*
Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

Examples
isInRange(4, { min: 0, max: 5 }) ➞ true

isInRange(4, { min: 4, max: 5 }) ➞ true

isInRange(4, { min: 6, max: 10 }) ➞ false

isInRange(5, { min: 5, max: 5 }) ➞ true
*/

const isInRange = (number, obj) => (obj.min <= number && number <= obj.max) ? true : false;
console.log(isInRange(7, { min: 0, max: 5 })); //false


/*
The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

Examples
{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"
*/

const addAlwaysSecondOne = (obj) => {
    let str = "";
    for (let i = 1; i <= Object.keys(obj).length; i++) {
        if (i === 2) {
            continue;
        } else {
            str += obj[i] + " " + obj[2] + " ";
        }
    }
    return str.trim();

}

console.log(addAlwaysSecondOne({ 1: "Mommy", 2: "please", 3: "help", 4: "Daddy", 5: "Sister" }));
//Output:
//Mommy please help please Daddy please Sister please