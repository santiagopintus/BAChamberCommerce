const buenosAiresId = '3435910';

const apiKey = "057e1b5ddc6ca4ac1e70d670cfd1c1fe";
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${buenosAiresId}&appid=${apiKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${buenosAiresId}&appid=${apiKey}&units=imperial`;

// Fetching the data from the api
fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((objectResponse) => {
        createHtml(objectResponse);
        // console.log(objectResponse);
    })
    .catch(function (error) {
        console.log(error);
    });

function createHtml(response) {
    // Obtaining temperature
    const $temp = document.getElementById('todayTemp');
    const temp = response.main.temp;
    $temp.innerHTML = `${temp} °F`;
    // Obtaining icon
    const $icon = document.getElementById('todayIcon');
    const icon = response.weather[0].icon;
    $icon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    // Obtaining weather description
    const $todayDescription = document.getElementById('todayDescription');
    const desc = response.weather[0].description;
    $todayDescription.innerHTML = desc;
    // Obtaining humidity
    const $humidity = document.getElementById('todayHumidity');
    const humidity = response.main.humidity;
    $humidity.innerHTML = `Humidity: ${humidity}%`;
}

fetch(forecastURL)
    .then((res) => res.json())
    .then((objRes) => {
        createForecastHtml(objRes);
    })

function createForecastHtml(objectResponse) {
    /* This function creates the HTML of the three day forecast section */
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    //Getting the forecast at 15:00 hours
    let days15pm = objectResponse.list.filter(forecast => forecast.dt_txt.includes("15:00:00"));
    const $forecastContainer = document.getElementById('forecastContainer');
        
    //Loop to get just 3 results
    for (let day = 0; day <= 2; day++) {
        const $dayDiv = document.createElement('DIV');
        $dayDiv.classList.add('one-day');

        const $dayName = document.createElement('H3');
        $dayName.classList.add('day-title');

        const $dayIcon = document.createElement('IMG')
        const $dayTemp = document.createElement('H3')

        //Converting each day to a Date object
        let d = new Date(days15pm[day].dt_txt);
        let temp = days15pm[day].main.temp;

        $dayName.textContent = daysOfWeek[d.getDay()];
        $dayTemp.innerHTML = `${temp} °F`;
        
        // Setting the icon
        const imgalt = days15pm[day].weather[0].description;
        const icon = days15pm[day].weather[0].icon
        const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        $dayIcon.setAttribute('src', src);
        $dayIcon.setAttribute('alt', imgalt);

        $dayDiv.appendChild($dayName);
        $dayDiv.appendChild($dayTemp);
        $dayDiv.appendChild($dayIcon);

        $forecastContainer.appendChild($dayDiv);
        $forecastContainer.style.width = 'fit-content';

        // document.getElementById('loadingMessage').style.display = 'none'
    }
}
    