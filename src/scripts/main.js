// import services
import ApiServices from "./services/api-service"

// import components
import './components/card-movie.js'
export default class Main {
    static main() {
        document.addEventListener('DOMContentLoaded', () => {
            // init menu
            this.initMenu()
            // fetch data popular movie
            this.fetchMovie('popular')
            // fetch data top rated movie
            this.fetchMovie('top_rated')
            // fetch data upcoming movie
            this.fetchMovie('upcoming')
        })
    }

    // init menu
    static initMenu() {
        // initialize element
        const banner = document.getElementById('banner')
        const listMovie = document.getElementsByClassName('type-movie')
        const listMenu = document.querySelectorAll('.nav-link')

        // event listener for home menu
        listMenu[0].addEventListener('click', () => {
            this.setActiveMenu(listMenu, 0)
            document.getElementsByClassName('about')[0].classList.add('d-none')
            banner.classList.remove('d-none')
            for (const movie of listMovie) {
                movie.classList.remove('d-none')
            }
        })

        // event listener for about menu
        listMenu[1].addEventListener('click', () => {
            this.setActiveMenu(listMenu, 1)
            document.getElementsByClassName('about')[0].classList.remove('d-none')
            document.getElementsByClassName('about')[0].classList.toggle('transition');
            banner.classList.add('d-none')
            for (const movie of listMovie) {
                movie.classList.add('d-none')
            }
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

    // fetch data movie
    static async fetchMovie(type) {
        let dataListMovie = await ApiServices.get('movie/' + type, {
            language: 'en-US',
            page: 1
        })

        if (dataListMovie) {
            let listMovie = document.querySelectorAll('card-movie');
            let index = 0
    
            if (type == 'popular') {
                index = 0
                dataListMovie.title = "Popular"
            } else if (type == 'top_rated') {
                index = 1
                dataListMovie.title = "Top Rated"
            } else if (type == 'upcoming') {
                index = 2
                dataListMovie.title = "Upcoming"
            }
            
            listMovie[index].data = dataListMovie
            // console.log(dataListMovie);
        }
    }
}