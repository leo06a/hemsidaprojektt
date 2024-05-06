let searchText = document.getElementById("searchbar")
let resultDiv = document.getElementById('searchresults')
const apiKey = '1a08c634ec1bc9d64558c15c3e88cdbf' 

async function search(searchString) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
  try {
    let response = await fetch(url)
    let json = await response.json()
    return json
  } catch (error) {
    console.error('Error getting movies:', error)
    resultDiv.innerHTML = 'Failed to get data'
    return { results: [] } 
  }
}

searchText.onkeydown = async function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    let searchTerm = searchText.value 
    let results = await search(searchTerm)
    renderResults(results)
  }
}

async function renderResults(data) {
  console.log('result: ', data)
  if (data.results.length === 0) {
    document.getElementById('error').style.display = 'flex'
  }
  resultDiv.innerHTML = ''
  data.results.forEach(element => {
    let movieLink = document.createElement('a')
    movieLink.href = `movie.html?movieId=${element.id}`
    let movieDiv = document.createElement('div')
    movieDiv.classList.add('moviediv')
    let poster = document.createElement('img')
    poster.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`
    poster.alt = `${element.title} Movie Poster`
    movieDiv.style.backgroundImage = `url(${poster.src})`
    movieDiv.innerHTML = `
      <h3>${element.title}</h3><br>
    `
    movieLink.appendChild(movieDiv)
    resultDiv.appendChild(movieLink)
  })
}

let searchBar = document.getElementById('searchbar')
let searchIcon = document.getElementById('search')
searchIcon.addEventListener('click', (e) => {
  e.preventDefault()
  if (searchBar.style.display == 'block') {
    searchBar.style.display = 'none'
  } else {
    searchBar.style.display = 'block'
  }
})