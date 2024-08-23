import { fetchWeatherData } from './fetchWeatherData.js';
import { renderWeatherInfo } from './renderWeatherInfo.js';
import { extractWeatherInfo } from './utils.js';

export function app() {
    displayWeatherForecast('kokrajhar');
    setupSearchLocationHandler();
}

// Location search handler
function setupSearchLocationHandler() {
    const form = document.querySelector('#search-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        displayWeatherForecast(new FormData(form).get('location'));
    });
}

// Display weather info
async function displayWeatherForecast(location) {
    const data = await fetchWeatherData(location);

    if (data) {
        renderWeatherInfo(extractWeatherInfo(data));
    }
}
