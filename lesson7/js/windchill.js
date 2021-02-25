const temperature = parseFloat(document.getElementById("temp").textContent);

const windSpeed = parseFloat(document.getElementById("windSpd").textContent);

if (windSpeed > 3 && temperature <= 50){

    let winchil = Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));

    document.getElementById("windChl").textContent = winchil + "\xB0F;";

}else {

    document.getElementById("windChl").textContent = "No Chill";
}


