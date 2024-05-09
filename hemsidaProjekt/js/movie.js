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
    document.title = data.title

    let title = document.getElementById('title')
    title.innerText = data.title

    let img = document.getElementById('img')
    img.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}')`

    let overview = document.getElementById('overview')
    overview.innerHTML = `
    ${data.overview}<br>
    <br>
    <p>
      Popularity: ${data.popularity}<br>
      Release date: ${data.release_date}<br>
    </p>
    <br>
    <p>
    Vote Average: ${data.vote_average}<br>
    Votes: ${data.vote_count}
    </p>
    `

    let genres = ''
    data.genres.forEach(genre => {
      genres += genre.name + '  '
    })

    document.getElementById('genres').innerText = genres

  } catch (error) {
    console.error('Error getting movies:',error)
  }
} 

fetchDetails(url)
