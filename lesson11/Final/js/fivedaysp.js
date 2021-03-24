const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=2b46ec7de5911d2fd80baa005669e116";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    console.log(weatherInfo.city.name);

    document.getElementById("place").innerHTML = weatherInfo.city.name;
  
    const d = new Date();
    const todayDayNumber = d.getDay();
    
  
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    console.log(weekday[3]);
    
    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
        let time = mylist[i].dt_txt;
        //noon in current city
        if (time.includes("18:00:00")) {
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {forecastDayNumber = 0;}

            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            

            let theTemp = document.createElement("p");
            theTemp.textContent = mylist[i].main.temp + "\xB0";

            let iconcode = mylist[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;

            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            document.getElementById("weatherforecast").appendChild(theDay);

            
        } //end if
    } //end for

  }); //end of "then" fat arrow function


          const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial";
          fetch(apiURL2)
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

          const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
          fetch(requestURL)
          .then(function (response) {
              return response.json();
          })
          .then(function (jsonObject) {
              const towns = jsonObject["towns"];
              for (let i = 0; i < towns.length; i++) {
                  if (towns[i].name == "Soda Springs") {

                      let eventBox = document.createElement("div");
                      eventBox.classList.add("events");
                      for (let x = 0; x < towns[i].events.length; x++) {
                          let event = document.createElement("p");
                          event.textContent = towns[i].events[x];
                          eventBox.appendChild(event);
                          document.getElementById("event_box").appendChild(eventBox);
                      }

                  }
              }
          })
