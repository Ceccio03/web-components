class SuperHeaderComponent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = '';
        const style = document.createElement('style');
        style.innerHTML = `h1{color: ${this.getAttribute('title-color') || 'red'}}`;
        this.shadowRoot.appendChild(style);

        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.getAttribute('super-title') + ' Platform'));
        this.shadowRoot.appendChild(h1);

        const page2link = document.createElement('a');
        page2link.href = './page2.html';
        page2link.appendChild(document.createTextNode('Vai alla pagina 2'));
        this.shadowRoot.appendChild(page2link);
        // this.shadowRoot.innerHTML = '<h1>Game Platform</h1>';
    }
}

customElements.define('super-header', SuperHeaderComponent);