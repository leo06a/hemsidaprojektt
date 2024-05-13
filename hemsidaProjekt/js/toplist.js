const apiKey = '1a08c634ec1bc9d64558c15c3e88cdbf' 

async function getTopMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`
  try {
    let response = await fetch(url)
    let data = await response.json()
    return data.results.slice(0, 10)
  } catch {
    console.error('Error getting movies:', error)
    resultDiv.innerHTML = 'Failed to get data'
    return { results: [] }
  }
}

async function displayTopMovies() {
  const topMovies = await getTopMovies()
  console.log(topMovies)
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  let headerRow = document.createElement('tr')
  let titleHeader = document.createElement('th')

  titleHeader.textContent = 'Movie title'
  headerRow.appendChild(titleHeader)
  thead.appendChild(headerRow)
  table.appendChild(thead)

  let tbody = document.createElement('tbody')
  topMovies.forEach(element => {
    let row = document.createElement('tr')
    let titleCell = document.createElement('td')
    titleCell.textContent = element.title
    row.appendChild(titleCell)
    tbody.appendChild(row)
  })
  table.appendChild(tbody)
  let main = document.getElementById('container')
  main.appendChild(table)
}

displayTopMovies() 