//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherForecast) => {
    //Once it comes back, display it to the console.
    console.log(weatherForecast);

    document.getElementById ('place').innerHTML=weatherForecast.name;

    document.getElementById ('currentTemp').innerHTML=weatherForecast.main.temp;

    document.getElementById ('windSpeed').innerHTML=weatherForecast.wind.speed;

    const iconcode = weatherForecast.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById ('weather_icon').src = icon_path;

    
    
    

 }); //end of "then" fat arrow function



 