let searchText = document.getElementById("txtSearch")

async function search(searchString) {
  let apiKey = '1a08c634ec1bc9d64558c15c3e88cdbf' 
  var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
  let response = await fetch(url)
  let json = await response.json()
  return json
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
  let resultDiv = document.getElementById('searchresults')
  console.log('result: ', data)
  data.results.forEach(element => {
    let movieDiv = document.createElement('div')
    movieDiv.classList.add('moviediv')
    let poster = document.createElement('img')
    poster.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`
    movieDiv.style.backgroundImage = `url(${poster.src})`
    movieDiv.innerHTML = `
    ${element.title}
    `
    movieDiv.addEventListener('click', (e) => {
      window.open(`movie.html?movieId=${element.id}`, '_blank')
    })
    resultDiv.appendChild(movieDiv)
  })
}

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

