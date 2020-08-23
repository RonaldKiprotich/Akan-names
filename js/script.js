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


    var a = Math.floor((14 - month) / 12)
    var y = year - a
    var m = month + 12 * a - 2
    var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m )/ 12)) % 7;



    if (male.checked == true){
        document.getElementById("message").innerHTML=("You were born on <span>" + daysOfTheWeek[d] +  "</span> and your Akan name is <span>" + maleNames[d]);
        console.log(daysOfTheWeek[d]);
        console.log(maleNames[d]);
    } else if (female.checked == true){
        document.getElementById("message").innerHTML=("You were born on <span>" + daysOfTheWeek[d] +  " </span> and your Akan name is <span>" + femaleNames[d]);
        console.log(daysOfTheWeek[d]);
        console.log(femaleNames[d]);
    } else {
        alert("Select gender")
    }
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    
}