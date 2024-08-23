import { formatDateTime, kelvinToCelsius, fullCountryName } from './utils.js';

// Renders the current weather info to the webpage.
export function renderWeatherInfo(info) {
    const weatherForecastSectionEl = document.querySelector('.weather-forecast-section');

    weatherForecastSectionEl.innerHTML = `
        <div class="weather-forecast-info-section-1">
            <div class="location-box">
                <p class="location-text">${info.name}, ${fullCountryName(info.country)}</p>
            </div>
            <div class="datetime-box">
                <p class="datetime-text">${formatDateTime(info.datetime, 'datetime')}</p>
            </div>
            <div class="weather-description-box">
                <p class="weather-description-text">${info.description}</p>
            </div>
            <div class="weather-icon-and-temperature-box">
                <img class="weather-icon" src="https://openweathermap.org/img/wn/${info.icon}@4x.png" alt="icon" />
                <p class="weather-temperature-text">${kelvinToCelsius(info.temp)} &#176;C</p>
            </div>
        </div>
        <div class="weather-forecast-info-section-2">
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Feels like</p>
                <p class="weather-additional-info-text">${kelvinToCelsius(info.feelslike)} &#176;C</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Min</p>
                <p class="weather-additional-info-text">${kelvinToCelsius(info.tempMin)} &#176;C</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Max</p>
                <p class="weather-additional-info-text">${kelvinToCelsius(info.tempMax)} &#176;C</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Wind</p>
                <p class="weather-additional-info-text">${info.windspeed} m/s</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Humidity</p>
                <p class="weather-additional-info-text">${info.humidity}%</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Pressure</p>
                <p class="weather-additional-info-text">${info.pressure} hPa</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Sunrise</p>
                <p class="weather-additional-info-text">${formatDateTime(info.sunrise, 'time')}</p>
            </div>
            <div class="weather-additional-info-box">
                <p class="weather-additional-info-header">Sunset</p>
                <p class="weather-additional-info-text">${formatDateTime(info.sunset, 'time')}</p>
            </div>
        </div>
    `;
}
