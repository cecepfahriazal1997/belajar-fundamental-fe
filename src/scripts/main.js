import ApiServices from "./api-service"
export default class Main {
    static main() {
        document.addEventListener('DOMContentLoaded', () => {
            // initialize element
            const banner = document.getElementById('banner')
            const listFilm = document.getElementsByClassName('type-movie')
            const listMenu = document.querySelectorAll('.nav-link')
    
            // event listener for home menu
            listMenu[0].addEventListener('click', () => {
                this.setActiveMenu(listMenu, 0)
                document.getElementsByClassName('about')[0].classList.add('d-none')
                banner.classList.remove('d-none')
                for (const film of listFilm) {
                    film.classList.remove('d-none')
                }
            })
    
            // event listener for about menu
            listMenu[3].addEventListener('click', () => {
                this.setActiveMenu(listMenu, 3)
                document.getElementsByClassName('about')[0].classList.remove('d-none')
                document.getElementsByClassName('about')[0].classList.toggle('transition');
                banner.classList.add('d-none')
                for (const film of listFilm) {
                    film.classList.add('d-none')
                }
            })
        })
    }
    
    // set active menu when change page
    static setActiveMenu(listMenu, index) {
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