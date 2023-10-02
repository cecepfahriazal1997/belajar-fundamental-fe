import logo from '../../images/cinema.png'

class NavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `<header id="header" class="p-3 mb-3 mt-3">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a class="icon" href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src="${logo}" />
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="javascript:void(0)" class="nav-link px-2 link-primary fw-bold">Dashboard</a></li>
                    <li><a href="javascript:void(0)" class="nav-link px-2 link-dark fw-bold">About</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
                </form>
            </div>
        </div>
    </header>`;
    }
}

customElements.define('nav-bar-component', NavBar)