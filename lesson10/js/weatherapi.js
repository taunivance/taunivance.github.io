const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&Imperial&appid=2b46ec7de5911d2fd80baa005669e116';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const temperature = document.querySelector ('#temperature');
    temperature.textContent = jsObject.main.temp;

  });