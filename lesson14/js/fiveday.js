          const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial';
          
          fetch(apiURL)
          .then((response) => response.json())
          .then((weatherinfo) => {
            //Once it comes back, display it to the console.
            console.log(weatherinfo);
 
         
            document.getElementById("current").innerHTML = weatherinfo.current.temp;
            document.getElementById("humid").innerHTML = weatherinfo.current.humidity;
            ;
            let condition = `${current.weather[0].description}`;
            document.getElementById("condition").innerHTML = current.replace(/^\w/, (c) =>
            c.toUpperCase()
          );
           
          

          
            
         
});

  