
import noPosterCUT from '../images/no-poster_CUT.jpeg';

import { KEY, URL, IMG_URL } from './fetch-data';

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

const contentList = document.querySelector('.content-list');

async function renderContent() {
    try {
        const mainData = await fetchMainContent();
        /*     console.log(mainData) */

        contentList.innerHTML = '';
        const data = mainData.results;

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


    } catch (error) {
        console.log(" ERROR ! -> ", error.message)
    }
}


renderContent()