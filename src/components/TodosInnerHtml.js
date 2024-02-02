export const TodosInnerHtml = (todos) => {
	return /*html*/ `
  ${todos.map(todo => {
    return `
    <div class="bg-slate-400 mb-2 p-2 rounded">${todo.text} - ${todo.finished ? 'FINISHED' : '(doing...)'}</div>
    `
  }).join('')}
	`;
}