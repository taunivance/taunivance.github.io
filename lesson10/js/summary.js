const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial";
fetch(apiURL)
 .then((response) => response.json())
 .then((weatherinfo) => {
   //Once it comes back, display it to the console.
   console.log(weatherinfo);
   
   document.getElementById('place').innerHTML=weatherinfo.name;
   let current = `${weatherinfo.weather[0].description}, ${weatherinfo.main.temp}`;
   document.getElementById("current").innerHTML = current.replace(/^\w/, (c) =>
     c.toUpperCase()
   );
   document.getElementById('highTemp').innerHTML=weatherinfo.main.temp_max;
   document.getElementById('windSpeed').innerHTML=weatherinfo.wind.speed;
   document.getElementById("humid").innerHTML = weatherinfo.main.humidity;
;

/*s = wind speed t = temperature*/
const s = weatherinfo.wind.speed;
const t = weatherinfo.main.temp;
let wc =
  35.74 +
  0.6215 * t -
  35.75 * Math.pow(s, 0.16) +
  0.4275 * t * Math.pow(s, 0.16);
wc = Math.round(wc);
if (t <= 50 && s > 3) {
  document.getElementById("chill").textContent = wc + "\xB0" + "F";
} else {
  document.getElementById("chill").textContent = "N/A";
}

});