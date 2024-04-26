// creating a new Section
const mainContainer = document.getElementById('main-body')


const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'This is a sample heading';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'briyani';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'Meat';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'Borhani';
ul.appendChild(li3);



section.appendChild(ul);
mainContainer.appendChild(section);



// Append direct HTML

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<ul">
        <li>Hello</li>
        <li>World</li>
        <li>How </li>
        <li>Are </li>
        <li>You</li>
    </ul>
`

mainContainer.appendChild(sectionDress)