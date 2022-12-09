// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
var timeDisplayEl = $('#currentDay');
var current24Hour = dayjs().format('H');
// selecting all slot items to change background color
// var timeSlots = $("[class*='slot']")
var timeSlots = document.getElementsByClassName('slot')

function timeDisplay() {
  var currentTime = dayjs().format('MMM/D/YYYY h:m a');
  timeDisplayEl.text(currentTime);
}

// for (i=9; i <18; i++) {
//   if (current24Hour === i) {
//     timeSlots(i-9).removeClass("past present future")
//   }
// }

var firstSlot = timeSlots[0]
var firstSlotEl = $('.slot')
// $("firstSlotEl").removeClass("past present future")
// firstSlotEl.addClass("future")
// firstSlot.addClass("future");
// $('.slot').removeClass("present")

// var containerEl = $('.container')
containerEl = document.getElementsByClassName('container')

//Changing Background Color of slots

// Initializing time to display
timeDisplay();
// setting display to update every 1000
setInterval(timeDisplay,1000);
