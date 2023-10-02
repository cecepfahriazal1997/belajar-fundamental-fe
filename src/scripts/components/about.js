import profile from '../../images/profile.jpg'
import github from '../../images/github.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/facebook.svg'

class NavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <section class="d-none about mt-5">
            <h2 class="fw-bold display-6">About</h2>
            <div class="mb-5 description">
                Website ini dibuat untuk memenuhi submission pada Courses <br><b>Belajar Fundamental Front-End Web
                    Development</b> <br />
            </div>
            <div class="row justify-content-center">
                <div class="col-md-3">
                    <img src="${profile}"
                        class="img-fluid rounded" />
                </div>
                <div class="col-md-auto text-start ps-3">
                    <div class="form-group mb-3">
                        <div class="label">Name</div>
                        <div class="h4">Cecep Rokani</div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label">University</div>
                        <div class="h4">Sekolah Tinggi Teknologi Bandung</div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label">Study Program</div>
                        <div class="h4">Teknik Informatika</div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label">Email</div>
                        <div class="h4 text-primary"><a
                                href="mailto:ceceprokani9712@gmail.com">ceceprokani9712@gmail.com</a></div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label mb-3">Another Information</div>
                        <div class="d-flex">
                            <a href="https://github.com/cecepfahriazal1997" target="_blank"><img
                                    src="${github}"
                                    class="me-3" width="50" height="50" /></a>
                            <a href="https://www.linkedin.com/in/cecep-rokani" target="_blank"><img
                                    src="${linkedin}"
                                    class="me-3" width="50" height="50" /></a>
                            <a href="https://www.facebook.com/ceceprokani1997" target="_blank"><img
                                    src="${facebook}"
                                    class="me-3" width="50" height="50" /></a>
                            <a href="https://www.instagram.com/cecepfahriazal1997" target="_blank"><img
                                    src="${instagram}"
                                    class="me-3" width="50" height="50" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
}

customElements.define('about-component', NavBar)