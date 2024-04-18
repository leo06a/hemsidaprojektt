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
        movie.innerHTML = `${data}`

    } catch (error) {
        console.error(error)
    }
} 

fetchDetails(url)