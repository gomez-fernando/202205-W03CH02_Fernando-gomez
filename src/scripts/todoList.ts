/* eslint-disable import/prefer-default-export */
import { Todo } from './Todo.js';

export function crearTodoList() {
    const data: Array<Todo> = [
        new Todo(1, 'nombre1', 'responsable1'),
        new Todo(2, 'nombre2', 'responsable2'),
        new Todo(3, 'nombre3', 'responsable3'),
        new Todo(4, 'nombre4', 'responsable4'),
        new Todo(5, 'nombre5', 'responsable5'),
    ];
    

    return data;
}
console.log(crearTodoList());