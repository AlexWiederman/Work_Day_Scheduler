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
var current24HourString = dayjs().format('H');
// var current24Hour = Math.floor(current24HourString)
var current24Hour = 10;

// selecting all slot items to change background color
var timeSlots = document.querySelectorAll(".time-block")

function timeDisplay() {
  var currentTime = dayjs().format('MMM/D/YYYY h:m a');
  timeDisplayEl.text(currentTime);
}

for (i=9; i <18; i++) {
  if (current24Hour == i) {
    if (timeSlots[i-9].classList.contains("past")) {
    timeSlots[i-9].classList.remove("past")
    }
    if (timeSlots[i-9].classList.contains("future")) {
      timeSlots[i-9].classList.remove("future")
      }
      timeSlots[i-9].classList.add("present")
  } else if (current24Hour > i) {
    if (timeSlots[i-9].classList.contains("present")) {
    timeSlots[i-9].classList.remove("present")
    }
    if (timeSlots[i-9].classList.contains("future")) {
      timeSlots[i-9].classList.remove("future")
      }
      timeSlots[i-9].classList.add("past")
  } else if (current24Hour < i) {
    if (timeSlots[i-9].classList.contains("present")) {
    timeSlots[i-9].classList.remove("present")
    }
    if (timeSlots[i-9].classList.contains("past")) {
      timeSlots[i-9].classList.remove("past")
      }
      timeSlots[i-9].classList.add("future")
  }
  
}

// var test = timeSlots[0]
// test.classList.remove("past")

// $("firstSlotEl").removeClass("past present future")
// firstSlotEl.addClass("future")
// firstSlot.addClass("future");
// $('.slot').removeClass("present")


//Changing Background Color of slots

// Initializing time to display
timeDisplay();
// setting display to update every 1000
setInterval(timeDisplay,1000);
