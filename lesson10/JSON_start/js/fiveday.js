const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherForecast) => {
    //Once it comes back, display it to the console.
    console.log(weatherForecast);
    console.log(weatherForecast.city.name);
    const mylist = weatherForecast.list

  document.getElementById ('place').innerHTML=weatherForecast.city.name;

 
  
  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  const d = new Date();

  const todayDayNumber = 
  d.getDay();

  let forecastDayNumber = 
  todayDayNumber;

  console.log(forecastDayNumber);

  for (i=0; i<mylist.length;i++) {
    var time = mylist[i].dt_txt;
    if (time.includes('19:00:00')){
      forecastDayNumber+=1;
      if (forecastDayNumber===7){
        forecastDayNumber=0;
      }

   
        let theDayName = document.createElement ("span");
        theDayName.textContent=weekDay[forecastDayNumber];
        console.log(">"+weekDay[forecastDayNumber]);
      

        let theTemp = document.createElement ("p");
        theTemp.textContent = weatherForecast.list[i].main.temp + "\xB0";
  

      weatherForcast(mylist[i], weekDay[forecastDayNumber])

    }//end if
  }//end for

}); //end of "then" fat arrow function

https://matthewfelton.github.io/lesson11/preston.html