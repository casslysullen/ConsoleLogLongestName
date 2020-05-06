alert("Please enter three names, then check the console log");
const name1 = prompt("What is your name");
const name2 = prompt("What is your name");
const name3 = prompt("What is your name");

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} is the longest name`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2}) is the longest name`);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} is the longest name`);
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log(`${name1} and ${name2} is the longest name`);
} else if (name1.length === name3.length && name3.length > name2.length) {
    console.log(`${name1} and ${name3} is the longest name`);
} else if (name2.length === name3.length && name2.length > name1.length) {
    console.log(`${name2} and ${name3} is the longest name`);
} else {
    console.log(`${name1} and ${name2} and ${name3}`)
};


function tellMeMyName(name) {
    return name;
};