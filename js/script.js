// Backend logic //
var daysOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// Frontend logic //
function findAkanNames(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    
    if (day <= 0 || day > 31 ){
        alert("Please enter a valid date!");
    } else if (month <= 0 ||  month > 12  || (month == 2 && day >29)){
        alert("Please enter a valid month!")
    } else if(year <= 0){
        alert("Please enter a valid year")
    }