function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}   


const today = new Date();
const todayDayNumber = today.getDay();


const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
console.log(weekday[3]);
          
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.9534&lon=-117.3962&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial';          
          
fetch(apiURL)
.then((response) => response.json())
.then((weatherinfo) => {
//Once it comes back, display it to the console.
console.log(weatherinfo);          
          
document.getElementById("current").innerHTML = weatherinfo.current.temp;
document.getElementById("humid").innerHTML = weatherinfo.current.humidity;       
let condition = `${weatherinfo.current.weather[0].description}`;
document.getElementById("condition").innerHTML = condition.replace(/^\w/, (c) =>c.toUpperCase()
); 



if (weatherinfo.alert == undefined){
  document.getElementById("exit").classList.add("disabled");
  
} else {
  document.getElementById('wthrAlert').textContent = weatherinfo.alerts[0].description;
  document.getElementById("alertEvent").textContent = weatherinfo.alerts[0].event;
}
          


    var i;

    for (i = 0; i < 3; i++) {
      let forecastDayNumber = addDays(today, i).getDay();

            let theDay = document.createElement("div");
            theDay.classList.add ("w_box");
        
            let dayName = document.createElement("h4");
            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            dayName.appendChild(theDayName);
            

            let theTemp = document.createElement("p");
            theTemp.innerHTML = "Low: " + Math.round(weatherinfo.daily[i].temp.min) + "\xB0" + "<br>" + "High: " + Math.round(weatherinfo.daily[i].temp.max) + "\xB0" ;

            let iconcode = weatherinfo.daily[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;
            theIcon.setAttribute("alt", weatherinfo.daily[0].weather[0].description)
            theIcon.classList.add("w-icon");

            
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            document.getElementById("weatherforecast").appendChild(theDay);

          } 

           
      });

      function removeAlert() {
    
        document.getElementById("exit").classList.add("disabled");
      }