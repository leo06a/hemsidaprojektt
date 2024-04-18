let urlParams = new URLSearchParams(window.location.search)
let movieId = urlParams.get('movieId')
const apiKey = '1a08c634ec1bc9d64558c15c3e88cdbf' 
let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
let container = document.getElementById('movieContainer')

async function fetchDetails(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        let movie = document.createElement('div')
        movie.classList.add('movieDetails')

        let poster = document.createElement('img')
        poster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        poster.alt = `${data.title} Poster`
        poster.classList.add('poster')

        let title = document.createElement('h2')
        title.textContent = data.title

        movie.appendChild(poster)
        movie.appendChild(title)

        container.appendChild(movie)


    } catch (error) {
        console.error(error)
    }
} 

fetchDetails(url)

let menu = document.getElementById('menu')
let menuIcon = document.getElementById('menu-icon')
menuIcon.addEventListener('click', (e) => {
  e.preventDefault()
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
})