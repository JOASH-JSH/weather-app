const loadingEl = document.querySelector('.loading-background');

// Fetch weather API
export async function fetchWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9d1f26064e9960150b7fcf0b4bc95725`;

    loadingEl.style.display = 'grid';

    try {
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            console.error(
                new Error(
                    `Failed to fetch weather data: ${response.statusText} (Status Code: ${response.status})`
                )
            );
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(new Error(`An error occurred while fetching weather data: ${error.message}`));
        return null;
    } finally {
        loadingEl.style.display = 'none';
    }
}
