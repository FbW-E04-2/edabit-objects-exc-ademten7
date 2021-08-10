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
4.Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

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
5. Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

Examples
isInRange(4, { min: 0, max: 5 }) ➞ true

isInRange(4, { min: 4, max: 5 }) ➞ true

isInRange(4, { min: 6, max: 10 }) ➞ false

isInRange(5, { min: 5, max: 5 }) ➞ true
*/

const isInRange = (number, obj) => (obj.min <= number && number <= obj.max) ? true : false;
console.log(isInRange(7, { min: 0, max: 5 })); //false


/*
6. The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

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