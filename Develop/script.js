// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// allows for addition of past present or future class in the function
var currentTime = 13;
console.log(currentTime);
var saveButton = $('.saveBtn');
var calendarInput = $('.description');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // on click, saves the text input to local storage
  saveButton.on('click', function () {
    var time = $(this).parent().attr("id").split("hour-")[1];
    var textInput = $(this).siblings('.description').val();
    localStorage.setItem(time, textInput);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // checking each block against the current time to add a class or past present or future

  function timeCheck () {

  $('.time-block').each(function () {
    var timeBlockTime = $(this).attr("id").split("hour-")[1];
 
      if (timeBlockTime > currentTime) {
        $(this).addClass('future');
      } else if (timeBlockTime == currentTime) {
        $(this).addClass('present');
      } else {
        $(this).addClass('past')
      }
  })
  }  ;

  timeCheck();


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));


  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
