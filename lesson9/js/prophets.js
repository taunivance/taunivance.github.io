const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject["prophets"];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            let namediv = document.createElement("div");
            namediv.classList.add("title");
            
            let h2 = document.createElement("h2");
            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            namediv.appendChild(h2);
            
            let infodiv = document.createElement("div");
            infodiv.classList.add("info");
            
            let birthdate = document.createElement("p");
            birthdate.textContent = "Date of Birth:\r\n " + prophets[i].birthdate;
            infodiv.appendChild(birthdate);
            
            let birthlocation = document.createElement("p");
            birthlocation.textContent = "Place of Birth:\r\n " + prophets[i].birthplace;
            infodiv.appendChild(birthlocation);
            
            let image = document.createElement("img");
            
            image.setAttribute("src", prophets[i].imageurl);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname);
            

            //child of the first item
            card.appendChild(namediv);
            card.appendChild(image);
            card.appendChild(infodiv);

            document.querySelector('div.cards').appendChild(card);
        }
    
    });

    WebFont.load({
      google: {families: ['Merriweather Sans', 'sans-serif']}
    });


    