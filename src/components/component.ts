export abstract class Component {
    template!: string;
    render(selector: string) {
        if (document.querySelector(selector)) {
            (<Element>document.querySelector(selector)).innerHTML +=
                this.template;
        }
    }
}
