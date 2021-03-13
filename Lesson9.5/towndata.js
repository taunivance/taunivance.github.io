const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject["towns"];
        for (let i = 0; i < towns.length; i++) {
          if (towns[i].name == "Preston" || towns[i].name == "Soda Srpings" || towns[i].name == "Fish Haven") 
            let card = document.createElement("section");
            let namediv = document.createElement("div");
            namediv.classList.add("title");
            
            let name = document.createElement("h2");
            name.textContent = towns[i].name
            namediv.appendChild(name);

            let motto = document.createElement("h3");
            motto.textContent = towns[i].motto
            namediv.appendChild(motto);
            
            let detaildiv = document.createElement("div");
            detaildiv.classList.add("details");
            
            let year = document.createElement("p");
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            detaildiv.appendChild(year);
            
            let pop = document.createElement("p");
            pop.textContent = "Population: " + towns[i].currentPopulation;
            detaildiv.appendChild(pop);

            let rain = document.createElement("p");
            rain.textContent = "Average Rainfall: " + towns[i].averageRainfall + "in.";
            detaildiv.appendChild(rain);
            
            let image = document.createElement("img");
            
            image.setAttribute("src", "images/" + [i].photo);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', towns[i].name);
            image.classList.add("card-image");
            

            //child of the first item
            card.appendChild(namediv);
            card.appendChild(image);
            card.appendChild(detaildiv);

            document.querySelector("div.cards").appendChild(card);
        }
    
    });

   


    