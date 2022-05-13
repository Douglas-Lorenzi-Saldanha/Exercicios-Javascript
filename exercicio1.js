const data = new Date();
const dia = data.getDay();
let nomeDia;
let turno;

if(dia === 0){nomeDia = "Sunday";}else if(dia === 1){nomeDia = "Monday";}
else if(dia === 2){nomeDia = "Tuesday";}else if(dia === 3){nomeDia = "Wednesday";}
else if(dia === 4){nomeDia = "Thursday";}else if(dia === 5){nomeDia = "Friday";}
else if(dia === 6){nomeDia = "Saturday";}

if(data.getHours() > 12{turno = " PM : "} else{turno = " AM : "}

console.log("Today is : " + nomeDia);
console.log("Current time is : " + data.getHours() + turno + data.getMinutes()  + " : " + data.getSeconds());
