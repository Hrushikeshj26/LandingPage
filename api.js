const input = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const movies = document.getElementById("movies");

searchBtn.addEventListener('click', () => {
    const queary = input.value.trim();
    console.log(queary);

    movieSearch(queary);
    
})

async function movieSearch(queary) {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${queary}`);
    
    if(!response.ok){
        console.log("Failed to fectch data"); 
        return; 
    }

    const data = await response.json();
    console.log(data);
    displayMovies(data);
}

function displayMovies(data) {
    movies.innerHTML = "";
    
    for(let movie of data) {
        let src = movie.show.image.medium;

        const img = document.createElement('img');
        img.src=src;

        movies.appendChild(img);
    }
}