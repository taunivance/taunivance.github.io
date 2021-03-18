const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherForecast) => {
    //Once it comes back, display it to the console.
    console.log(weatherForecast);
