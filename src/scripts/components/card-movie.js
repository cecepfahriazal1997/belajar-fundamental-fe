import './items-movie.js'
class CardMovie extends HTMLElement {
    constructor() {
        super()
    }

    set data(listData) {
        this._listData = listData
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        // create container for list movie
        const container = document.createElement('div')

        if (this._listData && this._listData.results.length > 0) {
            this._listData.results.forEach(detail => {
                // init item movie from component
                const itemMovie = document.createElement('item-movie')
                itemMovie.detail = detail
                container.appendChild(itemMovie)
            });
        }

        this.innerHTML = `
        <section class="type-movie">
            <h5>${this._listData?.title}</h5>
            <div class="list-movie">
                ${container.innerHTML}
            </div>
        </section>
        `
    }
}

customElements.define('card-movie', CardMovie)