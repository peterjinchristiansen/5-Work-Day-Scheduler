var descriptionClass = document.getElementsByClassName("description");

window.onload = getCurrentDate();

var arr9 = [];
var arr10 = [];
var arr11 = [];
var arr12 = [];
var arr13 = [];
var arr14 = [];
var arr15 = [];
var arr16 = [];
var arr17 = [];

$('#description9').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description9").append(newEvent);
    arr9.push(newEvent);
});

$('#description10').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description10").append(newEvent);
    arr10.push(newEvent);
});

$('#description11').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description11").append(newEvent);
    arr11.push(newEvent);
});

$('#description12').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description12").append(newEvent);
    arr12.push(newEvent);
});

$('#description13').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description13").append(newEvent);
    arr13.push(newEvent);
});

$('#description14').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description14").append(newEvent);
    arr14.push(newEvent);
});

$('#description15').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description15").append(newEvent);
    arr15.push(newEvent);
});

$('#description16').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description16").append(newEvent);
    arr16.push(newEvent);
});

$('#description17').click(function(){
    var newEvent = prompt('Please enter a new event');
    $("#description17").append(newEvent);
    arr17.push(newEvent);
});

$('#save9').click(function(){
    alert(arr9);
    localStorage.setItem('arr9', arr9);
})

$('#save10').click(function(){
    localStorage.setItem('arr10', arr10);
})

$('#save11').click(function(){
    localStorage.setItem('arr11', arr11);
})

$('#save12').click(function(){
    localStorage.setItem('arr12', arr12);
})

$('#save13').click(function(){
    localStorage.setItem('arr13', arr13);
})

$('#save14').click(function(){
    localStorage.setItem('arr14', arr14);
})

$('#save15').click(function(){
    localStorage.setItem('arr15', arr15);
})

$('#save16').click(function(){
    localStorage.setItem('arr16', arr16);
})

$('#save17').click(function(){
    localStorage.setItem('arr17', arr17);
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
    arr9 = JSON.parse(localStorage.getItem('arr9')) || [];
    arr10 = JSON.parse(localStorage.getItem('arr10')) || [];
    arr11 = JSON.parse(localStorage.getItem('arr11')) || [];
    arr12 = JSON.parse(localStorage.getItem('arr12')) || [];
    arr13 = JSON.parse(localStorage.getItem('arr13')) || [];
    arr14 = JSON.parse(localStorage.getItem('arr14')) || [];
    arr15 = JSON.parse(localStorage.getItem('arr15')) || [];
    arr16 = JSON.parse(localStorage.getItem('arr16')) || [];
    arr17 = JSON.parse(localStorage.getItem('arr17')) || [];
    alert(arr9);

}

/*    $("#description9").append(arr9);
$("#description10").append(arr10);
$("#description11").append(arr11);
$("#description12").append(arr12);
$("#description13").append(arr13);
$("#description14").append(arr14);
$("#description15").append(arr15);
$("#description16").append(arr16);
$("#description17").append(arr17); */