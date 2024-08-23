// Extract Weather information necessary for application
export function extractWeatherInfo(data) {
    return {
        name: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        datetime: data.dt,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        feelslike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windspeed: data.wind.speed
    };
}

// Return Formated time based on seconds
export function formatDateTime(seconds, format) {
    const date = new Date(seconds * 1000);

    const options = {};

    if (format === 'datetime') {
        options.weekday = 'long';
        options.month = 'long';
        options.day = 'numeric';
        options.year = 'numeric';
        options.hour = 'numeric';
        options.minute = 'numeric';
        options.hour12 = true;
    } else if (format === 'time') {
        options.hour = 'numeric';
        options.minute = 'numeric';
        options.hour12 = true;
    }

    return date.toLocaleTimeString('en-US', options);
}

// Covert temperature from kelvin to celsius
export function kelvinToCelsius(temp) {
    return (temp - 273.15).toFixed(1);
}

// Return country name
export function fullCountryName(country) {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(country);
}
