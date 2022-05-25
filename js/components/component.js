export class Component {
    template;
    render(selector) {
        if (document.querySelector(selector)) {
            document.querySelector(selector).innerHTML +=
                this.template;
        }
    }
}
