import { Section } from './components/Section';
import './style.scss'

const title = 'Our Todo List';

document.querySelector('#app').innerHTML = `
<main>
  <h1>${title}</h1>
  ${Section("Intro", "Welcome to this site.")}
  ${Section("More Info", "This website is going to be a todo list.")}
  ${Section("Third Section", "More information about the todo list.")}
</main>
`;
