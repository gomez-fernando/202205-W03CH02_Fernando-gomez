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
        // setTimeout(() => {
        //     this.manageTemplate();
        // }, 100);
    }
    createTemplate() {
        let template = `
        <li>
            <div>${this.todo.name}</div>
            <div>${this.todo.responsable}</div>
            <div>
                <label class="switch">
                    <input type="checkbox" ${(this.todo.isCompleted) ? 'checked' : ''}>
                    <span class="slider round"></span>
                </label>
            </div>
        </li>
        `;
        return template;
    }
}
