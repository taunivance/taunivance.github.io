fetch('towndata.json')
  .then((response) => response.json())
  .then((myInfo) => {
    console.log(myInfo);
    console.log(myInfo.towns[6]);
	
	for (let i = 0; i < myInfo.towns.length; i++) {
            if (i == 2 || i == 6 || i == 3) {
                let card = document.createElement('div');
                
                let info = document.createElement('section');
                let photo = document.createElement('figure');
                
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let date = document.createElement('p');
                let people = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                //info.setAttribute('class', 'info');
                
                name.textContent = myInfo.towns[i].name;
                motto.textContent = myInfo.towns[i].motto;
                date.textContent = 'Year Founded: ' + myInfo.towns[i].yearFounded;
                people.textContent = 'Population: ' + myInfo.towns[i].currentPopulation + 'souls';
                rain.textContent = 'Annual Rain Fall: ' + myInfo.towns[i].averageRainfall + 'in';
                image.setAttribute('src', 'images/'+myInfo.towns[i].photo);
                image.setAttribute('alt', myInfo.towns[i].name + ' Hometown');
                image.setAttribute('width', '400');
                image.setAttribute('height', '200');
                
                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(date);
                info.appendChild(people);
                info.appendChild(rain);
                card.appendChild(info);
                
                photo.appendChild(image);
                card.appendChild(photo);

                document.getElementById('display_here').appendChild(card);
            }
        }
  }); //end of "then" fat arrow function

