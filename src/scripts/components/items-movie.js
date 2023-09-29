import moment from "moment/moment";

const baseUrlImage = 'https://image.tmdb.org/t/p/w200'

class ItemMovie extends HTMLElement {
    constructor() {
        super()
    }

    set detail(data) {
        this._detail = data
        this.render()
    }

    render() {
        const dateString = this._detail?.release_date ? moment(new Date(this._detail.release_date)).format('MMM DD, yyyy') : ''
        this.innerHTML = `
        <div class="item-movie mb-3">
            <div class="thumbnail" style="background-image: url('${baseUrlImage}${this._detail.poster_path}')"></div>
            <div class="d-block">
                <div class="title">${this._detail?.title}</div>
                <div class="description">${dateString}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('item-movie', ItemMovie)