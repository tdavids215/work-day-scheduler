


// allows for addition of past present or future class in the function
var currentTime = dayjs().format('H');
console.log(currentTime);
var saveButton = $('.saveBtn');
var calendarInput = $('.description');


$(function () {
  // on click, saves the text input to local storage
  saveButton.on('click', function () {
    // splits the id of hour-9 to use to number stored at index of 1 for local storage key
    var time = $(this).parent().attr("id").split("hour-")[1];
    // what was typed in the text area
    var textInput = $(this).siblings('.description').val();
    // stores using the hour as the key
    localStorage.setItem(time, textInput);
  });

  // checking each block against the current time to add a class or past present or future
  function timeCheck() {

    // using each to do this for every div with a class of time-block
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
  };

  timeCheck();

  // retrieves whatever was typed and saved from local storage
  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));


  // displays the current date in the header of the page
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
