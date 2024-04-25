/**
 * We will learn 5 ways to use DOM
 * 
 * 
 * Option 1 - getElementsByTagName
 * Option 2 -getElementById
 * Option 3 - getElementsByClassName
 * Option 4 - querySelector --- will return the first one of the matched element
 * Option 5 - querySelectorAll   --- will return all the matched element
 * 
 * 
 * 
 */


console.log('Hello World');

// console.log(document);

const collectionOfLi = document.getElementsByTagName('li')

for (const li of collectionOfLi) {
    // console.log(li.innerText);
}
const h1Heading = document.getElementsByTagName('h1')
for (const li of h1Heading) {
    console.log(li.innerText);
}

// this is how we can access HTML from JS file

const testId = document.getElementById("hello-world");
// console.log(testId.innerText);


const getClass = document.getElementsByClassName('important-class')
for (const className of getClass) {
    console.log(className.innerText);
}


const headingOne = document.getElementById('first-heading');
headingOne.innerText = 'This is the Heading One';


console.log(headingOne.getAttribute('class'));
console.log(headingOne.classList);
headingOne.classList.remove('heading-class')
console.log(headingOne.classList);
headingOne.classList.add('heading-class')
headingOne.classList.add('nice-heading')
headingOne.classList.add('hello-heading')
console.log(headingOne.classList);

const querySelector = document.querySelectorAll('.important-class li')
// console.log(querySelector);
for (const li of querySelector) {
    console.log(li.innerText);
}