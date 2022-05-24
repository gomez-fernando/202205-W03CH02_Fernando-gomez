/* eslint-disable no-underscore-dangle */
export class Todo {
    id;
    name;
    responsable;
    isCompleted = false;
    constructor(
    // eslint-disable-next-line no-unused-vars
    id, name, responsable) {
        this.id = id;
        this.name = name;
        this.responsable = responsable;
        this.isCompleted = false;
    }
}
const todo = new Todo(1, 'nombre', 'responsable');
console.log(todo);
