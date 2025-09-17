let input = document.getElementById("input");
let ctof = document.getElementById("ctof");
let ftoc = document.getElementById("ftoc");
let ctok = document.getElementById("ctok");
let ktoc = document.getElementById("ktoc");
let ftok = document.getElementById("ftok");
let ktof = document.getElementById("ktof");
let result = document.getElementById("result");

let temp;

function convert() {

     temp = Number(input.value);

     if (temp == " ") {
          result.textContent = "Please enter a temperature value";
          return;
     }

     if (ctof.checked) {
          result.textContent = (temp * 9 / 5 + 32).toFixed(2) + "°F";
     }
     else if (ftoc.checked) {
          result.textContent = ((temp - 32) * 5 / 9).toFixed(2) + "°C";
     }
     else if (ctok.checked) {
          result.textContent = (temp + 273.15).toFixed(2) + "°K";
     }
     else if (ktoc.checked) {
          result.textContent = (temp - 273.15).toFixed(2) + "°C";
     }
     else if (ftok.checked) {
          result.textContent = (((temp - 32) * 5 / 9) + 273.15).toFixed(2) + "°K";
     }
     else if (ktof.checked) {
          result.textContent = ((((temp - 273.15) * 9 / 5) + 32)).toFixed(2) + "°F";
     }
     else
          result.textContent = "Select a unit";

}





