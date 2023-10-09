
import noPosterCUT from '../images/no-poster_CUT.jpeg';
import { KEY, URL, IMG_URL } from './fetch-data';

const contentForm = document.querySelector('#search-form');
const contentList = document.querySelector('.content-list');

contentForm.addEventListener('submit', onformSubmit)

function onformSubmit(event) {
    event.preventDefault();
    let searchData = event.currentTarget.elements.searchQuery.value.trim();
    //console.log("search result ", searchData)
    renderContent(searchData)
}

async function fetchMainContent(querry) {
    try {
        const response = await fetch(
            //`${URL}/trending/movie/day?api_key=${KEY}`
            `${URL}search/movie?api_key=${KEY}&language=en-US&query=${querry}&include_adult=false`
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.log(" ERROR ! -> ", error)
    }
}

async function renderContent(searchDataFromForm) {
    const dataOfSearchQuerry = searchDataFromForm;
    try {
        if (dataOfSearchQuerry === '') {
            alert("Error : Search Field ist Leer ! ")
        }
        const mainData = await fetchMainContent(dataOfSearchQuerry);
        createContent(mainData);

    } catch (error) {
        console.log(" ERROR ! -> ", error.message)
    }
}


function createContent(arrayOfData) {

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

