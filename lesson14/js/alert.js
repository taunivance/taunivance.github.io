const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.5653&lon=-117.2346&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial';          
          
fetch(apiURL)
.then((response) => response.json())
.then((weatherinfo) => {
    
if (weatherinfo.alert == undefined){
  document.getElementById("exit").classList.add("disabled");
  
} else {
  document.getElementById('wthrAlert').textContent = weatherinfo.alerts[0].description;
  document.getElementById("alertEvent").textContent = weatherinfo.alerts[0].event;
  
}
});

function removeAlert() {

  document.getElementById("exit").classList.add("disabled");
}