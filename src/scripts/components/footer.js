class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div>@2023 Cecep Rokani All Served.</div>
            </div>
        </footer>`;
    }
}

customElements.define('footer-component', Footer)