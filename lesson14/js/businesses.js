const requestURL = 'json/businessd.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

        const businesses = jsonObject["businesses"];

        for (let i = 0; i < businesses.length; i++) {

            let card = document.createElement("section");
            
            let busInfo = document.createElement("div");
            busInfo.classList.add("businessInfo");

            let nameInfo = document.createElement("div");
            nameInfo.classList.add("title");
            
            let companyname = document.createElement("h2");
            companyname.textContent = businesses[i].companyname;
            busInfo.appendChild(companyname);
            
            let address = document.createElement("p");
            address.textContent = businesses[i].address;
            busInfo.appendChild(address);

            let city = document.createElement("p");
            city.textContent = businesses[i].city;
            busInfo.appendChild(city);

            
            let phone = document.createElement("p");
            phone.textContent = businesses[i].phone;
            busInfo.appendChild(phone);

            let weblink = document.createElement("p");
            weblink.innerHTML = "<a href='" + businesses[i].companyurl + "'>Our Website</a>";
            busInfo.appendChild(weblink);
            
            let image = document.createElement("img");
            card.appendChild(image);
            
            image.setAttribute("src", businesses[i].imageurl);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', businesses[i].logo + " " + "logo");

            card.appendChild(busInfo);
            
            


            document.querySelector('div.directoryList').appendChild(card);
        }
    
    });