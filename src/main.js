import { Section } from './components/Section';
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
  
  <h2 class="mt-6 text-2xl mb-4">Todos</h2>
  ${todos.map(todo => {
    return `
    <div class="bg-slate-400 mb-2 p-2 rounded">${todo.text} - ${todo.finished ? 'FINISHED' : '(doing...)'}</div>
    `
  }).join('')}
</main>
`;
