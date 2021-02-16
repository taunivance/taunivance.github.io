const daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + year;
const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById("currentdate").textContent = currentdate;


const today = new Date();
            console.log(today);
            const dayNumber = today.getDay();
            console.log(dayNumber)
        
            if (dayNumber == 6) {
                element.classList.add ("showme");
            } else {
                element.classList.add ("hideme");

            }

const element = document.getElementsById("message");