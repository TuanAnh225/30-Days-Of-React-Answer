// **************************************************** Level 1****************************************************************************
//1. Declare an empty array;
const emptyArray = [];
//2. Declare an array with more than 5 number of elements
const length7Array = [1, 2, 3, 4, 5, 6, 7];
//3. Find the length of your array
console.log(length7Array.length);
//4. Get the first item, the middle item and the last item of the array
console.log(length7Array[0], length7Array[3], length7Array[6]);
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  "hi",
  [1, 2, 3],
  { name: "TuanAnh", age: 18 },
  { skills: ["HTML", "CSS"] },
  true,
];
//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//7 Print the array using console.log()
console.log(itCompanies);
//8 Print the number of companies in the array
console.log(itCompanies.length);
//9 Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
//10 Print out each company
itCompanies.forEach((company) => {
  console.log(company);
});
//11 Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});
//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", ") + " are big IT companies.");
//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyName = "Microsoft";
if (itCompanies.includes(companyName)) {
  console.log(companyName + " exists in the itCompanies array");
} else {
  console.log(companyName + " is not found");
}
//14 Filter out companies which have more than one 'o' without the filter method
const companniesMoreThan1o = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  const companyName = itCompanies[i];
  for (let j = 0; j < companyName.length; j++) {
    if (companyName[j] === "o") count++;
  }
  if (count > 1) companniesMoreThan1o.push(companyName);
}
console.log(companniesMoreThan1o);
//15 Sort the array using sort() method
console.log(itCompanies.sort());
//16 Reverse the array using reverse() method
console.log(itCompanies.reverse());
//17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
//18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));
//19 Slice out the middle IT company or companies from the array
let middle = itCompanies.length % 2;
let middle2 = itCompanies.length / 2;
if (middle === 0) {
  console.log(itCompanies.slice(middle2 - 1, middle2 + 1));
} else {
  console.log(itCompanies.slice(middle2, middle2 + 1));
}
//20 Remove the first IT company from the array
console.log(itCompanies.shift());
//21 Remove the middle IT company or companies from the array
middle = itCompanies.length % 2;
middle2 = itCompanies.length / 2;
if (middle === 0) {
  console.log(itCompanies.splice(middle2 - 1, 2));
} else {
  console.log(itCompanies);
  console.log(itCompanies.splice(middle2 - 0.5, 1));
}
//22 Remove the last IT company from the array
console.log(itCompanies.pop());
//23 Remove all IT companies
console.log(itCompanies.splice());

// **********************************************************Level 2****************************************************************
//1 Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

//2 First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const removePuncText = text.replace(/[.,]/g, "");
const words = removePuncText.split(" ");
console.log(words);
console.log(words.length);
//3 In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart.includes("Meat") === false) {
  shoppingCart.unshift("Meat");
  console.log(shoppingCart);
}
if (shoppingCart.includes("Sugar") === false) {
  shoppingCart.push("Sugar");
  console.log(shoppingCart);
}
const removeIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(removeIndex, 1);
console.log(shoppingCart);
const modifyIndex = shoppingCart.indexOf("Tea");
shoppingCart[modifyIndex] = "Green Tea";
console.log(shoppingCart);

//*************************************************Level 3 ****************************************************
//1 The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//- Sort the array and find the min and max age
//- Find the median age(one middle item or two middle items divided by two)
//- Find the average age(all items divided by number of items)
//- Find the range of the ages(max minus min)
//- Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let min = ages[0];
let max = ages[ages.length - 1];
console.log("min:", min);
console.log("max", max);
