//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=2b46ec7de5911d2fd80baa005669e116&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((changeme) => {
    //Once it comes back, display it to the console.
    console.log(changeme);
    
    

 }); //end of "then" fat arrow function



 