// import $ from "jquery"
function main() {
    document.addEventListener('DOMContentLoaded', () => {
        const banner = document.getElementById('banner')
        const listFilm = document.getElementsByClassName('type-movie')
        const listMenu = document.querySelectorAll('.nav-link')

        listMenu[0].addEventListener('click', () => {
            setActiveMenu(listMenu, 0)
            document.getElementsByClassName('about')[0].classList.add('d-none')
            banner.classList.remove('d-none')
            for (const film of listFilm) {
                film.classList.remove('d-none')
            }
        })

        listMenu[3].addEventListener('click', () => {
            setActiveMenu(listMenu, 3)
            document.getElementsByClassName('about')[0].classList.remove('d-none')
            document.getElementsByClassName('about')[0].classList.toggle('transition');
            banner.classList.add('d-none')
            for (const film of listFilm) {
                film.classList.add('d-none')
            }
        })
    })

    function setActiveMenu(listMenu, index) {
        for (const menu of listMenu) {
            menu.classList.remove('link-dark')
            menu.classList.remove('link-primary')

            if (menu === listMenu[index]) {
                menu.classList.add('link-primary')
            } else {
                menu.classList.add('link-dark')
            }
        }
    }
}

export default main