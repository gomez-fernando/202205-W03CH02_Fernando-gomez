import { iTodo } from '../interfaces/todo.js';
import { Todo } from '../scripts/Todo.js';
import { Component } from './component.js';

export class listElem extends Component implements iTodo {
    template: string;
    // eslint-disable-next-line no-unused-vars
    constructor(public todo: Todo, selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        // setTimeout(() => {
        //     this.manageTemplate();
        // }, 100);
    }
    createTemplate() {
        let template = `
        <li>
            OER ERJER ERER
        </li>
        `;
        return template;
    }

    
    // manageTemplate() {
    //     document
    //         .querySelectorAll(`.${this.nombre} button`)
    //         .forEach((item) =>
    //             item.addEventListener('click', this.handleClick.bind(this))
    //         );
    //     console.log(
    //         document.querySelectorAll(`.${this.nombre} button`)
    //     );
    // }
    // handleClick(ev: Event) {
    //     if ((<Element>ev.target).textContent === 'habla') {
    //         console.log(this.comunicar());
    //         const selector = '.comunications';
    //         const element = <Element>document.querySelector(selector);
    //         element.classList.toggle('on');
    //         new Comunications(this.todo, selector);
    //         setTimeout(() => {
    //             element.classList.toggle('on');
    //             element.innerHTML = '';
    //         }, 2000);
    //     } 
    // }
}

