// import { Component } from './component.js';
// export class listElem extends Component {
//     todo;
//     template;
//     // eslint-disable-next-line no-unused-vars
//     constructor(todo, selector) {
//         super();
//         this.todo = todo;
//         this.template = this.createTemplate();
//         this.render(selector);
//         // setTimeout(() => {
//         //     this.manageTemplate();
//         // }, 100);
//     }
//     createTemplate() {
//         let template = `
//         <li>
            
//         </li>
//         `;
//         return template;
//     }

//     manageTemplate() {
//         document
//             .querySelectorAll(`.${this.todo.nombre} button`)
//             .forEach((item) =>
//                 item.addEventListener('click', this.handleClick.bind(this))
//             );
//         console.log(
//             document.querySelectorAll(`.${this.todo.nombre} button`)
//         );
//     }
// }
