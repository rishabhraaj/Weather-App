let submitBtn = document.querySelector("#submitBtn");


async function fetchWeather(cityName) {
    city.innerHTML = cityName;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
    const options = {
        method: 'GET',
        headers: {
            "X-RapidAPI-Key": "aa786fe461mshce3badd81ae4be5p138fe1jsn0586b5091785",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        cloud_pct.innerHTML = result.cloud_pct
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity2.innerHTML = result.humidity
        max_temp.innerHTML = result.max_temp
        min_temp.innerHTML = result.min_temp
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        temp.innerHTML = result.temp
        wind_speed.innerHTML = result.wind_speed
        wind_speed2.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees


    } catch (error) {
        console.error(error);
    }
}

fetchWeather("Jharkhand");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let cityName = document.querySelector("#cityName").value;
    fetchWeather(cityName);
})