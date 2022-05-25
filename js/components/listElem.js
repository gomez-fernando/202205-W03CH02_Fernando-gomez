import { Component } from './component.js';
export class listElem extends Component {
    todo;
    template;
    // eslint-disable-next-line no-unused-vars
    constructor(todo, selector) {
        super();
        this.todo = todo;
        this.template = this.createTemplate();
        this.render(selector);
        setTimeout(() => {
            this.manageTemplate();
        }, 10);
    }
    createTemplate() {
        let template = `
        <li>
            <div>${this.todo.name}</div>
            <div>${this.todo.responsable}</div>
            
            <div>
                <input
                type="button"
                value="Completado"
                class="complete-todo ${this.todo.id}"
                id="${this.todo.id}
                data-iscompleted=${this.todo.isCompleted}
                ">
            </div>
            <div>
                <input
                type="button"
                value="Borrar"
                class="delete ${this.todo.id}"
                id="${this.todo.id}
                data-iscompleted=${this.todo.isCompleted}
                ">
            </div>
        </li>
        `;
        // console.log('object');
        return template;
    }

    manageTemplate() {
        // const array = document.querySelectorAll(`.complete-todo`)
        // .forEach((item) => {
        //     item.addEventListener('click', this.handleClick.bind(this));
        // });
        // array.forEach((item) => {console.log(item);})
        // for (let i = 0; i < array.length; i++) {
        //     console.log('fgfgf');
            
        // }

        const completeTodoButtons = document.querySelectorAll(`.complete-todo .${this.todo.id}`)
        completeTodoButtons.forEach((item) => {
        console.log(completeTodoButtons);

            item.addEventListener('click', () => {console.log(this.todo)})
      })
      ;
        // console.log(array);
        // console.log(
        //     document.querySelectorAll(`.my-switch`)
        // );
    }

    handleClick(ev) {
        this.todo.isCompleted(true);
      
    }
}
