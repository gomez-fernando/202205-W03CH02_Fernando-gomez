import { crearTodoList } from './todoList.js';
import { listElem } from '../components/listElem.js';
function app() {
    const todos = crearTodoList();
    // console.log(todos);
    let selector = '.todo-list';
    todos.forEach((item) => {
        new listElem(item, selector);
        console.log(item, selector);
    });
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
