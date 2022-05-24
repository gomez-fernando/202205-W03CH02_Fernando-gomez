/* eslint-disable no-underscore-dangle */
export class Todo {
    
    public isCompleted = false;

    constructor(
        // eslint-disable-next-line no-unused-vars
        public id: number,
        public name: string,
        public responsable: string,
    ) {
        this.isCompleted = false;
    }

}

const todo = new Todo(1, 'nombre', 'responsable');
console.log(todo);
