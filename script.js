var descriptionClass = document.getElementsByClassName("description");

window.onload = getCurrentDate();

$('.description').click(function(){
//when you type, the input is put into the html of description
});

$('.saveBtn').click(function(){
//save the content of the nearby description to local storage
})
 
function getCurrentDate() {
    var currentDate = moment().format("dddd, MMMM Do");
    $('#currentDay').html(currentDate);
    var currentTime = moment().format("kk");
    colorCode(currentTime);
}

function colorCode(currentTime) {
    var currentTimeNum = parseInt(currentTime);
    for(i = 0; i < descriptionClass.length; i++) {
        if(currentTimeNum > i + 9) {
            $(descriptionClass[i]).addClass('past');
        } else if(currentTimeNum = i + 9) {
            $(descriptionClass[i]).addClass('present');
        } else {
            $(descriptionClass[i]).addClass('future');
        }
    }
    grabPreviousEvents();
}

function grabPreviousEvents() {
//grab items from local storage and put them into the respective boxes
}