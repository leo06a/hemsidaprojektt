let searchText = document.getElementById("txtSearch")

searchText.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault()

    let searchTerm = searchText.value 
    console.log("Kommer söka efter", searchTerm)

    let results = await search(searchTerm)
    
    renderResults(results)
  }
}

async function search(searchString) {
    let apiKey = "1a08c634ec1bc9d64558c15c3e88cdbf" 
    var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
    let response = await fetch(url)
    let json = await response.json()
    return json
}

async function renderResults(data) {
    let resultDiv = document.getElementById("searchresults")
    console.log("resultatet: ", data)
    let allObjects = []
    for (let index = 0; index < results.length; index++) {
      const object = results[index]
      console.log(object)
  }
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
let searchBar = document.getElementById('form')
let searchIcon = document.getElementById('search')
searchIcon.addEventListener('click', (e) => {
  e.preventDefault()
  if (searchBar.style.display == 'block') {
    searchBar.style.display = 'none'
  } else {
    searchBar.style.display = 'block'
  }
})