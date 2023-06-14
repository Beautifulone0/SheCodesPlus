let dateElement = document.getElementById("date");
function displayDate() {
  let dates = new Date();
  let day = dates.toLocaleDateString("en-NG", { weekday: "short" });
  let newDate = dates.getDate();
  let month = dates.toLocaleDateString("en-NG", { month: "long" });
  let year = dates.getFullYear();

  let newdateElement = `${day} ${newDate} ${month} ${year}`;

  dateElement.innerHTML = newdateElement;
}
displayDate();

console.log(dateElement.innerHTML);

let timeElement = document.getElementById("time");
function displayTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let newTime = `${hours.toString().padStart(2, "0")} : ${minutes
    .toString()
    .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} ${amOrPm}`;

  timeElement.innerHTML = newTime;
}
displayTime();

console.log(timeElement.innerHTML);


function displayWeatherData (response) {
  console.log(response.data);
  
  document.getElementById("name").innerHTML = response.data.name
  document.getElementById("temp").innerHTML = Math.round(response.data.main.temp)
  document.getElementById("description").innerHTML = response.data.weather[0].description
  document.getElementById("humidity").innerHTML = Math.round(response.data.main.humidity)
  document.getElementById("wind").innerHTML =  Math.round(response.data.wind.speed)
}

function search (city) {
  let apiKey = "58b20ee9867491dff42b6ad07610b935";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherData)
}

function handleSubmit (event) {
  event.preventDefault();
  let city = document.getElementById("myInput").value
  search(city)
}


let input = document.getElementById("city-input")
input.addEventListener("submit", handleSubmit )

search("abuja")


function displayCurrentWeatherData (event) {
  event.preventDefault()
  navigator.geolocation.getCurrentPosition(currentTemperature)
}

function currentTemperature (position) {
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  let apiKey = "58b20ee9867491dff42b6ad07610b935";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherData)
}

let currentLocation = document.getElementById("currentbtn")
currentLocation.addEventListener("click", displayCurrentWeatherData)


/*let input = document.getElementById("city-input");
input.addEventListener("submit", function (event) {
  event.preventDefault();

  //let userInput = document.getElementById("myInput").value;
  //let h1 = document.querySelector("h1");

  //h1.innerHTML = userInput;


  function displayWeatherData (response) {
    console.log(response.data);
    
    document.getElementById("name").innerHTML = response.data.name
    document.getElementById("temp").innerHTML = Math.round(response.data.main.temp)
    document.getElementById("description").innerHTML = response.data.weather[0].description
    document.getElementById("humidity").innerHTML = Math.round(response.data.main.humidity)
    document.getElementById("wind").innerHTML =  Math.round(response.data.wind.speed)
  }
    
  let city = document.getElementById("myInput").value
  let apiKey = "58b20ee9867491dff42b6ad07610b935";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  //console.log(axios);
   axios.get(apiUrl).then(displayWeatherData)

  
});*/

let cf = document.getElementById("degrees");
function newDegree(event) {
  //event.preventDefault();
  let newDegrees = "☀ 40 °C | °F";

  cf.innerHTML = newDegrees;
}

cf.addEventListener("click", newDegree);



/*function displayWeatherData (response) {
  console.log(response.data);
  
  document.getElementById("name").innerHTML = response.data.name
  document.getElementById("temp").innerHTML = Math.round(response.data.main,temp)
  document.getElementById("description").innerHTML = response.data.weather[0].description
  document.getElementById("humidity").innerHTML = Math.round(response.data.main.humidity)
  document.getElementById("wind").innerHTML =  Math.round(response.data.wind.speed)
}


function weatherData () {

  let city = document.getElementById("myInput").Value
  let apiKey = "58b20ee9867491dff42b6ad07610b935";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  //console.log(axios);
   axios.get(apiUrl).then(displayWeatherData)
}
weatherData()*/


/*function displayWeatherData (response) {
  console.log(response.data);
}

function weatherData () {
  let city = document.getElementById('myInput').value;
  let apiKey = "a3c877c9f9ddea0f12a0f9af1eb93e21";
  let apiAddress = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&unints=metric`;
  
  axios.get(apiAddress).then(displayWeatherData)
 /* axios.get(apiAddress).then(response => {
    //let temp = response.data
    console.log(response.data);

    /*let cityTemp = Math.round(response.data.main.temp)
    let description = response.data.weather[0].description
    let humidity = Math.round(response.data.main.humidity)
    let wind = Math.round(response.data.wind.speed)

    let tempData = `${cityTemp} ${description} ${humidity} ${wind}`;
    console.log(tempData);
  })
}
weatherData()*/


/*function currentTemperature(position) {
  
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = "58b20ee9867491dff42b6ad07610b935";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl)
    .then(response => {
      const temp = Math.round(response.data.main.temp);
      console.log(temp);
      current(temp);
    })
    .catch(error => {
      console.log(error);
    });


    function current (temp) {
      let curr = document.getElementById('degrees')
      curr.innerHTML = `☀ ${temp} °C | °F`
    }
    let currentTemp = document.querySelector('#currentbtn')
    currentTemp.addEventListener('click', ()  => {
      navigator.geolocation.getCurrentPosition(currentTemperature)
  })
}

navigator.geolocation.getCurrentPosition(currentTemperature);*/


/*function displayAreaName(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = '';

  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  axios.get(apiUrl)
    .then(response => {
      const addressComponents = response.data.results[0].address_components;
      let areaName = '';

      for (let i = 0; i < addressComponents.length; i++) {
        const component = addressComponents[i];
        const types = component.types;

        if (types.includes('locality') || types.includes('political')) {
          areaName = component.long_name;
          break;
        }
      }

      console.log(areaName);
    })
    .catch(error => {
      console.log(error);
    });
}

navigator.geolocation.getCurrentPosition(displayAreaName);*/



//function currentTemperature (position) {
//  const latitude = position.coords.latitude;
//  const longitude = position.coords.longitude;
//  const apiKey = "58b20ee9867491dff42b6ad07610b935"
//  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

//  axios.get(apiUrl).then(currentTemperature)

//  const //temp = math.round(data.main.temp)
  

  //let currentTemp = document.querySelector('#currentbtn')
  //currentTemp.addEventListener('click', )
//}

//navigator.geolocation.getCurrentPosition(currentTemperature)

/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};*/

/*function city() {
  let forecast = prompt("Enter a city");
  forecast = forecast.toLowerCase()

  if (weather.hasOwnProperty(forecast)) {
    // Check if the city exists in the weather object
    let cityData = weather[forecast];
    let temp = weather[forecast].temp
    let celciusTemp =Math.round(temp);
    let fahrenheitTemperature =Math.round((temp * 9) / 5 + 32);
    
    alert(
      `It is currently ${celciusTemp}°C | (${fahrenheitTemperature}°F) in ${forecast} with a Humidity of ${cityData.humidity}%`
    );
  } else if (!weather.hasOwnProperty(forecast)) {
    alert(
      `Sorry, we don't know the weather condition for this city, try going to https://www.google.com/search?q=weather+${forecast}`
    );
  } else {
    alert ("Sorry Please Enter a city")
  }
}

city();*/

/*const input = document.getElementById('myInput');
const button = document.getElementById('searchbtn')

input.addEventListener('input',  inputEvent);

function inputEvent (e) {
  const inputValue = e.target.Value;
  console.log(inputValue);
}

button.addEventListener ('click', function(city){
  function city() {
    let forecast = prompt("Enter a city");
    forecast = forecast.toLowerCase()
  
    if (weather.hasOwnProperty(forecast)) {
      // Check if the city exists in the weather object
      let cityData = weather[forecast];
      let temp = weather[forecast].temp
      let celciusTemp =Math.round(temp);
      let fahrenheitTemperature =Math.round((temp * 9) / 5 + 32);
      
      alert(
        `It is currently ${celciusTemp}°C | (${fahrenheitTemperature}°F) in ${forecast} with a Humidity of ${cityData.humidity}%`
      );
    } else if (!weather.hasOwnProperty(forecast)) {
      alert(
        `Sorry, we don't know the weather condition for this city, try going to https://www.google.com/search?q=weather+${forecast}`
      );
    } else {
      alert ("Sorry Please Enter a city")
    }
  }
})*/

/*const input = document.getElementById('myInput');
const button = document.getElementById('searchbtn');

input.addEventListener('input', inputEvent);

function inputEvent(e) {
  const inputValue = e.target.value; // Corrected variable name to 'value' (lowercase 'v')
  console.log(inputValue); // Corrected variable name to 'inputValue' (camel case)

  // You can perform additional actions with the input value here
}

button.addEventListener('click', function() {
  let forecast = prompt("Enter a city");
  forecast = forecast.toLowerCase();

  if (weather.hasOwnProperty(forecast)) {
    let cityData = weather[forecast];
    let temp = weather[forecast].temp;
    let celciusTemp = Math.round(temp);
    let fahrenheitTemperature = Math.round((temp * 9) / 5 + 32);

    alert(
      `It is currently ${celciusTemp}°C | (${fahrenheitTemperature}°F) in ${forecast} with a Humidity of ${cityData.humidity}%`
    );
  } else if (!weather.hasOwnProperty(forecast)) {
    alert(
      `Sorry, we don't know the weather condition for this city, try going to https://www.google.com/search?q=weather+${forecast}`
    );
  } else {
    alert("Sorry, please enter a city");
  }
});*/
