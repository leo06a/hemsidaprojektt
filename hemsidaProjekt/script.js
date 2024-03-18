async function search(searchString) {
    let apiKey = "" 
    var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
    console.log("Den URL vi kommer anropa: ", url)
  
    let response = await fetch(url)
  
    let json = await response.json()
    return json
  }
  