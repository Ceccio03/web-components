class GameCardComponent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.game) {
            // this.shadowRoot.innerHTML = '';

            // const div = document.createElement('div');
            // this.shadowRoot.appendChild(div);

            // const h3 = document.createElement('h3');
            // h3.appendChild(document.createTextNode(this.game.title));
            // div.appendChild(h3);
            this.shadowRoot.innerHTML = `
            .card {
                display: flex;
                flex-direction: column;
                background-color: white;
                border-radius: 16px;
                padding: 16px;
            }
            `;
            
            this.shadowRoot.innerHTML = `
            <div class="card">
                <span class="card-title">${this.game.title}</span>
                <span class="card-author">${this.game.author}</span>
                <div class="card-details">
                    <span class="card-detail">${this.game.type}</span>
                    <span class="card-detail">${this.game.yop}</span>
                    <span class="card-detail">${this.game.isMultiplayer}</span>
                </div>
            </div>
            `;
        }
    }
}
customElements.define('game-card', GameCardComponent);