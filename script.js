var date = document.getElementById("currentDay");
 
window.onload = getCurrentDate();
 
function getCurrentDate() {
    var currentDate = moment().format("MMMM Do YYYY");
    date.innerHTML = currentDate;
}

