
import noPosterCUT from '../images/no-poster_CUT.jpeg';

import { KEY, URL, IMG_URL } from './fetch-data';


const button = document.querySelector('.click-btn');

async function fetchMainContent() {
    try {
        const response = await fetch(
            `${URL}/trending/movie/day?api_key=${KEY}`
        );
        const data = response.json();

        return data;
    } catch (error) {
        console.log(" ERROR ! -> ", error)
    }
}

async function renderContent() {
    try {
        const mainData = await fetchMainContent();
        createContent(mainData);

    } catch (error) {
        console.log(" ERROR ! -> ", error.message)
    }
}

function createContent(arrayOfData) {
    const contentList = document.querySelector('.content-list');

    contentList.innerHTML = '';

    const data = arrayOfData.results
    const setOfCards = data.map(element => {

        const movieTitle = element.title.toUpperCase();

        let moviePoster = noPosterCUT;
        if (element.poster_path) {
            moviePoster = IMG_URL + element.poster_path;
        }

        return `
         <li class="card-container" data-id="${element.id}">
            <img class="image-poster" src="${moviePoster}" alt="${element.title}"  />
            <div class="info"> 
                <p class="movie-data">${movieTitle}</p>
                <p class="movie-data">${element.release_date}</p>
            </div>
        </li>`;
    });

    contentList.innerHTML = setOfCards.join('');
}


button.addEventListener('click', () => {
    renderContent()
});