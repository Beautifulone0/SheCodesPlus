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

let input = document.getElementById("city-input");
input.addEventListener("submit", function (event) {
  event.preventDefault();

  let userInput = document.getElementById("myInput").value;
  let h1 = document.querySelector("h1");

  h1.innerHTML = userInput;
});

let cf = document.getElementById("degrees");
function newDegree(event) {
  //event.preventDefault();
  let newDegrees = "☀ 40 °C | °F";

  cf.innerHTML = newDegrees;
}

cf.addEventListener("click", newDegree);

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
