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
unOrderedList.style.border = 'yellow';
