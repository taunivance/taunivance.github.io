const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=2b46ec7de5911d2fd80baa005669e116";

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
