import { Section } from './components/Section';
import { TodosInnerHtml } from './components/TodosInnerHtml';
import './style.scss';

const title = 'Our Todo List';

const todos = [
  {
    id: 1,
    text: "go to store",
    finished: false
  },
  {
    id: 2,
    text: "read a book",
    finished: false
  },
  {
    id: 3,
    text: "create React site",
    finished: true
  }
];

document.querySelector('#app').innerHTML = /*html*/ `
<main>
  <h1 class="text-2xl text-blue-800 mb-4">${title}</h1>
  ${Section("Intro", "Welcome to this site.")}
  ${Section("More Info", "This website is going to be a todo list.")}
  ${Section("Third Section", "More information about the todo list.")}
  
  <h2 class="todoTitle mt-6 text-2xl mb-4">Todos</h2>
  <div class="divSection"></div>
  ${TodosInnerHtml(todos)}
</main>
`;

// create DIV in HTML
const newDiv = document.createElement("div");
newDiv.textContent = 'todo001';
// const newContent = document.createTextNode("todo001");
// newDiv.appendChild(newContent);
// const h2 = document.querySelector('h2.todoTitle');
// document.body.insertAfter(newDiv, h2);
const divSectionElem = document.querySelector('.divSection');
divSectionElem.appendChild(newDiv);