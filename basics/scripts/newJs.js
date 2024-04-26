// this is called style manipulation 
// CSS styling using the JS 

const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid lightsteelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '5px';
    section.style.padding = '10px 20px 10px 30px';
    section.style.backgroundColor = 'lightgrey';
}

const unOrderedList = document.getElementById('unordered-list');
unOrderedList.style.backgroundColor = 'lightyellow';
unOrderedList.style.border = 'yellow'


const li = document.createElement('li');
li.innerText = 'This is a new list';

unOrderedList.append(li);

const liTwo = document.createElement('li');
liTwo.innerText = 'this is a another new list';

unOrderedList.appendChild(liTwo);






// 1. where to be added new element
const newList = document.getElementById('new-list')

// 2. what to be added
const newLi = document.createElement('li');
newLi.innerText = 'testing new List';

// 3. add the new list
newList.appendChild(newLi);





